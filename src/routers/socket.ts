import { Server, Socket } from 'socket.io';

import { findOrCreateDocument } from '../controllers/socket';

export const initializeSocket = (io: Server): void => {
    io.on('connection', (socket: Socket) => {
        // Your Socket.IO logic goes here
        console.log(`User connected: ${socket.id}`);


        socket.on("get-document", async (documentId) => {
            try {
                console.log("connected with id: ", + documentId);
                const { error, document } = await findOrCreateDocument(documentId);
                // socket.

            } catch (error) {
                
            }

        })

        // Example: Broadcast a message to all connected clients
        socket.on('chat message', (msg: string) => {
            io.emit('chat message', msg);
        });

        socket.on('disconnect', () => {
            console.log(`User disconnected: ${socket.id}`);
        });
    });
}
