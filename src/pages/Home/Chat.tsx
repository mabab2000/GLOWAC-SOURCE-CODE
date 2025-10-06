import { FaComments } from "react-icons/fa";
import { useState } from "react";

export default function ChatInterface() {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    const phone = "+250783857284";
    const encodedMessage = encodeURIComponent(message || "Hello");
    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, "_blank"); // Opens WhatsApp in a new tab/app
  };

  return (
    <div>
      {/* Chat box */}
      <div
        className={`chat-container fixed bottom-5 bg-white rounded-lg shadow-lg z-[999] transition-all duration-300
          ${showChat ? "block" : "hidden"}
          w-[90%] sm:w-[400px]
          left-1/2 sm:left-auto sm:right-5
          -translate-x-1/2 sm:translate-x-0
        `}
      >
        {/* Chat Header */}
        <div className="chat-header bg-[#0d9488] text-white px-5 py-2.5 rounded-t-lg flex justify-between items-center">
          <h3 className="m-0 text-base sm:text-lg">Let's chat on WhatsApp</h3>
          <button
            className="close-chat bg-transparent text-white border-none outline-none cursor-pointer text-lg"
            onClick={() => setShowChat(false)}
          >
            ×
          </button>
        </div>

        {/* Chat Body */}
        <div className="chat-body px-5 py-5 h-[300px] overflow-y-auto">
          <div className="chat-message flex mb-2.5">
            <div className="message text-black bg-[#f0f4f8] px-2.5 py-2.5 rounded-lg max-w-[70%]">
              How can I help you? :)
            </div>
          </div>
        </div>

        {/* Chat Input */}
        <div className="chat-input flex px-5 py-2.5 border-t border-[#f0f4f8]">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            className="flex-grow border-none outline-none px-2.5 py-2.5 text-base rounded-lg"
          />
          <button
            onClick={sendMessage}
            className="bg-[#0d9488] text-white px-5 py-2.5 text-base border-none outline-none cursor-pointer rounded-lg hover:bg-[#0b7a6f] transition"
          >
            Send
          </button>
        </div>
      </div>

      {/* Toggle button */}
      <div
        className="chat-toggle fixed bottom-5 right-5 bg-[#0d9488] text-white w-20 h-20 rounded-full flex justify-center items-center cursor-pointer z-[998]"
        onClick={() => setShowChat(!showChat)}
      >
        <FaComments className="text-5xl" />
      </div>
    </div>
  );
}
