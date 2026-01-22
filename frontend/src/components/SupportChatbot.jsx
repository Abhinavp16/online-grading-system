import React, { useState, useRef, useEffect } from 'react';
import {
    X,
    MessageSquare,
    Send,
    Paperclip,
    MoreVertical,
    RotateCw,
    FileText,
    Headphones,
    Plus,
    Book,
    ChevronRight,
    Search,
    Bot
} from 'lucide-react';

const SupportChatbot = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            text: "Hello! 👋 I can help you with grading schemas, result exports, or technical issues. What do you need help with today?",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            actions: ['Verify Grades', 'System Status', 'Reset Password']
        }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const addMessage = (text, type = 'user') => {
        const msg = {
            id: Date.now(),
            type,
            text,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, msg]);
    };

    const handleBotResponse = (userText) => {
        setTimeout(() => {
            let responseText = "I understand you're asking about \"" + userText + "\". Here is some information that might help...";
            let actions = [];

            const lowerText = userText.toLowerCase();

            if (lowerText.includes('verify grades')) {
                responseText = "To verify grades, please navigate to the 'Grades' tab in your dashboard. You can select the specific exam and click 'Verify'. Would you like me to take you there?";
                actions = ['Go to Grades', 'Read Guide'];
            } else if (lowerText.includes('system status')) {
                responseText = "All systems are currently operational. No incidents reported in the last 24 hours.";
            } else if (lowerText.includes('reset password')) {
                responseText = "You can reset your password from the Settings page or by clicking 'Forgot Password' on the login screen.";
            } else if (lowerText.includes('ticket')) {
                responseText = "I've started a new support ticket for you (Ticket #8829). Please describe the issue you are facing in detail.";
            } else if (lowerText.includes('agent') || lowerText.includes('human')) {
                responseText = "I'm connecting you to a human agent... Current wait time is approximately 5 minutes. While you wait, is there anything I can try to help with?";
            } else if (lowerText.includes('documentation') || lowerText.includes('knowledge base')) {
                responseText = "Our documentation is comprehensive. You can browse topics like Grading, User Management, or Security. What specifically are you looking for?";
                actions = ['Grading Guide', 'User Management', 'Security'];
            } else if (lowerText.includes('export final grades')) {
                responseText = "To export final grades: Go to Dashboard > Select Course > Reports > Export Grades. You can choose CSV or PDF formats.";
            } else if (lowerText.includes('grading scale')) {
                responseText = "Grading scales can be configured in the Admin settings under 'Grade Parameters'. You can set custom weightings and boundaries there.";
            } else if (lowerText.includes('troubleshoot student login')) {
                responseText = "Common login issues are usually due to incorrect credentials or locked accounts. Try resetting the student's password in the 'Users' panel.";
            }

            const botMsg = {
                id: Date.now() + 1,
                type: 'bot',
                text: responseText,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                actions: actions.length > 0 ? actions : undefined
            };
            setMessages(prev => [...prev, botMsg]);
        }, 1000);
    };

    const handleSend = (text) => {
        const messageText = (typeof text === 'string') ? text : input;
        if (!messageText.trim()) return;

        addMessage(messageText, 'user');
        if (messageText === input) setInput('');

        handleBotResponse(messageText);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />

            <div className="relative bg-[#F8F9FC] w-full max-w-6xl h-[85vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200">
                {/* Top Header */}
                <div className="bg-white px-8 py-6 border-b border-gray-100 flex justify-between items-center flex-shrink-0">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">GradeBot Support</h2>
                        <p className="text-gray-500 text-sm mt-1">Your AI-powered assistant for grading, exam management, and technical inquiries.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button onClick={() => handleSend("Where is the documentation?")} className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition-colors">
                            <Book size={18} />
                            <span>Documentation</span>
                        </button>
                        <button onClick={() => handleSend("I want to create a new ticket")} className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg text-white font-medium hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                            <Plus size={18} />
                            <span>New Ticket</span>
                        </button>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors ml-2">
                            <X size={24} />
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
                    {/* Left: Chat Area */}
                    <div className="flex-1 flex flex-col min-w-0 bg-white m-6 mr-0 lg:mr-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                        {/* Chat Header */}
                        <div className="px-6 py-4 border-b border-gray-50 flex justify-between items-center bg-white z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 relative">
                                    <Bot size={24} />
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">GradeBot</h3>
                                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                        <span>Online • Replies instantly</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <button className="p-2 hover:bg-gray-50 rounded-full transition-colors"><RotateCw size={18} /></button>
                                <button className="p-2 hover:bg-gray-50 rounded-full transition-colors"><MoreVertical size={18} /></button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-white">
                            <div className="flex justify-center">
                                <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                                    Today, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>

                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex gap-4 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.type === 'bot' ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 overflow-hidden'}`}>
                                        {msg.type === 'bot' ? <Bot size={18} /> : (
                                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1" alt="User" />
                                        )}
                                    </div>

                                    <div className={`flex flex-col max-w-[80%] ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-gray-900">{msg.type === 'bot' ? 'GradeBot' : 'You'}</span>
                                            <span className="text-xs text-gray-400">{msg.timestamp}</span>
                                        </div>
                                        <div className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.type === 'user'
                                            ? 'bg-blue-600 text-white rounded-tr-none'
                                            : 'bg-white border border-gray-100 shadow-sm rounded-tl-none text-gray-700'
                                            }`}>
                                            {msg.text}
                                        </div>
                                        {msg.actions && (
                                            <div className="flex flex-wrap gap-2 mt-3">
                                                {msg.actions.map((action, idx) => (
                                                    <button key={idx} onClick={() => handleSend(action)} className="px-4 py-2 bg-white border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 rounded-full text-sm font-medium text-gray-600 transition-all">
                                                        {idx === 0 && <span className="mr-1 text-blue-500">✓</span>}
                                                        {idx === 1 && <span className="mr-1 text-orange-500">⟳</span>}
                                                        {idx === 2 && <span className="mr-1 text-purple-500">↺</span>}
                                                        {action}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-2xl border border-gray-200 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-300 transition-all">
                                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                                    <Paperclip size={20} />
                                </button>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Type your question here..."
                                    className="flex-1 bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    className={`p-2 rounded-xl transition-all ${input.trim() ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-200 text-gray-400'}`}
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                            <p className="text-center text-[10px] text-gray-400 mt-2">
                                GradeBot can make mistakes. Consider checking important info.
                            </p>
                        </div>
                    </div>

                    {/* Right: Sidebar */}
                    <div className="w-full lg:w-80 flex flex-col gap-6 m-6 ml-0">
                        {/* Suggested Articles */}
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex-1">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="text-blue-600">
                                    <FileText size={20} />
                                </div>
                                <h3 className="font-bold text-gray-900">Suggested Articles</h3>
                            </div>

                            <div className="space-y-6">
                                <div className="group cursor-pointer" onClick={() => handleSend("How to export final grades?")}>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">How to export final grades?</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">Learn how to download CSV or PDF reports for your department.</p>
                                </div>
                                <div className="group cursor-pointer" onClick={() => handleSend("Tell me about Grading Scale Configurations")}>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">Grading Scale Configurations</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">Customize GPA weighting and letter grade boundaries.</p>
                                </div>
                                <div className="group cursor-pointer" onClick={() => handleSend("How do I troubleshoot student login?")}>
                                    <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">Troubleshoot Student Login</h4>
                                    <p className="text-xs text-gray-500 leading-relaxed">Steps to resolve access issues for students during exams.</p>
                                </div>
                            </div>

                            <button onClick={() => handleSend("Show me the knowledge base")} className="w-full mt-8 py-2 text-sm font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors">
                                View Knowledge Base
                            </button>
                        </div>

                        {/* Human Support */}
                        <div className="bg-blue-600 p-6 rounded-2xl shadow-lg shadow-blue-600/20 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10 transform translate-x-2 -translate-y-2">
                                <Headphones size={80} />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-3">
                                    <Headphones size={20} />
                                    <h3 className="font-bold">Human Support</h3>
                                </div>
                                <p className="text-blue-100 text-xs mb-6 leading-relaxed">
                                    Bot couldn't solve your issue? Our support team is available Mon-Fri, 9am - 5pm EST.
                                </p>
                                <button onClick={() => handleSend("I want to speak with a human agent")} className="w-full py-2.5 bg-white text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors shadow-sm">
                                    Contact an Agent
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportChatbot;
