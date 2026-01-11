import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const ScheduleDemo = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        role: '',
        phone: '',
        studentsCount: '',
        currentSolution: '',
        challenges: '',
        preferredTime: '',
        additionalInfo: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Demo request submitted:', formData);
        alert('Thank you! We\'ll contact you within 24 hours to schedule your personalized demo.');
    };

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

            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden pt-24">
                {/* Education-themed background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Academic icons */}
                    <div className="absolute top-16 left-16 opacity-8">
                        <svg className="w-12 h-12 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                        </svg>
                    </div>
                    <div className="absolute top-40 right-24 opacity-8">
                        <svg className="w-10 h-10 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                        </svg>
                    </div>
                    <div className="absolute bottom-32 left-32 opacity-8">
                        <svg className="w-14 h-14 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                    </div>
                    <div className="absolute top-64 right-16 opacity-6">
                        <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5z" />
                        </svg>
                    </div>

                    {/* Floating dots */}
                    <div className="absolute top-20 left-1/2 w-2 h-2 bg-blue-300 rounded-full opacity-30 animate-pulse"></div>
                    <div className="absolute top-72 right-1/3 w-3 h-3 bg-indigo-300 rounded-full opacity-20 animate-pulse delay-1000"></div>
                    <div className="absolute bottom-48 left-1/4 w-2 h-2 bg-purple-300 rounded-full opacity-25 animate-pulse delay-500"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Schedule Your Personalized Demo
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            See how Gradely can transform your grading process. Our experts will show you exactly how our AI-powered platform can save you time and improve assessment quality.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Demo Benefits */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                What You'll Learn in Your Demo
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">AI-Powered Student Grading in Action</h3>
                                        <p className="text-gray-600">Watch our AI grade real student submissions with accuracy and detailed feedback for educational excellence.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Time-Saving Workflows for Educators</h3>
                                        <p className="text-gray-600">Discover how to reduce grading time by up to 80% while maintaining quality assessment for your students.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Custom Rubric Creation for Assignments</h3>
                                        <p className="text-gray-600">Learn to create and customize rubrics that match your specific educational requirements and assessment criteria.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Integration with Educational Systems</h3>
                                        <p className="text-gray-600">See how Gradely integrates with your existing LMS, student information systems, and educational workflow.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 rounded-full p-2 flex-shrink-0">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-2">Personalized Setup for Your Institution</h3>
                                        <p className="text-gray-600">Get recommendations tailored to your educational institution's specific needs and student assessment requirements.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                                <p className="text-sm text-blue-800">
                                    <strong>Demo Duration:</strong> 30-45 minutes<br />
                                    <strong>Format:</strong> Live video call with screen sharing<br />
                                    <strong>Follow-up:</strong> Personalized implementation plan
                                </p>
                            </div>

                            <div className="mt-6 pt-6 border-t border-gray-100">
                                <p className="text-gray-600 mb-4 text-sm font-medium">Want to explore our plans first?</p>
                                <Link
                                    to="/pricing"
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-bold rounded-xl border-2 border-blue-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300 group"
                                >
                                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    View Pricing Plans
                                </Link>
                            </div>
                        </div>

                        {/* Demo Request Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Request Your Demo
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Work Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                                        Organization/Institution *
                                    </label>
                                    <input
                                        type="text"
                                        id="organization"
                                        name="organization"
                                        required
                                        value={formData.organization}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Role *
                                    </label>
                                    <select
                                        id="role"
                                        name="role"
                                        required
                                        value={formData.role}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select your role</option>
                                        <option value="teacher">Teacher/Educator</option>
                                        <option value="administrator">Administrator</option>
                                        <option value="department-head">Department Head</option>
                                        <option value="it-director">IT Director</option>
                                        <option value="curriculum-coordinator">Curriculum Coordinator</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="studentsCount" className="block text-sm font-medium text-gray-700 mb-2">
                                        Number of Students/Assessments per Month
                                    </label>
                                    <select
                                        id="studentsCount"
                                        name="studentsCount"
                                        value={formData.studentsCount}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select range</option>
                                        <option value="1-50">1-50</option>
                                        <option value="51-200">51-200</option>
                                        <option value="201-500">201-500</option>
                                        <option value="501-1000">501-1000</option>
                                        <option value="1000+">1000+</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="currentSolution" className="block text-sm font-medium text-gray-700 mb-2">
                                        Current Grading Solution
                                    </label>
                                    <input
                                        type="text"
                                        id="currentSolution"
                                        name="currentSolution"
                                        placeholder="e.g., Manual grading, Canvas, Blackboard, etc."
                                        value={formData.currentSolution}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-2">
                                        Main Grading Challenges
                                    </label>
                                    <textarea
                                        id="challenges"
                                        name="challenges"
                                        rows={3}
                                        placeholder="Tell us about your current grading challenges..."
                                        value={formData.challenges}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                                        Preferred Demo Time
                                    </label>
                                    <select
                                        id="preferredTime"
                                        name="preferredTime"
                                        value={formData.preferredTime}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="">Select preferred time</option>
                                        <option value="morning">Morning (9 AM - 12 PM)</option>
                                        <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                                        <option value="evening">Evening (5 PM - 8 PM)</option>
                                        <option value="flexible">I'm flexible</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                                        Additional Information
                                    </label>
                                    <textarea
                                        id="additionalInfo"
                                        name="additionalInfo"
                                        rows={3}
                                        placeholder="Any specific features you'd like to see or questions you have..."
                                        value={formData.additionalInfo}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors text-lg"
                                >
                                    Schedule My Demo
                                </button>

                                <p className="text-sm text-gray-500 text-center">
                                    By submitting this form, you agree to our privacy policy. We'll contact you within 24 hours to schedule your demo.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ScheduleDemo;