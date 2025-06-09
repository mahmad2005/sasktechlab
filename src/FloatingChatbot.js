import React, { useState, useEffect, useRef } from 'react';

const CHATBOT_SERVER_ADDRESS = process.env.REACT_APP_CHATBOT_SERVER_ADDRESS;

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const chatEndRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);

    // If opening chat, show Agentica greeting first time
    if (!isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'agentica',
          text: 'Hi, I am Agentica, an AI chatbot of SaskTech Lab. How can I help you today?'
        }
      ]);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);

    // Clear input
    setInput('');

    try {
      const res = await fetch(`${CHATBOT_SERVER_ADDRESS}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();

      // Add bot reply (Agentica)
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'user', text: input },
        {
          role: 'agentica',
          text: data.response || 'Sorry, I could not process your request.'
        }
      ]);
    } catch (err) {
      console.error('Error:', err);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          role: 'agentica',
          text: 'An error occurred while processing your request.'
        }
      ]);
    }
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999
        }}
      >
        <button
          onClick={toggleChat}
          className={`${
            isOpen ? 'bg-red-600' : 'bg-green-600'
          } text-white px-4 py-2 rounded-full shadow-lg`}
        >
          {isOpen ? 'Close Chat' : 'Chat with us'}
        </button>

        {isOpen && (
          <div
            className="bg-white border border-gray-300 rounded-lg shadow-lg mt-2 p-2 w-80 h-96 flex flex-col"
            style={{
              position: 'absolute',
              bottom: '60px',
              right: '0px'
            }}
          >
            {/* Chat Header */}
            <div className="bg-green-600 text-white px-3 py-2 rounded-t-lg text-sm font-bold">
              Agentica - AI Assistant
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-2 text-sm">
              {messages.map((m, i) => (
                <div key={i} className="mb-2">
                  <strong>
                    {m.role === 'user' ? 'You' : 'Agentica'}:
                  </strong>{' '}
                  {m.text}
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="flex space-x-2 p-2 border-t border-gray-200">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') sendMessage();
                }}
                className="border flex-1 px-2 py-1 rounded text-sm"
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
