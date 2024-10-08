import React, { useEffect, useState } from 'react';

function Chatapp() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [ws, setWs] = useState(null);

    useEffect(() => {
        const webSocket = new WebSocket('ws://localhost:3001');

        webSocket.onopen = () => {
            console.log('WebSocket connected');
        };

        webSocket.onmessage = (event) => {
            setMessages((prevMessages) => [...prevMessages, event.data]);
        };

        webSocket.onclose = () => {
            console.log('WebSocket closed');
        };

        setWs(webSocket);

        return () => {
            webSocket.close();
        };
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        if (input && ws) {
            ws.send(input);
            setInput('');
        }
    };

    return (
        <div>
            <h1>Real-Time Chat</h1>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    required
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Chatapp;
