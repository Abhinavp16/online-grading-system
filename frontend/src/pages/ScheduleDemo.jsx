import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Send, CheckCircle2, Clock, Calendar, Users, Briefcase } from 'lucide-react';
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
        console.log('Demo request submitted:', formData);
        alert('Namaste! Thank you for your interest. Our academic expert will contact you within 24 hours to schedule your walk-through.');
    };

    return (
        <div className="min-h-screen bg-zinc-50 font-sans antialiased text-zinc-900 relative">
            {/* Header branding */}
            <div className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="bg-indigo-600 p-2 rounded-xl shadow-lg group-hover:bg-indigo-500 transition-all transform group-hover:scale-110">
                        <ShieldCheck className="text-white h-6 w-6" />
                    </div>
                    <span className="text-2xl font-bold text-zinc-900 tracking-tight">Gradely</span>
                </Link>
                <Link to="/" className="flex items-center gap-2 text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors">
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>
            </div>

            <section className="pt-32 pb-24 px-4 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-zinc-100 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-10"></div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
                    {/* Left Side: Content */}
                    <div className="lg:sticky lg:top-32">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6 font-bold text-xs text-indigo-600 uppercase tracking-widest">
                            Exclusive Presentation
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black text-zinc-900 mb-8 tracking-tight leading-[1.1]">
                            See how we scale <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Indian Institutions.</span>
                        </h1>
                        <p className="text-lg text-zinc-500 mb-12 leading-relaxed font-medium">
                            Join 500+ schools and coaching centers across India using Gradely to automate their evaluation workflows.
                        </p>

                        <div className="space-y-8">
                            {[
                                {
                                    title: "CBSE/ICSE Optimized",
                                    desc: "Pre-trained AI for standard Indian board evaluation patterns.",
                                    icon: CheckCircle2
                                },
                                {
                                    title: "Parent Connectivity",
                                    desc: "Automated progress WhatsApp notifications for parents.",
                                    icon: Users
                                },
                                {
                                    title: "30-Min Walkthrough",
                                    desc: "Dedicated session with our regional academic head.",
                                    icon: Clock
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-white shadow-md border border-zinc-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-zinc-900 mb-1">{item.title}</h4>
                                        <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 p-8 bg-zinc-900 border border-zinc-800 rounded-3xl text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <p className="text-indigo-400 font-bold text-xs uppercase tracking-widest mb-4">Upcoming Availability</p>
                            <h5 className="text-xl font-bold mb-2">Book for this week!</h5>
                            <p className="text-zinc-400 text-sm mb-0">Our team is currently visiting Delhi OCR and Mumbai educational hubs. Limited slots for in-person demos available.</p>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-zinc-200/50 border border-zinc-100 p-8 lg:p-12 relative">
                        <h2 className="text-2xl font-bold text-zinc-900 mb-8 tracking-tight flex items-center gap-3">
                            <Calendar className="text-indigo-600" />
                            Reservations
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider block">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-200"
                                        placeholder="Arjun"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider block">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-200"
                                        placeholder="Sharma"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider block">Official Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-200"
                                    placeholder="principal@institution.edu.in"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider block">Institution / Coaching Name</label>
                                <input
                                    type="text"
                                    name="organization"
                                    required
                                    value={formData.organization}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-200"
                                    placeholder="Bright Career Academy"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider block">Your Role</label>
                                    <select
                                        name="role"
                                        required
                                        value={formData.role}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-200 appearance-none"
                                    >
                                        <option value="">Select Position</option>
                                        <option value="principal">Principal</option>
                                        <option value="director">Director / Owner</option>
                                        <option value="hod">Head of Department</option>
                                        <option value="it-admin">IT Administrator</option>
                                        <option value="teacher">Senior Faculty</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider block">WhatsApp Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-200"
                                        placeholder="+91-98XXX-XXXXX"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-zinc-700 uppercase tracking-wider block">Primary Challenges</label>
                                <textarea
                                    name="challenges"
                                    rows={3}
                                    value={formData.challenges}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-200 resize-none"
                                    placeholder="e.g., Manual paper checked, subjective feedback..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-4 px-6 rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-indigo-200 active:scale-[0.98] flex items-center justify-center gap-3 mt-4"
                            >
                                <Send size={20} />
                                Confirm Walkthrough
                            </button>

                            <p className="text-[10px] text-zinc-400 text-center uppercase tracking-widest font-bold">
                                Integrated with Razorpay Secure & GDPR Compliant
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ScheduleDemo;