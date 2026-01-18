import React from 'react';
import { Building2, FileCheck, Target, ShieldCheck } from 'lucide-react';

const stats = [
    {
        value: '500+',
        label: 'Institutions',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        icon: <Building2 className="w-8 h-8" />,
        description: 'Elite Indian schools'
    },
    {
        value: '1.2M',
        label: 'Assessments',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        icon: <FileCheck className="w-8 h-8" />,
        description: 'Evaluated annually'
    },
    {
        value: '1/3',
        label: 'Time Saved',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        icon: <Target className="w-8 h-8" />,
        description: 'For teaching staff'
    },
    {
        value: '99.9%',
        label: 'Accuracy',
        color: 'text-indigo-600',
        bg: 'bg-indigo-50',
        icon: <ShieldCheck className="w-8 h-8" />,
        description: 'Board-grade precision'
    },
];

const Stats = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-zinc-50 p-10 rounded-[2.5rem] border border-zinc-100 hover:bg-white hover:shadow-2xl hover:shadow-zinc-200 transition-all duration-500 hover:-translate-y-2 group"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className={`w-16 h-16 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                    {stat.icon}
                                </div>

                                <span className="text-5xl font-black text-zinc-900 mb-2 truncate w-full">
                                    {stat.value}
                                </span>

                                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
                                    {stat.label}
                                </span>

                                <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                                    {stat.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
