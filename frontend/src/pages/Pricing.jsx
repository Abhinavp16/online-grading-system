import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Pricing = () => {
    return (
        <div className="min-h-screen bg-white font-sans antialiased text-gray-900 relative">
            {/* Back to Home Button */}
            <div className="absolute top-6 left-6 z-50">
                <Link
                    to="/"
                    className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100/50 px-6 py-3 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 group"
                >
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <div className="flex items-center gap-2">
                        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-1.5 rounded-lg">
                            <svg className="text-white h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <span className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Gradely</span>
                    </div>
                </Link>
            </div>

            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
                {/* Education-themed background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Floating academic icons */}
                    <div className="absolute top-20 left-10 opacity-10">
                        <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                        </svg>
                    </div>
                    <div className="absolute top-32 right-20 opacity-10">
                        <svg className="w-12 h-12 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                        </svg>
                    </div>
                    <div className="absolute bottom-40 left-20 opacity-10">
                        <svg className="w-14 h-14 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" />
                        </svg>
                    </div>
                    <div className="absolute top-60 right-10 opacity-10">
                        <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <div className="absolute bottom-20 right-32 opacity-10">
                        <svg className="w-18 h-18 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H18V0h-2v2H8V0H6v2H4.5C3.11 2 2 3.11 2 4.5v15C2 20.89 3.11 22 4.5 22h15c1.39 0 2.5-1.11 2.5-2.5v-15C22 3.11 20.89 2 19.5 2z" />
                        </svg>
                    </div>

                    {/* Geometric shapes representing institutional buildings */}
                    <div className="absolute top-10 right-40 opacity-5">
                        <div className="w-24 h-32 bg-gradient-to-t from-blue-600 to-blue-400 transform rotate-12"></div>
                    </div>
                    <div className="absolute bottom-10 left-40 opacity-5">
                        <div className="w-20 h-28 bg-gradient-to-t from-indigo-600 to-indigo-400 transform -rotate-6"></div>
                    </div>

                    {/* Student/graduation themed elements */}
                    <div className="absolute top-40 left-60 opacity-8">
                        <svg className="w-20 h-20 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 16L3 14l5.5-5.5L10 10l8-8 1.5 1.5L10 13l-5-5z" />
                        </svg>
                    </div>

                    {/* Floating dots pattern */}
                    <div className="absolute top-16 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute top-80 right-1/4 w-3 h-3 bg-indigo-400 rounded-full opacity-15 animate-pulse delay-1000"></div>
                    <div className="absolute bottom-60 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-25 animate-pulse delay-500"></div>
                    <div className="absolute bottom-32 right-1/3 w-4 h-4 bg-green-400 rounded-full opacity-10 animate-pulse delay-1500"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Choose Your Perfect Plan
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Transform your grading process with AI-powered assessment tools designed for educational excellence.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Starter Plan */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-2xl font-bold text-gray-900">starter</h3>
                                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">FREE</span>
                                </div>
                                <p className="text-gray-600">
                                    Perfect for individual educators and small classrooms starting their AI grading journey.
                                </p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-gray-900">$0</span>
                                    <span className="text-gray-500">/month</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">Free forever</p>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-semibold text-gray-900 mb-4">Key features:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">Up to 50 student assessments per month</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">Basic AI grading for essays and assignments</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">Standard feedback generation for students</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">Email support for educators</span>
                                    </li>
                                </ul>
                            </div>

                            <button className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                                Get Started Free
                            </button>
                        </div>

                        {/* Professional Plan */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-500 relative hover:shadow-2xl transition-shadow">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                                    Most Popular
                                </span>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-2xl font-bold text-gray-900">professional</h3>
                                    <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded">PRO</span>
                                </div>
                                <p className="text-gray-600">
                                    Designed for educators and departments streamlining student assessment with advanced AI.
                                </p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-gray-900">$29</span>
                                    <span className="text-gray-500">/month per educator</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">or $290/year (save 17%)</p>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-semibold text-gray-900 mb-4">All the features of Starter, and:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">Unlimited student assessments</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">Advanced AI models for accurate student grading</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">Custom rubric creation for assignments</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">Detailed analytics and student progress insights</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">Priority support for educators</span>
                                    </li>
                                </ul>
                            </div>

                            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                                Start Free Trial
                            </button>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow">
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-2xl font-bold text-gray-900">enterprise</h3>
                                    <span className="bg-amber-100 text-amber-800 text-sm font-medium px-2 py-1 rounded">MAX</span>
                                </div>
                                <p className="text-gray-600">
                                    Built for educational institutions managing large-scale student assessments and complex grading workflows.
                                </p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-gray-900">$69</span>
                                    <span className="text-gray-500">/month per institution</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-1">or $690/year (save 17%)</p>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-semibold text-gray-900 mb-4">All the features of Professional, and:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">Unlimited educator accounts for institution</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">Advanced AI models (GPT-4, Claude 3) for student work</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">Custom integrations with student information systems</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">Dedicated account manager for institution</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-gray-600">24/7 premium support for educational institutions</span>
                                    </li>
                                </ul>
                            </div>

                            <button className="w-full bg-amber-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-amber-700 transition-colors">
                                Contact Sales
                            </button>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-20 max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-8">
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Can I switch plans anytime during the academic year?
                                </h3>
                                <p className="text-gray-600">
                                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments to match your academic calendar.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    Is there a free trial for educators and institutions?
                                </h3>
                                <p className="text-gray-600">
                                    Yes, we offer a 14-day free trial for both Professional and Enterprise plans. Perfect for testing with your students before committing. No credit card required to start.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    What payment methods do educational institutions accept?
                                </h3>
                                <p className="text-gray-600">
                                    We accept all major credit cards, PayPal, and can arrange purchase orders and invoicing for educational institutions. We also offer academic discounts for qualifying schools.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    How does the AI ensure fair grading for all students?
                                </h3>
                                <p className="text-gray-600">
                                    Our AI is trained on diverse educational content and regularly audited for bias. It provides consistent, objective grading while allowing educators to review and adjust scores to ensure fairness for all students.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Pricing;