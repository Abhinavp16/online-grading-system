import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft, Send, CheckCircle2, Clock, Calendar, Users, Building, Laptop, ChevronRight } from 'lucide-react';
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
        <div className="min-h-screen bg-white font-sans antialiased text-zinc-900 relative">
            {/* Minimalist Navigation */}
            <nav className="absolute top-0 left-0 right-0 z-50 p-8 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105 active:scale-95">
                        <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-200">
                            <ShieldCheck className="text-white h-6 w-6" />
                        </div>
                        <span className="text-2xl font-black text-zinc-900 tracking-tighter">GRADELY</span>
                    </Link>
                    <Link to="/" className="flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-zinc-900 transition-colors">
                        <ArrowLeft size={16} />
                        Exit to Home
                    </Link>
                </div>
            </nav>

            <section className="pt-48 pb-32 px-6 relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white">
                {/* Refined Background Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/30 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 -z-10 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-100/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 -z-10"></div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr,0.9fr] gap-24 items-start">
                    {/* Left Side: Professional pitch */}
                    <div className="lg:sticky lg:top-48 pr-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200 mb-8 font-extrabold text-[10px] text-zinc-500 uppercase tracking-[0.2em] shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span>
                            Academic Partnerships
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-black text-zinc-900 mb-8 tracking-tight leading-[0.95]">
                            Experience the future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Institutional Tech.</span>
                        </h1>

                        <p className="text-xl text-zinc-500 mb-12 leading-relaxed font-medium max-w-xl">
                            Join 500+ Indian educational centers transforming their evaluation standards with Gradely's AI engine.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {[
                                { title: "Board Standards", desc: "Aligned with CBSE/ICSE patterns.", icon: Building },
                                { title: "Instant Feedback", desc: "AI-generated subjective analysis.", icon: Laptop },
                                { title: "Data Security", desc: "AES-256 Encrypted evaluations.", icon: ShieldCheck },
                                { title: "Regional Experts", desc: "Support in your local language.", icon: Users }
                            ].map((item, idx) => (
                                <div key={idx} className="group flex flex-col gap-3">
                                    <div className="p-3 w-fit rounded-2xl bg-white shadow-sm border border-zinc-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-black text-zinc-900 uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-zinc-500 text-xs leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Professional Badge */}
                        <div className="mt-16 flex items-center gap-4 p-6 bg-zinc-50 border border-zinc-200 rounded-3xl">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-white flex items-center justify-center font-bold text-[10px] text-zinc-500">
                                        P{i}
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full bg-indigo-600 border-2 border-white flex items-center justify-center font-bold text-[10px] text-white">
                                    +50
                                </div>
                            </div>
                            <div className="text-xs font-bold text-zinc-500">
                                <span className="text-zinc-900 font-extrabold">+50 Principals</span> booked this week.
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Optimized Form */}
                    <div className="relative group">
                        {/* Decorative background shadow for form */}
                        <div className="absolute -inset-4 bg-indigo-500/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-zinc-100 overflow-hidden">
                            {/* Form Header */}
                            <div className="bg-zinc-900 p-8 lg:px-12 text-white">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-indigo-500 rounded-2xl">
                                        <Calendar className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black tracking-tight">Request Access</h2>
                                        <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">30-Min Technical Walkthrough</p>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="p-8 lg:p-12 space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5 font-bold">
                                        <label className="text-[10px] text-zinc-400 uppercase tracking-widest pl-1">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-300 text-sm font-medium"
                                            placeholder="Arjun"
                                        />
                                    </div>
                                    <div className="space-y-1.5 font-bold">
                                        <label className="text-[10px] text-zinc-400 uppercase tracking-widest pl-1">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-300 text-sm font-medium"
                                            placeholder="Sharma"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5 font-bold">
                                    <label className="text-[10px] text-zinc-400 uppercase tracking-widest pl-1">Work Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-300 text-sm font-medium"
                                        placeholder="principal@institution.edu.in"
                                    />
                                </div>

                                <div className="space-y-1.5 font-bold">
                                    <label className="text-[10px] text-zinc-400 uppercase tracking-widest pl-1">Institution Name</label>
                                    <input
                                        type="text"
                                        name="organization"
                                        required
                                        value={formData.organization}
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-300 text-sm font-medium"
                                        placeholder="Elite Career Academy"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5 font-bold">
                                        <label className="text-[10px] text-zinc-400 uppercase tracking-widest pl-1">Role</label>
                                        <select
                                            name="role"
                                            required
                                            value={formData.role}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-300 text-sm font-medium appearance-none"
                                        >
                                            <option value="">Select Position</option>
                                            <option value="principal">Principal</option>
                                            <option value="director">Director</option>
                                            <option value="hod">HOD</option>
                                            <option value="it-admin">IT Lead</option>
                                            <option value="teacher">Senior Faculty</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5 font-bold">
                                        <label className="text-[10px] text-zinc-400 uppercase tracking-widest pl-1">WhatsApp Mobile</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-300 text-sm font-medium"
                                            placeholder="+91-XXXXX"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5 font-bold">
                                    <label className="text-[10px] text-zinc-400 uppercase tracking-widest pl-1">Challenges</label>
                                    <textarea
                                        name="challenges"
                                        rows={2}
                                        value={formData.challenges}
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-300 text-sm font-medium resize-none"
                                        placeholder="Briefly describe your current pain points..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full group bg-indigo-600 hover:bg-indigo-500 text-white py-5 px-6 rounded-2xl font-black text-sm tracking-widest transition-all shadow-xl shadow-indigo-100 active:scale-[0.98] flex items-center justify-center gap-3 uppercase mt-4"
                                >
                                    Confirm Reservation
                                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <div className="flex justify-center items-center gap-4 pt-4">
                                    <div className="flex items-center gap-1.5 opacity-50">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                        <span className="text-[10px] font-bold uppercase tracking-tighter">Secure Data</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 opacity-50">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                                        <span className="text-[10px] font-bold uppercase tracking-tighter">Fast Response</span>
                                    </div>
                                </div>
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