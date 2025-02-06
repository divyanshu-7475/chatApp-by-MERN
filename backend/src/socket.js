import { Server } from 'socket.io';

export const io = new Server(8080, {
    cors: {
        origin: 'http://localhost:5173',
    }
});


