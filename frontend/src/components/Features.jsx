import React from 'react';
import { ListChecks, Lock, BarChart3, Sparkles, Shield, TrendingUp } from 'lucide-react';

const features = [
    {
        icon: <ListChecks size={28} className="text-blue-600" />,
        bg: 'bg-gradient-to-br from-blue-50 to-blue-100',
        borderColor: 'border-blue-200',
        title: 'Automated MCQ Grading',
        description: 'Eliminate manual errors with OMR and digital key matching technology. Supports complex grading logic and partial credits.',
        stats: '99.9% Accuracy',
        color: 'blue'
    },
    {
        icon: <Lock size={28} className="text-purple-600" />,
        bg: 'bg-gradient-to-br from-purple-50 to-purple-100',
        borderColor: 'border-purple-200',
        title: 'Secure Exam Environment',
        description: 'AI-proctored browser locking and identity verification for integrity. Prevents tab switching and unauthorized access.',
        stats: 'Bank-level Security',
        color: 'purple'
    },
    {
        icon: <BarChart3 size={28} className="text-green-600" />,
        bg: 'bg-gradient-to-br from-green-50 to-green-100',
        borderColor: 'border-green-200',
        title: 'Instant Results & Analytics',
        description: 'Generate detailed student performance reports instantly after submission. Visualize learning gaps and improvement areas.',
        stats: 'Real-time Reports',
        color: 'green'
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 lg:py-36 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-bold mb-6">
                        <Sparkles size={16} />
                        <span>Powerful Features</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        Why Choose Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            System?
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                        We provide a secure, efficient, and transparent grading environment for all educational needs with cutting-edge technology.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12 animate-fade-in-up">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className={`group bg-white p-8 lg:p-10 rounded-3xl border-2 ${feature.borderColor} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden`}
                        >
                            {/* Background gradient overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-${feature.color}-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                            
                            <div className="relative z-10">
                                {/* Enhanced icon container */}
                                <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/50`}>
                                    {feature.icon}
                                </div>
                                
                                {/* Stats badge */}
                                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-${feature.color}-50 text-${feature.color}-700 text-xs font-bold mb-4 border border-${feature.color}-200`}>
                                    {feature.color === 'blue' && <Shield size={12} />}
                                    {feature.color === 'purple' && <Lock size={12} />}
                                    {feature.color === 'green' && <TrendingUp size={12} />}
                                    <span>{feature.stats}</span>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg font-medium">
                                    {feature.description}
                                </p>
                                
                                {/* Hover effect arrow */}
                                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className={`w-8 h-0.5 bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 rounded-full`}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional trust indicators */}
                <div className="mt-20 text-center animate-fade-in-up">
                    <p className="text-gray-500 text-sm font-semibold mb-6 uppercase tracking-wide">Trusted by leading institutions</p>
                    <div className="flex items-center justify-center space-x-8 opacity-60">
                        <div className="text-2xl font-bold text-gray-400">500+</div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div className="text-2xl font-bold text-gray-400">1M+</div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div className="text-2xl font-bold text-gray-400">99.9%</div>
                    </div>
                    <div className="flex items-center justify-center space-x-8 mt-2 text-xs text-gray-400 font-medium">
                        <span>Institutions</span>
                        <span></span>
                        <span>Exams Graded</span>
                        <span></span>
                        <span>Uptime</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
