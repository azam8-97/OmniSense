# Deployment Checklist

## Pre-Deployment Testing

- [ ] Test locally: `npm run dev` in frontend and backend running
- [ ] Test all page navigation works
- [ ] Test contact form submission
- [ ] Test email notifications (if SMTP configured)
- [ ] Cross-browser testing (Chrome, Firefox, Safari)
- [ ] Mobile responsiveness check
- [ ] Verify API health endpoint: `http://localhost:9000/api/health`

## Backend Deployment (Render)

1. **Repository Setup**
   - [ ] Ensure `render.yaml` is in backend root directory
   - [ ] `.env` is NOT committed to GitHub (check .gitignore)
   - [ ] `omnisense.db` is NOT committed (check .gitignore)
   - [ ] All dependencies in `requirements.txt`

2. **Render Configuration**
   - [ ] Create Render account and Web Service
   - [ ] Connect GitHub repository
   - [ ] Render auto-detects `render.yaml`
   - [ ] Build command: `pip install -r requirements.txt`
   - [ ] Start command: `python -m uvicorn app.main:app --host 0.0.0.0 --port 8000`

3. **Environment Variables** (Set in Render Dashboard)
   - [ ] `ENVIRONMENT=production`
   - [ ] `DATABASE_URL=postgresql://...` (use Render PostgreSQL)
   - [ ] `ALLOWED_ORIGIN=https://your-frontend-domain.com`
   - [ ] `SMTP_HOST=smtp.gmail.com`
   - [ ] `SMTP_PORT=587`
   - [ ] `SMTP_USERNAME=your-email@gmail.com`
   - [ ] `SMTP_PASSWORD=your-app-password` (use App Password for Gmail)
   - [ ] `SMTP_USE_TLS=true`
   - [ ] `SMTP_FROM_EMAIL=noreply@omnisense.pk`
   - [ ] `NOTIFICATION_EMAIL=omnisense@gmail.com`

4. **Post-Deployment**
   - [ ] Test health endpoint: `https://your-backend-url.onrender.com/api/health`
   - [ ] Test contact endpoint with test data
   - [ ] Verify CORS is configured correctly
   - [ ] Check logs for errors

## Frontend Deployment (Vercel)

1. **Repository Setup**
   - [ ] Ensure `vercel.json` is in frontend root directory
   - [ ] `.env` is NOT committed (check .gitignore)
   - [ ] Household Node image is in `public/` folder
   - [ ] All dependencies in `package.json`

2. **Vercel Configuration**
   - [ ] Create Vercel account
   - [ ] Import GitHub repository
   - [ ] Vercel auto-detects Vite configuration
   - [ ] Build command: `npm run build`
   - [ ] Output directory: `dist`

3. **Environment Variables** (Set in Vercel Project Settings)
   - [ ] `VITE_API_BASE_URL=https://your-backend-domain.com`

4. **Post-Deployment**
   - [ ] Visit frontend URL
   - [ ] Test all page navigation
   - [ ] Test contact form submission
   - [ ] Verify API integration works
   - [ ] Check browser console for errors

## Production URLs

Once deployed, update these or note them:

- **Frontend**: https://omnisense-frontend.vercel.app (or your domain)
- **Backend**: https://omnisense-backend.onrender.com (or your domain)

## Troubleshooting

**CORS Issues:**
- Backend `ALLOWED_ORIGIN` must match frontend domain exactly
- Include protocol (https://) and domain, no trailing slash

**Build Failures:**
- Check Vercel and Render logs for specific errors
- Ensure all environment variables are set
- Verify Python and Node versions match development

**Form Not Submitting:**
- Check browser Network tab for API requests
- Verify backend is receiving requests
- Check backend logs for errors
- Ensure rate limiting isn't blocking requests

**Email Not Sending:**
- Verify SMTP credentials are correct
- Check Gmail App Password (not regular password)
- Verify NOTIFICATION_EMAIL is correct
- Check backend logs for email errors
