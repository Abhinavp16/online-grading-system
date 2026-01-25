import React from 'react';
import { FileEdit, PlayCircle, Cpu, Share2 } from 'lucide-react';

const steps = [
    {
        icon: <FileEdit size={28} />,
        title: '1. Create Exam',
        description: 'Set up questions, time limits, and grading rules easily.',
    },
    {
        icon: <PlayCircle size={28} />,
        title: '2. Conduct Exam',
        description: 'Students take exams in a secure, proctored interface.',
    },
    {
        icon: <Cpu size={28} />,
        title: '3. Auto Grade',
        description: 'System automatically scores answers instantly.',
    },
    {
        icon: <Share2 size={28} />,
        title: '4. Publish Results',
        description: 'Share grades and feedback with students securely.',
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 lg:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                    <p className="text-lg text-gray-600">A simple four-step process to streamline your examination cycle.</p>
                </div>

                <div className="relative grid md:grid-cols-4 gap-12 animate-zoom-in">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-10 left-1/8 w-3/4 h-0.5 bg-gray-100 -z-10 mx-auto right-0 left-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 bg-white border border-gray-100 shadow-xl rounded-full flex items-center justify-center text-blue-600 mb-6 z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-100 group-hover:shadow-blue-100">
                                {step.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-500 max-w-[200px] leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
