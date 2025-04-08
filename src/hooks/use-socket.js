// socket.js
import { useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = 'https://market-msjv.onrender.com'; // Your WebSocket URL

const useSocket = () => {
  const socketRef = useRef(null);

  useEffect(() => {
    // Initialize socket connection
    socketRef.current = io(SOCKET_URL, {
      transports: ['websocket'],
      autoConnect:false
    });

    // Log when socket is connected
    socketRef.current.on('connect', () => {
      console.log('Socket connected:', socketRef.current.id);
    });

    // Clean up: disconnect when the component is unmounted
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
        console.log('Socket disconnected');
      }
    };
  }, []);

  return socketRef.current; // Return the socket instance
};

export default useSocket;
