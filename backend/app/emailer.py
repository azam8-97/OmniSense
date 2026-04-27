import smtplib
from email.message import EmailMessage

from .config import settings
from .schemas import ContactRequest


def send_contact_notification(payload: ContactRequest) -> None:
    if not settings.smtp_host or not settings.smtp_username or not settings.smtp_password:
        return

    subject = f'New OmniSense Inquiry: {payload.organisation}'
    body = (
        'A new inquiry was submitted on omnisense.pk.\n\n'
        f'Name: {payload.full_name}\n'
        f'Phone: {payload.phone_number}\n'
        f'Email: {payload.email}\n'
        f'Organisation: {payload.organisation}\n'
        f'City: {payload.city}\n'
        f'Homes Count: {payload.homes_count}\n'
        f'Message: {payload.message or "-"}\n'
    )

    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = settings.smtp_from_email
    msg['To'] = settings.notification_email
    msg.set_content(body)

    with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=20) as server:
        if settings.smtp_use_tls:
            server.starttls()
        server.login(settings.smtp_username, settings.smtp_password)
        server.send_message(msg)
