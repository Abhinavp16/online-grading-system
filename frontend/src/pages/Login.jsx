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
        <div className="min-h-screen flex bg-white">
            {/* Left Side - Visual & Branding */}
            <div className="hidden lg:flex w-1/2 bg-slate-900 relative flex-col justify-between p-12 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                        alt="Students collaborating"
                        className="w-full h-full object-cover opacity-30 mix-blend-overlay scale-105 hover:scale-110 transition-transform duration-10000 ease-linear"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-indigo-900/50"></div>
                </div>

                {/* Animated Background Shapes */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Logo */}
                <Link to="/" className="relative z-10 flex items-center gap-3 group">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2.5 rounded-xl shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 transform group-hover:scale-105 border border-white/10">
                        <ShieldCheck className="text-white h-10 w-10" strokeWidth={2.5} />
                    </div>
                    <span className="text-4xl font-bold text-white tracking-tight">
                        Gradely
                    </span>
                </Link>

                {/* Hero Content */}
                <div className="relative z-10 my-auto">
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Streamlined <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Grading</span> <br />
                        for Modern Education
                    </h1>
                    <p className="text-slate-300 text-lg max-w-lg leading-relaxed">
                        Secure, efficient, and transparent assessment management designed for the next generation of students and faculty.
                    </p>
                </div>

                {/* Testimonial / Footer */}
                <div className="relative z-10">
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl backdrop-blur-md border border-white/10 w-fit">
                        <div className="flex -space-x-4">
                            <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-12 h-12 rounded-full border-2 border-slate-900 transition-transform hover:-translate-y-1" />
                            <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-12 h-12 rounded-full border-2 border-slate-900 transition-transform hover:-translate-y-1" />
                            <img src="https://i.pravatar.cc/100?img=8" alt="User" className="w-12 h-12 rounded-full border-2 border-slate-900 transition-transform hover:-translate-y-1" />
                        </div>
                        <div className="text-slate-300 text-sm font-medium">
                            <span className="text-white font-bold text-lg block">20k+</span> students trust us.
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
                {/* Floating background elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-60 animate-float"></div>
                <div className="absolute bottom-32 left-16 w-24 h-24 bg-indigo-100 rounded-full blur-2xl opacity-40 animate-float delay-1000"></div>

                {/* Mobile Logo */}
                <Link to="/" className="lg:hidden flex items-center gap-3 mb-8 group">
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 transform group-hover:scale-105 border border-white/10">
                        <ShieldCheck className="text-white h-8 w-8" strokeWidth={2.5} />
                    </div>
                    <span className="text-3xl font-bold text-gray-900 tracking-tight">
                        Gradely
                    </span>
                </Link>

                <div className="w-full max-w-md relative z-10">
                    {/* Enhanced Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">
                            Welcome Back
                        </h2>
                        <p className="text-gray-600 text-lg font-medium">
                            Sign in to access your dashboard
                        </p>
                    </div>

                    {/* Enhanced Tab Selection */}
                    <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-8 shadow-inner">
                        {[
                            { key: 'student', label: 'Student', icon: GraduationCap },
                            { key: 'examiner', label: 'Examiner', icon: User },
                            { key: 'admin', label: 'Admin', icon: ShieldCheck }
                        ].map(({ key, label, icon: Icon }) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === key
                                    ? 'bg-white text-blue-600 shadow-lg shadow-blue-100 transform scale-105'
                                    : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
                                    }`}
                            >
                                <Icon className="w-4 h-4" />
                                {label}
                            </button>
                        ))}
                    </div>

                    {/* Enhanced Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700 block mb-2">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-900 font-medium placeholder-gray-400 bg-white/80 backdrop-blur-sm"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-bold text-gray-700 block mb-2">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-900 font-medium placeholder-gray-400 bg-white/80 backdrop-blur-sm"
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors p-1"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center space-x-2 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                <span className="text-gray-600 group-hover:text-gray-900 font-medium">Remember me</span>
                            </label>
                            <a href="#" className="text-blue-600 hover:text-blue-700 font-bold hover:underline transition-colors">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="group w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:scale-105 transform active:scale-95 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            <span className="relative flex items-center justify-center gap-2">
                                Sign In
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </form>

                    {/* Enhanced Footer */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-600 text-sm">
                            Don't have an account?{' '}
                            <a href="#" className="text-blue-600 hover:text-blue-700 font-bold hover:underline transition-colors">
                                Contact your institution
                            </a>
                        </p>
                    </div>

                    {/* Trust indicators */}
                    <div className="mt-8 flex items-center justify-center space-x-6 text-xs text-gray-400">
                        <div className="flex items-center space-x-1">
                            <ShieldCheck className="w-4 h-4 text-green-500" />
                            <span className="font-medium">Secure Login</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Lock className="w-4 h-4 text-blue-500" />
                            <span className="font-medium">256-bit SSL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
