from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file='.env', env_file_encoding='utf-8', extra='ignore')

    app_name: str = 'OmniSense Contact API'
    environment: str = 'development'
    database_url: str = 'sqlite:///./omnisense.db'
    allowed_origin: str = 'http://localhost:5173'

    smtp_host: str | None = None
    smtp_port: int = 587
    smtp_username: str | None = None
    smtp_password: str | None = None
    smtp_use_tls: bool = True
    smtp_from_email: str = 'noreply@omnisense.pk'
    notification_email: str = 'OmniSense@gmail.com'


settings = Settings()
