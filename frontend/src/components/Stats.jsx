import React from 'react';
import { Building2, FileCheck, Target, ShieldCheck } from 'lucide-react';

const stats = [
    { 
        value: '500+', 
        label: 'Trusted Institutions', 
        color: 'text-blue-600',
        bg: 'bg-blue-50',
        icon: <Building2 className="w-6 h-6 text-blue-600" />,
        description: 'Universities worldwide'
    },
    { 
        value: '1M+', 
        label: 'Exams Graded', 
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        icon: <FileCheck className="w-6 h-6 text-indigo-600" />,
        description: 'Successfully processed'
    },
    { 
        value: '99.9%', 
        label: 'Accuracy Rate', 
        color: 'text-emerald-600',
        bg: 'bg-emerald-50',
        icon: <Target className="w-6 h-6 text-emerald-600" />,
        description: 'Precision guaranteed'
    },
    { 
        value: 'Zero', 
        label: 'Grading Errors', 
        color: 'text-purple-600',
        bg: 'bg-purple-50',
        icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
        description: 'Error-free results'
    },
];

const Stats = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/20 border-b border-gray-100 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Trusted by Educational Leaders
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join thousands of institutions that rely on our platform for accurate, secure, and efficient examination management.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center relative overflow-hidden"
                        >
                            {/* Background gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={`w-16 h-16 ${stat.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/50`}>
                                    {stat.icon}
                                </div>
                                
                                {/* Value */}
                                <span className={`text-5xl lg:text-6xl font-black ${stat.color} mb-3 block group-hover:scale-105 transition-transform duration-300`}>
                                    {stat.value}
                                </span>
                                
                                {/* Label */}
                                <span className="text-lg font-bold text-gray-900 mb-2 block group-hover:text-blue-600 transition-colors">
                                    {stat.label}
                                </span>
                                
                                {/* Description */}
                                <span className="text-sm text-gray-500 font-medium">
                                    {stat.description}
                                </span>
                                
                                {/* Hover effect line */}
                                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className={`w-12 h-1 ${stat.color.replace('text-', 'bg-')} rounded-full mx-auto`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional trust indicators */}
                <div className="mt-16 text-center animate-fade-in-up">
                    <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg">
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span>99.9% Uptime</span>
                        </div>
                        <div className="w-px h-6 bg-gray-300"></div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                            <ShieldCheck className="w-4 h-4 text-blue-600" />
                            <span>SOC 2 Certified</span>
                        </div>
                        <div className="w-px h-6 bg-gray-300"></div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-600">
                            <Target className="w-4 h-4 text-emerald-600" />
                            <span>ISO 27001</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
