import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShieldCheck, LogIn } from 'lucide-react';
import SupportChatbot from './SupportChatbot';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSupportOpen, setIsSupportOpen] = useState(false);

    const handleSupportClick = (e) => {
        e.preventDefault();
        setIsSupportOpen(true);
        setIsOpen(false); // Close mobile menu if open
    };

    return (
        <>
            <div className="absolute top-0 left-0 right-0 z-50 px-4 pt-6 pb-4">
                <div className="max-w-7xl mx-auto">
                    <nav className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl flex items-stretch overflow-hidden border border-gray-100/50 min-h-[5rem] hover:shadow-3xl transition-all duration-300">

                        {/* Left Section: Logo & Nav Links */}
                        <div className="flex-1 flex items-center justify-between pl-6 md:pl-8 pr-6">
                            {/* Enhanced Logo */}
                            <Link to="/" className="flex items-center gap-3 group">
                                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2.5 rounded-xl shadow-lg group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-300 border border-white/20">
                                    <ShieldCheck className="text-white h-6 w-6" strokeWidth={2.5} />
                                </div>
                                <span className="text-xl md:text-2xl font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors uppercase">
                                    Gradely
                                </span>
                            </Link>

                            {/* Enhanced Desktop Navigation */}
                            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
                                {['Features', 'How It Works'].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="text-sm font-bold text-slate-600 hover:text-blue-600 uppercase tracking-wide transition-all duration-300 relative group/link px-4 py-2 hover:bg-blue-50 rounded-lg border border-transparent hover:border-blue-100 hover:shadow-sm"
                                    >
                                        {item}
                                        <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover/link:w-[calc(100%-32px)] rounded-full"></span>
                                    </a>
                                ))}
                                <Link
                                    to="/schedule-demo"
                                    className="text-sm font-bold text-slate-600 hover:text-blue-600 uppercase tracking-wide transition-all duration-300 relative group/link px-4 py-2 hover:bg-blue-50 rounded-lg border border-transparent hover:border-blue-100 hover:shadow-sm"
                                >
                                    Book Demo
                                    <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover/link:w-[calc(100%-32px)] rounded-full"></span>
                                </Link>

                                <button
                                    onClick={handleSupportClick}
                                    className="text-sm font-bold text-slate-600 hover:text-blue-600 uppercase tracking-wide transition-all duration-300 relative group/link px-4 py-2 hover:bg-blue-50 rounded-lg border border-transparent hover:border-blue-100 hover:shadow-sm"
                                >
                                    Support
                                    <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover/link:w-[calc(100%-32px)] rounded-full"></span>
                                </button>
                            </div>
                        </div>

                        {/* Enhanced Right Section: Login Button */}
                        <div className="flex items-center">
                            <Link
                                to="/login"
                                className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 font-bold text-sm uppercase tracking-wide transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:scale-105 transform relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                <LogIn className="w-4 h-4 relative z-10" />
                                <span className="relative z-10">Log In</span>
                            </Link>

                            {/* Enhanced Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-3 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 ml-4 mr-2"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>

                        {/* Enhanced Mobile Menu */}
                        {isOpen && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 md:hidden animate-fade-in-down">
                                <div className="p-6 space-y-4">
                                    {['Features', 'How It Works'].map((item) => (
                                        <a
                                            key={item}
                                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="block text-slate-600 hover:text-blue-600 font-bold text-sm uppercase tracking-wide py-3 px-4 hover:bg-blue-50 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-100 hover:shadow-sm"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    ))}
                                    <Link
                                        to="/schedule-demo"
                                        className="block text-slate-600 hover:text-blue-600 font-bold text-sm uppercase tracking-wide py-3 px-4 hover:bg-blue-50 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-100 hover:shadow-sm"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Book Demo
                                    </Link>

                                    <button
                                        onClick={handleSupportClick}
                                        className="block w-full text-left text-slate-600 hover:text-blue-600 font-bold text-sm uppercase tracking-wide py-3 px-4 hover:bg-blue-50 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-100 hover:shadow-sm"
                                    >
                                        Support
                                    </button>
                                    <div className="pt-4 border-t border-gray-100">
                                        <Link
                                            to="/login"
                                            className="block w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-bold text-sm uppercase tracking-wide shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all duration-300"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Log In
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </nav>
                </div>
            </div>

            <SupportChatbot isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />
        </>
    );
};

export default Navbar;
