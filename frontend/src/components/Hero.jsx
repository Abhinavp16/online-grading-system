import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, GraduationCap, ArrowRight, Sparkles, TrendingUp, Shield } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-40 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
            {/* Enhanced Background decorations */}
            <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/4 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-gradient-to-tr from-purple-400/15 to-pink-400/15 blur-3xl rounded-full -translate-x-1/2 translate-y-1/4 animate-pulse delay-1000"></div>

            {/* Floating elements */}
            <div className="absolute top-1/4 left-1/4 -z-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce-slow opacity-60"></div>
            <div className="absolute top-1/3 right-1/3 -z-10 w-3 h-3 bg-indigo-400 rounded-full animate-bounce-slow delay-500 opacity-40"></div>
            <div className="absolute bottom-1/3 left-1/5 -z-10 w-2 h-2 bg-purple-400 rounded-full animate-bounce-slow delay-1000 opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Enhanced Text Content */}
                    <div className="flex flex-col space-y-8 animate-fade-in-left">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 w-fit text-blue-700 text-sm font-bold shadow-sm backdrop-blur-sm">
                            <Sparkles size={16} className="text-blue-600" />
                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse"></span>
                            NEW VERSION 3.0 LIVE
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.05]">
                            Automated Online Examination{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient">
                                Grading System
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl leading-relaxed font-medium">
                            Experience <span className="text-blue-600 font-bold">instant grading</span>, error-free evaluation, and transparent results for modern institutions.
                            <span className="block mt-2 text-lg text-gray-500">Streamline your assessment process today.</span>
                        </p>

                        {/* Enhanced feature highlights */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/60 px-3 py-2 rounded-lg border border-gray-200/50 backdrop-blur-sm">
                                <Shield size={16} className="text-green-600" />
                                <span className="font-semibold">99.9% Accuracy</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/60 px-3 py-2 rounded-lg border border-gray-200/50 backdrop-blur-sm">
                                <TrendingUp size={16} className="text-blue-600" />
                                <span className="font-semibold">500+ Institutions</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/60 px-3 py-2 rounded-lg border border-gray-200/50 backdrop-blur-sm">
                                <Sparkles size={16} className="text-purple-600" />
                                <span className="font-semibold">AI-Powered</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Link
                                to="/login"
                                state={{ role: 'student' }}
                                className="group flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl hover:shadow-blue-600/40 hover:scale-105 transform duration-300 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                <GraduationCap size={22} />
                                Student Login
                            </Link>
                            <Link
                                to="/login"
                                state={{ role: 'examiner' }}
                                className="group flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-blue-300 px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
                            >
                                <LayoutDashboard size={22} />
                                Examiner Login
                            </Link>
                            <Link
                                to="/login"
                                state={{ role: 'admin' }}
                                className="flex items-center justify-center gap-2 text-gray-600 hover:text-blue-600 font-bold px-6 py-4 group transition-all duration-300 hover:bg-blue-50 rounded-2xl"
                            >
                                Admin Dashboard
                                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>

                    {/* Image/Mockup */}
                    <div className="relative group perspective-1000 animate-fade-in-right">
                        <div className="relative z-10 transform transition-transform duration-500 hover:rotate-y-2 hover:rotate-x-2">
                            <div className="bg-gray-900/5 p-4 rounded-3xl backdrop-blur-sm">
                                <img
                                    src="/dashboard.png"
                                    alt="Gradely Dashboard"
                                    className="rounded-2xl shadow-2xl border border-gray-200/50 w-full h-auto object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating Element: Grading Complete */}
                        <div className="absolute -bottom-8 left-8 sm:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 animate-bounce-slow">
                            <div className="bg-green-100 p-3 rounded-full text-green-600">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                            </div>
                            <div>
                                <p className="font-bold text-gray-900">Grading Complete</p>
                                <p className="text-xs text-gray-500">1,240 papers processed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
