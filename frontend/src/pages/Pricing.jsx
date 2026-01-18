import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, Building2, School, GraduationCap, Zap, HelpCircle } from 'lucide-react';
import Footer from '../components/Footer';

const PricingPlan = ({ name, price, description, features, buttonText, highlighted, icon: Icon, badge }) => (
    <div className={`relative flex flex-col p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${highlighted
            ? 'bg-zinc-900 text-white shadow-2xl shadow-indigo-200/50 border-2 border-indigo-500 scale-105 z-10'
            : 'bg-white text-zinc-900 shadow-xl shadow-zinc-200/50 border border-zinc-100 hover:border-indigo-100'
        }`}>
        {badge && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full tracking-widest uppercase">
                {badge}
            </div>
        )}

        <div className="mb-8">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${highlighted ? 'bg-indigo-500 text-white' : 'bg-indigo-50 text-indigo-600'
                }`}>
                <Icon size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2 tracking-tight">{name}</h3>
            <p className={`text-sm leading-relaxed ${highlighted ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {description}
            </p>
        </div>

        <div className="mb-8">
            <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black">{price === '0' ? '₹0' : `₹${price}`}</span>
                <span className={`text-sm font-medium ${highlighted ? 'text-zinc-500' : 'text-zinc-400'}`}>
                    {price === '0' ? '' : '/month'}
                </span>
            </div>
            {price !== '0' && (
                <p className={`text-xs mt-2 font-medium ${highlighted ? 'text-indigo-400' : 'text-indigo-600'}`}>
                    *GST applicable as per Indian laws
                </p>
            )}
        </div>

        <ul className="space-y-4 mb-10 flex-1">
            {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 group">
                    <div className={`mt-1 p-0.5 rounded-full ${highlighted ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                        <Check size={14} strokeWidth={3} />
                    </div>
                    <span className={`text-sm ${highlighted ? 'text-zinc-300' : 'text-zinc-600'}`}>
                        {feature}
                    </span>
                </li>
            ))}
        </ul>

        <button className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 group ${highlighted
                ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20'
                : 'bg-zinc-900 hover:bg-zinc-800 text-white'
            }`}>
            {buttonText}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
    </div>
);

const Pricing = () => {
    return (
        <div className="min-h-screen bg-zinc-50 font-sans antialiased text-zinc-900 relative">
            {/* Navigation Header */}
            <div className="absolute top-0 left-0 right-0 z-50 p-6 flex justify-between items-center max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="bg-indigo-600 p-2 rounded-xl shadow-lg group-hover:bg-indigo-500 transition-all transform group-hover:scale-110">
                        <GraduationCap className="text-white h-6 w-6" />
                    </div>
                    <span className="text-2xl font-bold text-zinc-900 tracking-tight">Gradely</span>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/login" className="text-sm font-bold text-zinc-600 hover:text-indigo-600 transition-colors">Sign In</Link>
                    <Link to="/schedule-demo" className="bg-zinc-900 text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">Book Demo</Link>
                </div>
            </div>

            <section className="pt-32 pb-24 px-4 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-indigo-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-zinc-100 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-10"></div>

                <div className="max-w-7xl mx-auto text-center mb-20 px-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6 group cursor-default">
                        <Zap size={14} className="text-indigo-600 fill-indigo-600 group-hover:animate-pulse" />
                        <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Built for Indian Education</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-zinc-900 mb-6 tracking-tight">
                        Transparent Pricing for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-400">Institutional Growth</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        Whether you're a coaching center, a K-12 school, or a university department, we have a plan to scale your grading process.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-stretch pt-8 px-4">
                    <PricingPlan
                        name="Basic"
                        price="0"
                        icon={Star}
                        description="Ideal for individual tutors and teachers starting their digital journey."
                        features={[
                            "Up to 30 student assessments/month",
                            "Standard AI Auto-grading",
                            "Basic performance reports",
                            "Export as PDF/Email",
                            "Standard community support"
                        ]}
                        buttonText="Start for Free"
                    />

                    <PricingPlan
                        name="Popular"
                        price="2,499"
                        icon={Zap}
                        highlighted={true}
                        badge="Most Popular"
                        description="Professional tools for coaching institutes and independent departments."
                        features={[
                            "Unlimited student assessments",
                            "Advanced AI Rubric engine",
                            "Deep insights & Gap analysis",
                            "Parent-Teacher dashboard",
                            "Custom institution branding",
                            "Priority WhatsApp support"
                        ]}
                        buttonText="Choose Professional"
                    />

                    <PricingPlan
                        name="Institutional"
                        price="7,999"
                        icon={Building2}
                        description="Enterprise-grade features for schools and large organizations."
                        features={[
                            "Multi-branch management",
                            "API access & Integrations",
                            "Dedicated Account Manager",
                            "White-labeled student app",
                            "On-site teacher training",
                            "SLA-backed 24/7 support"
                        ]}
                        buttonText="Contact Sales"
                    />
                </div>

                {/* Trust Footer */}
                <div className="mt-24 text-center px-4">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-10">Trusted by leading Indian Institutions</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder for Indian Educational Brand Logos */}
                        <div className="text-xl md:text-2xl font-bold italic text-zinc-800 tracking-tighter">KV SCHOOLS</div>
                        <div className="text-xl md:text-2xl font-bold italic text-zinc-800 tracking-tighter">DPS SOCIETY</div>
                        <div className="text-xl md:text-2xl font-bold italic text-zinc-800 tracking-tighter">IIT CHAYAN</div>
                        <div className="text-xl md:text-2xl font-bold italic text-zinc-800 tracking-tighter">CBSE/ICSE</div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-32 max-w-4xl mx-auto px-4">
                    <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 bg-zinc-900 rounded-2xl">
                            <HelpCircle className="text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Got Questions?</h2>
                    </div>

                    <div className="grid gap-6">
                        {[
                            {
                                q: "Do you offer GST compliant invoices?",
                                a: "Absolutely. All our paid plans come with automated GST invoices and we support your institution's registration for tax credit."
                            },
                            {
                                q: "What about the Indian curriculum (CBSE/ICSE)?",
                                a: "Gradely is specifically trained on Indian board standards. You can choose from predefined rubrics for standard X and XII board patterns."
                            },
                            {
                                q: "Can we pay via UPI or Net Banking?",
                                a: "Yes, we support all major Indian payment methods through Razorpay, including UPI, Net Banking, and local Debit Cards."
                            },
                            {
                                q: "Is there on-site support for large schools?",
                                a: "Our Institutional plan includes optional on-site training workshops for your teaching staff across major cities in India."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="group p-8 bg-white border border-zinc-100 rounded-3xl hover:border-indigo-100 transition-all duration-300">
                                <h3 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-indigo-600 transition-colors">{faq.q}</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm font-medium">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Pricing;