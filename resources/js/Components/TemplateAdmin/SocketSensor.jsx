import React, { useEffect, useState } from "react";


const SocketSensor = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const socket = new WebSocket('ws://127.0.0.1:8000/');

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const message = JSON.parse(event.data);
            console.log('event : ', event.data)
            setMessages((prevMessages) => [...prevMessages, message]);
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        socket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            {messages.map((message, index) => (
                <div key={index}>{message}</div>
            ))}
        </div>
    );
}

export default SocketSensor