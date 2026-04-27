from pydantic import BaseModel, EmailStr, Field


class ContactRequest(BaseModel):
    full_name: str = Field(min_length=2, max_length=120)
    phone_number: str = Field(min_length=7, max_length=40)
    email: EmailStr
    organisation: str = Field(min_length=2, max_length=255)
    city: str = Field(pattern='^(Lahore|Rawalpindi|Karachi|Other)$')
    homes_count: int | None = Field(default=None, ge=0, le=20000)
    message: str | None = Field(default=None, max_length=2000)


class ContactResponse(BaseModel):
    success: bool
    message: str
    submission_id: int | None = None
