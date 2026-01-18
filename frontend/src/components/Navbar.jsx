import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, LogIn, Headset } from 'lucide-react';
import SupportChatbot from './SupportChatbot';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSupportOpen, setIsSupportOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSupportClick = (e) => {
        e.preventDefault();
        setIsSupportOpen(true);
        setIsOpen(false);
    };

    return (
        <>
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'pt-2 px-4' : 'pt-6 px-4'}`}>
                <div className="max-w-7xl mx-auto">
                    <nav className={`transition-all duration-500 rounded-[1.5rem] flex items-stretch overflow-hidden border ${scrolled
                            ? 'bg-white/80 backdrop-blur-xl shadow-xl border-zinc-200/50 min-h-[4.5rem]'
                            : 'bg-white shadow-2xl shadow-zinc-200/50 border-white min-h-[5.5rem]'
                        }`}>

                        {/* Logo & Navigation */}
                        <div className="flex-1 flex items-center justify-between pl-8 pr-6">
                            <Link to="/" className="flex items-center gap-3 group">
                                <div className="bg-indigo-600 p-2 rounded-xl shadow-lg group-hover:bg-indigo-500 transition-all transform group-hover:scale-110">
                                    <ShieldCheck className="text-white h-6 w-6" />
                                </div>
                                <span className="text-2xl font-black text-zinc-900 tracking-tighter group-hover:text-indigo-600 transition-colors">
                                    GRADELY
                                </span>
                            </Link>

                            {/* Desktop Links */}
                            <div className="hidden md:flex items-center gap-2">
                                {[
                                    { label: 'Pricing', path: '/pricing' },
                                    { label: 'Schedule Demo', path: '/schedule-demo' }
                                ].map((item) => (
                                    <Link
                                        key={item.label}
                                        to={item.path}
                                        className={`px-5 py-2 rounded-xl text-sm font-bold tracking-tight transition-all duration-300 ${location.pathname === item.path
                                                ? 'bg-zinc-100 text-zinc-900'
                                                : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <button
                                    onClick={handleSupportClick}
                                    className="px-5 py-2 rounded-xl text-sm font-bold tracking-tight text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-all flex items-center gap-2"
                                >
                                    <Headset size={16} />
                                    Support
                                </button>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="flex items-center">
                            <div className="hidden md:block h-8 w-[1px] bg-zinc-100 mx-2"></div>
                            <Link
                                to="/login"
                                className="group bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 md:h-full flex items-center gap-2 font-bold text-sm tracking-tight transition-all active:scale-[0.98]"
                            >
                                <LogIn size={18} className="text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
                                SIGN IN
                            </Link>

                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-4 text-zinc-900"
                            >
                                {isOpen ? <X /> : <Menu />}
                            </button>
                        </div>

                        {/* Mobile Menu */}
                        {isOpen && (
                            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-3xl shadow-3xl border border-zinc-100 md:hidden p-6 animate-fade-in-down">
                                <div className="space-y-2">
                                    <Link
                                        to="/pricing"
                                        className="block p-4 rounded-2xl text-lg font-bold text-zinc-900 hover:bg-zinc-50"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Pricing
                                    </Link>
                                    <Link
                                        to="/schedule-demo"
                                        className="block p-4 rounded-2xl text-lg font-bold text-zinc-900 hover:bg-zinc-50"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Schedule Demo
                                    </Link>
                                    <button
                                        onClick={handleSupportClick}
                                        className="w-full text-left p-4 rounded-2xl text-lg font-bold text-zinc-900 hover:bg-zinc-50 flex items-center gap-3"
                                    >
                                        <Headset />
                                        Support
                                    </button>
                                    <div className="pt-4 mt-4 border-t border-zinc-100">
                                        <Link
                                            to="/login"
                                            className="w-full bg-zinc-900 text-white p-5 rounded-2xl font-bold text-center flex items-center justify-center gap-3"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <LogIn size={20} className="text-indigo-400" />
                                            SIGN IN
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
