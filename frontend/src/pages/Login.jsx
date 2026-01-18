import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, GraduationCap, ArrowRight, ShieldCheck, User } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.state?.role || 'student');
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { activeTab, email, password });

        if (activeTab === 'student') {
            navigate('/dashboard');
        } else if (activeTab === 'examiner') {
            navigate('/examiner-dashboard');
        } else if (activeTab === 'admin') {
            navigate('/admin-dashboard');
        }
    };

    return (
        <div className="min-h-screen flex bg-zinc-50 text-zinc-900 overflow-hidden">
            {/* Left Side - Visual & Branding */}
            <div className="hidden lg:flex w-1/2 bg-zinc-950 relative flex-col justify-between p-12 overflow-hidden shadow-2xl">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                        alt="Education and Technology"
                        className="w-full h-full object-cover opacity-20 hover:scale-105 transition-transform duration-10000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950/80 to-transparent"></div>
                </div>

                {/* Animated Background Shapes */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>

                {/* Logo */}
                <Link to="/" className="relative z-10 flex items-center gap-3 group">
                    <div className="bg-indigo-600 p-2.5 rounded-xl shadow-2xl shadow-indigo-500/20 group-hover:bg-indigo-500 transition-all duration-300 transform group-hover:scale-105 border border-white/10">
                        <ShieldCheck className="text-white h-9 w-9" strokeWidth={2} />
                    </div>
                    <span className="text-3xl font-bold text-white tracking-tight">
                        Gradely
                    </span>
                </Link>

                {/* Hero Content */}
                <div className="relative z-10 my-auto">
                    <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                        The Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-200">Academic Integrity</span>
                    </h1>
                    <p className="text-zinc-400 text-xl max-w-lg leading-relaxed font-light">
                        Experience a unified grading ecosystem designed for researchers, educators, and institutions.
                    </p>
                </div>

                {/* Testimonial / Footer */}
                <div className="relative z-10">
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl backdrop-blur-xl border border-white/5 w-fit">
                        <div className="flex -space-x-3">
                            <img src="https://i.pravatar.cc/100?img=33" alt="User" className="w-10 h-10 rounded-full border-2 border-zinc-950 transition-transform hover:-translate-y-1" />
                            <img src="https://i.pravatar.cc/100?img=53" alt="User" className="w-10 h-10 rounded-full border-2 border-zinc-950 transition-transform hover:-translate-y-1" />
                            <img src="https://i.pravatar.cc/100?img=12" alt="User" className="w-10 h-10 rounded-full border-2 border-zinc-950 transition-transform hover:-translate-y-1" />
                        </div>
                        <div className="text-zinc-400 text-sm font-medium">
                            Trusted by <span className="text-white font-bold">500+</span> Institutions worldwide.
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-white relative overflow-hidden">
                {/* Subtle background flair */}
                <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-indigo-50/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-zinc-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

                {/* Mobile Logo */}
                <Link to="/" className="lg:hidden flex items-center gap-3 mb-10 group">
                    <div className="bg-indigo-600 p-2.5 rounded-xl shadow-xl shadow-indigo-100 group-hover:bg-indigo-500 transition-all duration-300">
                        <ShieldCheck className="text-white h-8 w-8" strokeWidth={2} />
                    </div>
                    <span className="text-2xl font-bold text-zinc-900 tracking-tight">
                        Gradely
                    </span>
                </Link>

                <div className="w-full max-w-sm relative z-10">
                    {/* Header */}
                    <div className="text-left mb-10">
                        <h2 className="text-3xl font-bold text-zinc-900 mb-2 tracking-tight">
                            Welcome back
                        </h2>
                        <p className="text-zinc-500 font-normal">
                            Please enter your details to sign in
                        </p>
                    </div>

                    {/* Tab Selection */}
                    <div className="flex bg-zinc-100 p-1 rounded-xl mb-8">
                        {[
                            { key: 'student', label: 'Student', icon: GraduationCap },
                            { key: 'examiner', label: 'Examiner', icon: User },
                            { key: 'admin', label: 'Admin', icon: ShieldCheck }
                        ].map(({ key, label, icon: Icon }) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg font-semibold text-xs transition-all duration-200 ${activeTab === key
                                    ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200/50'
                                    : 'text-zinc-500 hover:text-zinc-700 hover:bg-white/50'
                                    }`}
                            >
                                <Icon className="w-3.5 h-3.5" />
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider block">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4 group-focus-within:text-indigo-600 transition-colors" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-200 text-zinc-900 font-medium placeholder-zinc-400"
                                    placeholder="name@institution.edu"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider block">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4 group-focus-within:text-indigo-600 transition-colors" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-11 pr-11 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-200 text-zinc-900 font-medium placeholder-zinc-400"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors p-1"
                                >
                                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs">
                            <label className="flex items-center space-x-2 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 text-indigo-600 border-zinc-300 rounded focus:ring-indigo-500 focus:ring-offset-0" />
                                <span className="text-zinc-500 group-hover:text-zinc-700 font-medium select-none">Keep me signed in</span>
                            </label>
                            <a href="#" className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-zinc-200 active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            Sign In
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-10 text-center">
                        <p className="text-zinc-500 text-sm">
                            New here?{' '}
                            <a href="#" className="text-indigo-600 hover:text-indigo-700 font-bold hover:underline transition-colors">
                                Create an account
                            </a>
                        </p>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-10 pt-8 border-t border-zinc-100 flex items-center justify-center space-x-6 text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                        <div className="flex items-center space-x-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-zinc-300" />
                            <span>AES-256 Secure</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                            <Lock className="w-3.5 h-3.5 text-zinc-300" />
                            <span>SSL Certified</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
