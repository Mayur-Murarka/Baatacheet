# Baatacheet 💬

A modern, real-time fullstack chat application built with **React**, **Redux Toolkit**, **Vite**, **Express**, **Socket.io**, and **MongoDB**.

---

## ✨ Features

- 🔐 **Authentication**: User registration and login with JWT and secure cookies.
- ⚡ **Realtime Messaging**: Instant one-on-one and group messaging powered by Socket.io.
- 👥 **Group Chats & Management**: Create groups, rename, add/remove members, and leave groups.
- 📎 **Media Attachments**: Send images, audio, video, and documents seamlessly with Cloudinary.
- 🟢 **Online Status & Typing Indicators**: Real-time notifications when friends are online or typing.
- 🛡️ **Admin Panel**: Manage users, chats, messages, and view analytics charts.

---

## 🚀 How to Make This Website Live

> **Important Note on GitHub Pages**: GitHub Pages only hosts static HTML/JS sites and cannot run Node.js, Express servers, or Socket.io WebSockets. To make Baatacheet live, use one of the deployment platforms below.

### Option 1: Deploy to Render (Recommended - Free & 1-Click)

The repository includes a ready-to-use unified deployment setup:

1. Push this repository to your GitHub account.
2. Sign in to [Render.com](https://render.com).
3. Click **New +** > **Blueprint** (or **Web Service**).
4. Connect this repository:
   - **Build Command**: `npm run postinstall && npm run build`
   - **Start Command**: `npm start`
5. Configure your Environment Variables:
   - `MONGO_URI`: Your MongoDB Atlas connection string.
   - `JWT_SECRET`: Any random 32+ character string.
   - `ADMIN_SECRET_KEY`: Your secret key for admin login.
   - `CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name.
   - `CLOUDINARY_API_KEY`: Your Cloudinary API key.
   - `CLOUDINARY_API_SECRET`: Your Cloudinary API secret.
   - `NODE_ENV`: `PRODUCTION`
   - `PORT`: `3000` (or leave default for Render)
6. Click **Deploy**. Your app will be live at `https://your-service-name.onrender.com`!

---

### Option 2: Deploy with Docker

Use the included production-ready `Dockerfile`:

```bash
docker build -t baatacheet .
docker run -p 3000:3000 --env-file backend/.env baatacheet
```

Deployable directly on **Railway**, **Fly.io**, **DigitalOcean App Platform**, or any VPS.

---

### Option 3: Deploy Frontend to Vercel

The repo now includes [`vercel.json`](./vercel.json) configured out-of-the-box:

1. Import the repository in [Vercel](https://vercel.com).
2. Leave all Root Directory / Build Settings as default (automatically detected via `vercel.json`).
3. Add Environment Variable:
   - `VITE_SERVER`: The URL of your deployed backend service (e.g. `https://your-backend.onrender.com`).
4. Click **Deploy**. Vercel will build and serve the client with full client-side SPA routing support.

> **Note on WebSockets**: Realtime chats require WebSockets (`socket.io`). You should run your backend on a persistent server (Render, Railway, Fly.io, or Docker) so that WebSocket connections and MongoDB stay active.

- **Backend on Render**:
  - Root directory: `backend`
  - Build command: `npm install`
  - Start command: `node app.js`
  - Environment variable: `CLIENT_URL=https://your-frontend.vercel.app`

---

## 🛠️ Local Development

### 1. Prerequisites
- Node.js (v18+)
- MongoDB connection URI
- Cloudinary account for media upload

### 2. Setup Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB and Cloudinary credentials
npm run dev
```

### 3. Setup Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

The frontend will run on `http://localhost:5173` and automatically proxy API calls to `http://localhost:3000`.

---

## 📁 Project Structure

```
Baatacheet/
├── backend/
│   ├── constants/       # App constants and CORS configuration
│   ├── controllers/     # Route logic for auth, chat, admin
│   ├── lib/             # Helpers and validation schemas
│   ├── middlewares/     # Auth, error handling, file upload
│   ├── models/          # Mongoose schemas (User, Chat, Message, Request)
│   ├── routes/          # Express API route declarations
│   ├── utils/           # Database connection & features
│   └── app.js           # Server entry point & static file serving
├── frontend/
│   ├── src/
│   │   ├── components/  # Layout and shared UI elements
│   │   ├── pages/       # Main views (Chat, Login, Groups, Admin)
│   │   ├── redux/       # Redux Toolkit store, reducers, and RTK Query
│   │   ├── socket.jsx   # Socket.io client context provider
│   │   └── main.jsx     # Client app root
│   └── vite.config.js   # Vite configuration with proxy
├── Dockerfile           # Multi-stage production container build
├── render.yaml          # Render Blueprint deployment config
└── package.json         # Root scripts for unified deployment
```
