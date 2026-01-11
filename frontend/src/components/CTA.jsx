import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="py-28 bg-blue-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    Ready to Transform Your Assessment Process?
                </h2>
                <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                    Join hundreds of educational institutions that trust Gradely for their grading needs.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link 
                        to="/pricing"
                        className="bg-white text-blue-600 px-8 py-3.5 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200 inline-block"
                    >
                        Start Free Trial
                    </Link>
                    <Link 
                        to="/schedule-demo"
                        className="bg-transparent border-2 border-blue-400/30 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-colors backdrop-blur-sm inline-block"
                    >
                        Schedule Demo
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CTA;
