import React, { useState } from "react";
import { IoMdChatboxes } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const SmartAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "مرحبًا! أنا مساعدك الذكي، كيف يمكنني مساعدتك اليوم؟",
    },
  ]);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // رد وهمي الآن - سيتم استبداله بالذكاء لاحقًا
    const botReply = {
      from: "bot",
      text: `سأبحث عن: "${input}"... (سيتم تنفيذ الذكاء لاحقًا 🤖)`,
    };
    setMessages((prev) => [...prev, botReply]);

    setInput("");
  };

  return (
    <>
      {/* الزر العائم */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
        onClick={handleToggle}
      >
        <IoMdChatboxes size={24} />
      </button>

      {/* نافذة الدردشة */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col z-50">
          {/* رأس النافذة */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center rounded-t-xl">
            <span>المساعد الذكي</span>
            <button onClick={handleToggle}>
              <IoClose size={20} />
            </button>
          </div>

          {/* محتوى الرسائل */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md max-w-[80%] ${
                  msg.from === "user"
                    ? "bg-blue-100 self-end ml-auto text-right"
                    : "bg-gray-100 self-start mr-auto text-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* مدخل الرسالة */}
          <div className="p-2 border-t flex gap-2">
            <input
              className="flex-1 border rounded px-2 py-1 text-sm"
              type="text"
              placeholder="اكتب سؤالك..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 rounded"
            >
              إرسال
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SmartAssistant;
