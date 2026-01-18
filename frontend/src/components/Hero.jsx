import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Zap, Star, Globe2, School2, Rocket } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-40 bg-white">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-zinc-100 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-8 animate-fade-in">
                        <Star size={14} className="text-indigo-400 fill-indigo-400" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">India's Most Trusted grading platform</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl lg:text-8xl font-black text-zinc-900 tracking-tight leading-[0.95] mb-8 animate-fade-in">
                        Reimagining <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400">Digital Evaluation.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-xl lg:text-2xl text-zinc-500 max-w-2xl leading-relaxed mb-12 animate-fade-in delay-200">
                        Built for <span className="text-zinc-900 font-bold">Bharat's Institutions.</span>
                        Experience AI-powered accuracy designed for CBSE, ICSE, and State Board assessments.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-20 animate-fade-in delay-300">
                        <Link
                            to="/schedule-demo"
                            className="group flex items-center justify-center gap-3 bg-zinc-900 hover:bg-zinc-800 text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-2xl shadow-zinc-200 hover:scale-105 transform active:scale-95"
                        >
                            <Rocket size={20} className="text-indigo-400" />
                            Book Free Call
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/pricing"
                            className="group flex items-center justify-center gap-3 bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200 px-10 py-5 rounded-2xl font-bold transition-all hover:shadow-xl active:scale-95"
                        >
                            <Zap size={20} className="text-indigo-600" />
                            View Pricing
                        </Link>
                    </div>

                    {/* Floating Indicators */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl animate-fade-in delay-500">
                        {[
                            { label: "Regional Support", val: "24/7", desc: "Available in 12 languages", icon: Globe2 },
                            { label: "Board Standards", val: "100%", desc: "Aligned with NEP 2024", icon: ShieldCheck },
                            { label: "Active Institutions", val: "500+", desc: "Across 22 States", icon: School2 }
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-6 p-6 bg-white border border-zinc-100 rounded-[2rem] hover:shadow-2xl hover:shadow-zinc-100 transition-all duration-500 hover:-translate-y-1">
                                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600">
                                    <stat.icon size={24} />
                                </div>
                                <div className="text-left">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-black text-zinc-900">{stat.val}</span>
                                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-tighter">{stat.label}</span>
                                    </div>
                                    <p className="text-xs text-zinc-500 font-medium">{stat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
