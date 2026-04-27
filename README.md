# OmniSense Website (React + FastAPI)

Marketing site for omnisense.pk with a single-page React frontend and a FastAPI backend for contact inquiries.

## Structure

- frontend: React single-page site (Vite)
- backend: FastAPI API with SQLite persistence

## Local Development Setup

### Frontend

1. Open a terminal in the frontend directory
2. Install dependencies: `npm install`
3. Copy env template: `cp .env.example .env`
4. Update `.env` with your API URL (default works for local dev)
5. Start dev server: `npm run dev`

Frontend runs on: http://localhost:5173

### Backend

1. Open a terminal in the backend directory
2. Create and activate Python virtual environment: `python -m venv .venv` then activate it
3. Install dependencies: `pip install -r requirements.txt`
4. Copy env template: `cp .env.example .env`
5. Update `.env` with your SMTP and CORS settings
6. Run API: `python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 9000`

Backend runs on: http://localhost:9000

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact inquiry
  - Validates required fields server-side
  - Stores submissions in SQLite/PostgreSQL
  - Sends email notification when SMTP is configured
  - Rate limit: 5 submissions per IP per hour

## Deployment

### Frontend (Vercel)

1. Push code to GitHub (main branch)
2. Connect your GitHub repo to Vercel: https://vercel.com
3. Vercel will auto-detect Vite configuration
4. Set environment variable in Vercel project settings:
   - `VITE_API_BASE_URL` = Your backend URL (e.g., `https://omnisense-api.onrender.com`)
5. Deploy

### Backend (Render)

1. Push code to GitHub (main branch)
2. Connect your GitHub repo to Render: https://render.com
3. Create a new Web Service and select your repository
4. Render will auto-detect `render.yaml` configuration
5. Set environment variables in Render dashboard:
   - `DATABASE_URL` = Your PostgreSQL connection string (recommended for production)
   - `ALLOWED_ORIGIN` = Your frontend URL (e.g., `https://omnisense.pk`)
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USERNAME`, `SMTP_PASSWORD`, `SMTP_USE_TLS`, `SMTP_FROM_EMAIL`, `NOTIFICATION_EMAIL`
6. Deploy

### Production Configuration

Before deploying to production:

1. Update backend `.env`:
   - Change `ENVIRONMENT=production`
   - Set `DATABASE_URL` to PostgreSQL (if using SQLite, ensure persistence)
   - Set `ALLOWED_ORIGIN=https://omnisense.pk` (or your domain)
   - Configure SMTP credentials for email notifications

2. Update frontend `.env`:
   - Set `VITE_API_BASE_URL` to your backend domain

3. Enable HTTPS everywhere

## Environment Variables

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:9000
# For production: https://your-backend-domain.com
```

### Backend (.env)
```
ENVIRONMENT=development
DATABASE_URL=sqlite:///./omnisense.db
ALLOWED_ORIGIN=http://localhost:5173

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_USE_TLS=true
SMTP_FROM_EMAIL=noreply@omnisense.pk
NOTIFICATION_EMAIL=omnisense@gmail.com
```

## Asset Placeholders

Completed:
- ✅ Central Node image (Solution page)
- ✅ Household Node image (Solution page)
- ✅ CPO photo - Shahim Riaz (Team page)
- ✅ COO photo - Taha Sadat (Team page)

TODO:
- CEO photo - Tayyab Khan
- CTO photo - Azam Rafique
- CMO photo - Asheer Adnan
- Hero background image
- Demo video embed
