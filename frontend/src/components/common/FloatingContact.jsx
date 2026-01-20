import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone } from "lucide-react";

// WhatsApp Icon Component (Custom inline SVG for brand accuracy)
const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z"></path></svg>
);

const FloatingContact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there! 👋 Welcome to Eteon International.", isBot: true },
        { text: "How can we help you with your export requirements today?", isBot: true }
    ]);
    const [inputText, setInputText] = useState("");

    const handleSend = (e) => {
        e.preventDefault();
        if (!inputText.trim()) return;

        setMessages([...messages, { text: inputText, isBot: false }]);
        setInputText("");

        // Simulated Auto-reply
        setTimeout(() => {
            setMessages(prev => [...prev, {
                text: "Thanks for reaching out! Our team will connect with you shortly.",
                isBot: true
            }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-[320px] md:w-[380px] overflow-hidden mb-2 origin-bottom-right"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex items-center justify-between text-white">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <MessageCircle size={20} />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-primary rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Eteon Support</h3>
                                    <p className="text-xs text-slate-300">Typically replies in 5m</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="h-[300px] bg-slate-50 p-4 overflow-y-auto flex flex-col gap-3">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`max-w-[80%] p-3 rounded-xl text-sm ${msg.isBot
                                        ? "bg-white border border-slate-200 text-slate-700 rounded-tl-none self-start shadow-sm"
                                        : "bg-accent text-white rounded-tr-none self-end shadow-md"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-accent text-primary"
                            />
                            <button
                                type="submit"
                                className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors shadow-sm"
                            >
                                <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Buttons */}
            <div className="flex flex-col gap-4 items-center">

                {/* WhatsApp Button */}
                <a
                    href="https://wa.me/919054353157"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group relative"
                    title="Chat on WhatsApp"
                >
                    <Phone size={24} className="fill-current" />
                    <span className="absolute right-full mr-3 bg-white text-slate-700 text-xs font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        WhatsApp Us
                    </span>
                </a>

                {/* Chat Bot Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative group"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <MessageCircle size={26} />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Notification Dot */}
                    {!isOpen && (
                        <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
                    )}

                    <span className="absolute right-full mr-3 bg-white text-slate-700 text-xs font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        Live Chat
                    </span>
                </button>

            </div>

        </div>
    );
};

export default FloatingContact;
