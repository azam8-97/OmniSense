from fastapi import Depends, FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from .config import settings
from .database import Base, engine, get_db
from .emailer import send_contact_notification
from .models import ContactSubmission
from .rate_limit import InMemoryRateLimiter
from .schemas import ContactRequest, ContactResponse

app = FastAPI(title=settings.app_name)
rate_limiter = InMemoryRateLimiter(max_requests=5, per_hours=1)

# In production, set ALLOWED_ORIGIN=https://omnisense.pk
app.add_middleware(
    CORSMiddleware,
    allow_origins=[settings.allowed_origin],
    allow_credentials=True,
    allow_methods=['POST', 'GET', 'OPTIONS'],
    allow_headers=['*']
)


@app.on_event('startup')
def on_startup() -> None:
    Base.metadata.create_all(bind=engine)


@app.get('/api/health')
def health() -> dict[str, str]:
    return {'status': 'ok'}


@app.post('/api/contact', response_model=ContactResponse)
def create_contact_submission(
    payload: ContactRequest,
    request: Request,
    db: Session = Depends(get_db)
) -> ContactResponse:
    client_ip = request.client.host if request.client else 'unknown'

    if not rate_limiter.allow(client_ip):
        raise HTTPException(status_code=429, detail='Too many submissions. Please try again later.')

    record = ContactSubmission(
        full_name=payload.full_name.strip(),
        phone_number=payload.phone_number.strip(),
        email=str(payload.email).strip(),
        organisation=payload.organisation.strip(),
        city=payload.city,
        homes_count=payload.homes_count,
        message=(payload.message or '').strip() or None,
        ip_address=client_ip
    )

    db.add(record)
    db.commit()
    db.refresh(record)

    try:
        send_contact_notification(payload)
    except Exception:
        # Keep lead capture resilient even if email provider is temporarily unavailable.
        pass

    return ContactResponse(
        success=True,
        message='Inquiry submitted successfully.',
        submission_id=record.id
    )
