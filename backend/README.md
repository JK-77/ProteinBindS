# ProteinBind Backend Server

Express.js proxy server for NVIDIA API integration.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

## 🌐 Endpoints

- `GET /ping` - Health check
- `POST /api/generate` - Molecule generation proxy

## 🔧 Environment Variables

```bash
NVIDIA_API_KEY=your-nvidia-api-key
PORT=5050
```

## 📦 Deployment

### Railway
1. Connect GitHub repository
2. Set root directory to `backend`
3. Add environment variables
4. Deploy

### Render
1. Create new web service
2. Connect repository
3. Set root directory to `backend`
4. Add environment variables
5. Deploy

## 🔗 Frontend Integration

Update your frontend's `NEXT_PUBLIC_BACKEND_URL` to point to your deployed backend URL.

Example: `https://your-backend.railway.app/api/generate`
