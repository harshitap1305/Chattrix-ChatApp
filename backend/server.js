import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import messageRoutes from './routes/messageRoutes.js'
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';
import http from 'http';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io= new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
        credentials:true
    }
})
app.use(cors());
app.use(express.json());

// Clerk middleware
app.use(
  ClerkExpressWithAuth({
    secretKey: process.env.CLERK_SECRET_KEY,
  })
);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

// API routes
app.use('/api/users', userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
