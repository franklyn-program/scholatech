"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, Sparkles, ArrowRight, User } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  actionUrl?: string;
  actionText?: string;
}

const FAQ_KNOWLEDGE: { keywords: string[]; answer: string; actionUrl?: string; actionText?: string }[] = [
  {
    keywords: ["cbt", "offline", "exam", "jamb", "waec", "internet"],
    answer: "Our 100% Offline CBT system installs directly on your school computer lab server. It runs strictly on your Local Area Network (LAN) with zero internet dependency, zero data cost, and zero exam interruption!",
    actionUrl: "/#offline-cbt",
    actionText: "Learn about Offline CBT",
  },
  {
    keywords: ["price", "cost", "pricing", "package", "fee", "how much", "naira"],
    answer: "Every project is scoped to your school size with a transparent ONE-TIME payment. You never pay monthly or per-student SaaS subscriptions! Packages cover websites, portals, and CBT labs.",
    actionUrl: "/pricing",
    actionText: "View Pricing Packages",
  },
  {
    keywords: ["source code", "ownership", "database", "moat", "lock-in"],
    answer: "Yes! 100% source code and database ownership is handed over to your school on day of launch. You own the infrastructure outright with zero vendor lock-in.",
    actionUrl: "/#solutions",
    actionText: "See Ownership Model",
  },
  {
    keywords: ["contact", "email", "phone", "quote", "architect", "demo", "reach"],
    answer: "You can reach our Lead Architect directly at agboseakade1@gmail.com or fill out our online scoping form to receive a custom proposal within 24 hours.",
    actionUrl: "/contact",
    actionText: "Request Custom Scope",
  },
];

export function ScholatechAIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hello! I am Scholatech AI Assistant. How can I help you regarding our offline CBT systems, school portals, or one-time pricing?",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend?: string) => {
    const userText = textToSend || input.trim();
    if (!userText) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const lower = userText.toLowerCase();
      let matched = FAQ_KNOWLEDGE.find((item) =>
        item.keywords.some((kw) => lower.includes(kw))
      );

      let botResponse = matched
        ? matched.answer
        : "Thank you for asking! For custom school requirements or direct quotes, you can email us directly at agboseakade1@gmail.com or request a scope online.";

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        actionUrl: matched?.actionUrl || "/contact",
        actionText: matched?.actionText || "Contact Lead Architect",
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-4 rounded-full bg-[#4169FF] text-white shadow-[0_0_30px_rgba(65,105,255,0.6)] flex items-center justify-center border border-white/20"
          aria-label="Toggle AI Assistant Chat"
        >
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#10B981] border-2 border-[#050816] animate-pulse" />
          )}
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] max-h-[580px] h-[78vh] rounded-3xl bg-[#0A1020] border border-white/[0.1] shadow-[0_25px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl flex flex-col overflow-hidden"
          >
            <div className="p-4 sm:p-5 bg-[#050816] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#4169FF]/20 border border-[#4169FF]/40 flex items-center justify-center text-[#5A7DFF]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-sm text-[#F8FAFC] flex items-center gap-1.5">
                    Scholatech AI Assistant
                    <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                  </h3>
                  <p className="text-[10px] text-[#10B981] font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    Online · 24/7 School Support
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-[#7A879C] hover:text-white p-1 transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-grow p-4 overflow-y-auto space-y-4 text-xs font-sans">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.sender === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-[#4169FF]/20 border border-[#4169FF]/40 text-[#5A7DFF] flex items-center justify-center shrink-0 mt-1">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[80%] rounded-2xl p-3.5 space-y-2 leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#4169FF] text-white rounded-tr-none shadow-[0_0_15px_rgba(65,105,255,0.3)]"
                        : "bg-[#111827] border border-white/[0.08] text-[#F8FAFC] rounded-tl-none"
                    }`}
                  >
                    <p>{msg.text}</p>

                    {msg.actionUrl && msg.actionText && (
                      <a
                        href={msg.actionUrl}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#5A7DFF] hover:text-white transition-colors pt-1 border-t border-white/10"
                      >
                        <span>{msg.actionText}</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    )}

                    <span className="block text-[9px] text-[#7A879C] text-right font-mono">
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === "user" && (
                    <div className="w-6 h-6 rounded-full bg-white/10 text-[#AAB4C5] flex items-center justify-center shrink-0 mt-1">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5 items-center text-[#7A879C]">
                  <div className="w-6 h-6 rounded-full bg-[#4169FF]/20 border border-[#4169FF]/40 text-[#5A7DFF] flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="px-4 py-2 rounded-full bg-[#111827] border border-white/[0.08] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5A7DFF] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5A7DFF] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5A7DFF] animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="px-4 py-2 bg-[#050816]/80 border-t border-white/[0.06] flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-none">
              <button
                onClick={() => handleSend("How does offline CBT work?")}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-[#111827] border border-white/[0.08] text-[10px] text-[#AAB4C5] hover:border-[#4169FF]/40 hover:text-white transition-colors"
              >
                Offline CBT?
              </button>
              <button
                onClick={() => handleSend("What is the pricing model?")}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-[#111827] border border-white/[0.08] text-[10px] text-[#AAB4C5] hover:border-[#4169FF]/40 hover:text-white transition-colors"
              >
                Pricing details?
              </button>
              <button
                onClick={() => handleSend("Do we get the source code?")}
                className="whitespace-nowrap px-3 py-1.5 rounded-full bg-[#111827] border border-white/[0.08] text-[10px] text-[#AAB4C5] hover:border-[#4169FF]/40 hover:text-white transition-colors"
              >
                Source Code?
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-[#050816] border-t border-white/[0.08] flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about CBT, pricing, source code..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow px-3.5 py-2.5 rounded-xl bg-[#111827] border border-white/[0.08] text-xs text-[#F8FAFC] focus:outline-none focus:border-[#4169FF] transition-colors placeholder:text-[#7A879C]"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 rounded-xl bg-[#4169FF] text-white disabled:opacity-40 hover:bg-[#6D8DFF] transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}