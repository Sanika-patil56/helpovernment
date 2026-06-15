import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import flagImg from './assets/flag.png';
import {
    ShieldCheck,
    Bell,
    CheckCircle2,
    ChevronRight,
    Globe,
    Landmark,
    Clock
} from 'lucide-react';


/** 
 * MAIN APP COMPONENT 
 */
export default function App() {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [email, setEmail] = useState("");


    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setTimeout(() => setIsSubscribed(false), 5000);
            setEmail("");
        }
    };


    return (
        <div className="min-h-screen w-full bg-[#0a0f1a] text-white flex flex-col items-center font-sans relative selection:bg-[#FF9933]/30 overflow-x-hidden">


            {/* Background Layer */}
            <div
                className="absolute inset-0 pointer-events-none z-0 select-none opacity-20"
                style={{
                    backgroundImage: `url(${flagImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(20px)',
                }}
            ></div>


            {/* Main Content */}
            <div className="flex-1 w-full flex flex-col items-center justify-center px-6 relative z-10 py-20">

                {/* Header/Logo */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 mb-12 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF9933] to-[#128807] flex items-center justify-center">
                        <Landmark className="text-white w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">
                        Government Support Initiative
                    </span>
                </motion.div>


                {/* Central Glass Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl w-full text-center p-8 md:p-16 rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden"
                >
                    {/* Subtle Glow Effect */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#FF9933]/50 to-transparent"></div>


                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none bg-gradient-to-r from-[#FF9933] via-white to-[#128807] bg-clip-text text-transparent italic opacity-90">
                            <span className="block">Help Government</span>
                            <span className="block"> is on the way </span>
                        </h1>

                        <p className="text-lg md:text-2xl text-white/70 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                            We are working tirelessly to bring secure, transparent, and accessible government services directly to every citizen's fingertips.
                        </p>
                    </motion.div>


                    {/* Progress Indicator */}
                    <div className="mt-8 max-w-sm mx-auto">
                        <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/40 mb-3 font-bold">
                            <span>Platform Integrity</span>
                            <span>88% Verified</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "88%" }}
                                transition={{ duration: 2.5, ease: "circOut", delay: 0.5 }}
                                className="h-full rounded-full bg-gradient-to-r from-[#FF9933] via-white to-[#128807] shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                            ></motion.div>
                        </div>
                    </div>


                    {/* Call to Action */}
                    <div className="mt-12">
                        <AnimatePresence mode="wait">
                            {!isSubscribed ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubscribe}
                                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                                >
                                    <input
                                        type="email"
                                        required
                                        placeholder="Enter your email for launch updates"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#FF9933]/50 transition-all backdrop-blur-md"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-white text-slate-900 font-bold px-8 py-4 rounded-2xl hover:bg-[#FF9933] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap"
                                    >
                                        Notify Me
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="flex items-center justify-center gap-2 text-[#128807] font-semibold bg-[#128807]/10 py-4 px-6 rounded-2xl border border-[#128807]/20 max-w-md mx-auto"
                                >
                                    <CheckCircle2 className="w-5 h-5" />
                                    You're on the list! We'll reach out soon.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>


                {/* Feature Highlights */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
                    {[
                        { icon: ShieldCheck, title: "Secure Portal", desc: "Enterprise-grade encryption for citizen data." },
                        { icon: Globe, title: "PAN India", desc: "Localized services available in 22+ languages." },
                        { icon: Clock, title: "24/7 Support", desc: "Automated assistance for government queries." }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + (idx * 0.1) }}
                            className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-colors group cursor-default"
                        >
                            <item.icon className="w-8 h-8 text-[#FF9933] mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                            <h3 className="text-white font-bold mb-2">{item.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>


            {/* Footer */}
            <footer className="w-full py-8 px-6 border-t border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs tracking-widest font-medium uppercase">
                    <div className="flex items-center gap-4">
                        <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Digital India</span>
                        <span className="hover:text-white cursor-pointer transition-colors">Citizen Charter</span>
                    </div>
                    <div>
                        © 2026 Help Government. All rights reserved.
                    </div>
                </div>
            </footer>


            {/* Subtle Floating Glows */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FF9933]/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#128807]/10 blur-[120px] rounded-full pointer-events-none"></div>
        </div>
    );
}
