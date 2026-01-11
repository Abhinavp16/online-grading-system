import { X, Linkedin, Github, ShieldCheck } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2.5 rounded-xl shadow-lg border border-white/20">
                                <ShieldCheck className="text-white h-6 w-6" strokeWidth={2.5} />
                            </div>
                            <span className="text-xl md:text-2xl font-black text-white tracking-tight uppercase">
                                Gradely
                            </span>
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                            Empowering educators with automated grading solutions for a smarter future. Secure, reliable, and instant.
                        </p>
                        <div className="flex space-x-4">
                            <a 
                                href="#" 
                                className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300"
                                aria-label="Follow us on X (Twitter)"
                            >
                                <X size={20} />
                            </a>
                            <a 
                                href="#" 
                                className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300"
                                aria-label="Connect with us on LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a 
                                href="#" 
                                className="bg-gray-800 p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300"
                                aria-label="View our GitHub"
                            >
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Product</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Features</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Security</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Integrations</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Pricing</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Resources</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Documentation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">API Reference</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Community</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Company</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">About</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Blog</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">© 2026 Gradely. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
