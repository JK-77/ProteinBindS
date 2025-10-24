# ProteinBind Deployment Guide

## Vercel Deployment

### Environment Variables Required:

1. **NEXTAUTH_SECRET** - Generate a random secret key
2. **NEXTAUTH_URL** - Your production URL (e.g., https://proteinbind.vercel.app)
3. **MONGODB_URL** - Your MongoDB Atlas connection string
4. **NEXT_PUBLIC_NVIDIA_API_KEY** - NVIDIA API key for molecular generation
5. **ABLY_API_KEY** - Ably API key for real-time chat
6. **RESEND_KEY** - Resend API key for email services
7. **NEXT_PUBLIC_API_BASE_URL** - Your production API base URL

### Backend Server

The backend proxy server needs to be deployed separately on a platform like Railway, Render, or Heroku.

**Backend Environment Variables:**
- `NVIDIA_API_KEY` - Your NVIDIA API key

### Deployment Steps:

1. **Frontend (Vercel):**
   - Connect your GitHub repository to Vercel
   - Set all environment variables in Vercel dashboard
   - Deploy

2. **Backend (Railway/Render):**
   - Deploy the `backend/` folder
   - Set the NVIDIA API key
   - Update the frontend to use the backend URL

### Local Development:

```bash
# Frontend
npm install
npm run dev

# Backend (separate terminal)
cd backend
npm install
npm start
```

### Production URLs:

- Frontend: https://proteinbind.vercel.app
- Backend: https://your-backend-url.railway.app (or similar)
