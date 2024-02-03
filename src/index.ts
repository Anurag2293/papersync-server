// Your main server file
import { createServer } from 'http';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Server as SocketIOServer } from 'socket.io';
import { connectDB } from './db/mongoose';
import { initializeSocket } from './routers/socket';
import { clientURL } from './lib/constants';

dotenv.config();
connectDB();

const app: Express = express();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: clientURL,
};
app.use(cors(corsOptions));
app.use(express.json());

// socket io
const server = createServer(app);
const io = new SocketIOServer(server, {
    cors: {
        origin: clientURL,
        methods: ['GET', 'POST'],
    },
});

// Initialize Socket.IO logic from the separate module
initializeSocket(io);

server.listen(port, () => {
    console.log(`[server]: Server is running on port: ${port}`);
});
