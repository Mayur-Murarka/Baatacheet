# Stage 1: Build Frontend
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Build Backend & Production Image
FROM node:20-alpine
WORKDIR /app

# Install backend dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install --omit=dev

# Copy backend source
COPY backend/ ./backend/

# Copy built frontend into location expected by backend
COPY --from=frontend-builder /app/frontend/dist ./frontend/dist

ENV NODE_ENV=PRODUCTION
ENV PORT=3000

EXPOSE 3000

WORKDIR /app/backend
CMD ["node", "app.js"]
