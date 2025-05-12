import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      setMessages(prev => [...prev, msg]);
    });
  }, []);

  const sendMessage = () => {
    socket.emit("sendMessage", input);
    setInput("");
  };

  return (
    <div className="p-4">
      <div className="h-48 overflow-y-auto bg-gray-100 rounded p-2 mb-2">
        {messages.map((msg, i) => <p key={i}>{msg}</p>)}
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type a message"
        className="border p-2 rounded mr-2"
      />
      <button onClick={sendMessage} className="bg-green-600 text-white px-4 py-2 rounded">Send</button>
    </div>
  );
};

export default ChatBox;
