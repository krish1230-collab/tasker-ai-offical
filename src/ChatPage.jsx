import React, { useState } from "react";
import "./ChatPage.css";
import { fetchGeminiResponse } from "./gemini";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi there! I'm your assistant 🤖" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setTyping(true);

    const geminiResponse = await fetchGeminiResponse(input);

    setMessages([
      ...newMessages,
      { sender: "bot", text: geminiResponse },
    ]);
    setTyping(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chatbot-wrapper">
      <div className="chatbox">
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              <span className="avatar">{msg.sender === "bot" ? "🤖" : "🧑"}</span>
              <div className="text">{msg.text}</div>
            </div>
          ))}
          {typing && (
            <div className="chat-message bot">
              <span className="avatar">🤖</span>
              <div className="typing">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
