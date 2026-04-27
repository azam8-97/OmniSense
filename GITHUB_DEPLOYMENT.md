# GitHub Repository Setup & Deployment Guide

## Before First Push

### 1. Local Git Configuration
```bash
# Set your git config for this project (ns7707k account)
git config user.name "ns7707k"
git config user.email "ns7707k@gre.ac.uk"

# Verify configuration
git config user.name
git config user.email
```

### 2. Initial GitHub Repository Setup
```bash
# The repository already exists at:
# https://github.com/azam8-97/OmniSense

# Initialize if not already done
git init

# Add remote
git remote add origin https://github.com/azam8-97/OmniSense.git

# Verify remote
git remote -v
```

### 3. Prepare Files for First Commit
```bash
# Check what will be committed
git status

# Stage files (should exclude node_modules, .env, .venv, etc.)
git add .

# Verify .gitignore is working
git status

# Expected to NOT see:
# - node_modules/
# - backend/.venv/
# - backend/__pycache__/
# - .env files
# - *.db files
```

### 4. First Commit
```bash
git commit -m "Initial commit: OmniSense website with React frontend and FastAPI backend"
```

### 5. Push to GitHub
```bash
# Push to main branch
git branch -M main
git push -u origin main
```

## Pre-Deployment Checklist

Before deploying to Vercel and Render:

### Code Quality
- [ ] All pages render without errors
- [ ] Contact form validates and submits
- [ ] No console errors in browser
- [ ] No errors in backend logs
- [ ] All dependencies are in package.json and requirements.txt

### Configuration Files
- [ ] `.gitignore` excludes sensitive files
- [ ] `vercel.json` is in frontend root
- [ ] `render.yaml` is in backend root
- [ ] `.env.example` files document all required variables
- [ ] `DEPLOYMENT.md` has complete instructions
- [ ] `README.md` has setup and deployment info

### GitHub Repository
- [ ] Repository is public
- [ ] Main branch is protected (optional but recommended)
- [ ] All code is committed and pushed
- [ ] No .env or secrets in repository

## Deployment Flow

1. **GitHub** (current)
   ```
   code → git add . → git commit → git push origin main
   ```

2. **Vercel** (automatic after push)
   ```
   GitHub webhook → Vercel detects push → npm run build → Deploy dist/ → Go live
   ```

3. **Render** (automatic after push)
   ```
   GitHub webhook → Render detects push → render.yaml → Install deps → Build & start → Go live
   ```

## Monitoring Deployments

### Vercel
- Visit: https://vercel.com/dashboard
- Select your OmniSense project
- View deployment logs in real-time
- Site goes live at vercel URL or custom domain

### Render
- Visit: https://dashboard.render.com
- Select your OmniSense Backend service
- View deployment logs in real-time
- API becomes available at render URL

## If Deployment Fails

### Vercel Build Issues
1. Check Vercel logs: https://vercel.com/dashboard → Project → Deployments
2. Verify `VITE_API_BASE_URL` environment variable is set
3. Ensure `dist/` directory builds successfully locally
4. Check for Node version compatibility

### Render Build Issues
1. Check Render logs: https://dashboard.render.com → Service → Logs
2. Verify all Python dependencies install correctly
3. Ensure `render.yaml` syntax is valid
4. Check all environment variables are set
5. Verify database connection string is correct

## Rollback

If something breaks after deployment:

### Vercel
- Go to Deployments tab
- Select a previous working deployment
- Click "Promote to Production"

### Render
- Restart the service or redeploy from a previous commit
- Or manually fix and push again

## Post-Deployment

After successful deployment:

1. Test frontend at deployed URL
2. Test API at backend URL
3. Test contact form end-to-end
4. Check email notifications work
5. Monitor for errors in logs
6. Update documentation with live URLs
