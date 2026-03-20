import sql from '../assets/sql.png';
import { motion } from "motion/react";
import Logos from './CompTech/TechLogos';
import Contact from './Contact';
import ParcoursCombined from './testComp';
import CountUp from 'react-countup';
import StackedImages from './CompTech/images';
import pix from '../assets/pix.png';
import React, { useState } from 'react';
import csp from '../assets/csp.png';
import pts from '../assets/pts.png';

  const logos = [
    { src: csp, alt: "CSP" },
    { src: pts, alt: "PTS" },
  ];


const HomeP = () => {
    const [showPdf, setShowPdf] = useState(false);
    return (
        <>
            {/* Modal overlay */}
            {showPdf && (
                <div 
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
                    onClick={() => setShowPdf(false)}
                >
                    <div 
                        className="relative w-full max-w-[150vh] h-[85vh] bg-gray-900 rounded-2xl overflow-hidden border border-purple-400/30 shadow-2xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowPdf(false)}
                            className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                            ✕
                        </button>
                        <iframe
                            src={`${pix}#toolbar=0&navpanes=0`}
                            className="w-full h-full"
                            title="Certification"
                        />
                    </div>
                </div>
            )}

            <div className="h-screen overflow-auto  relative font-mono">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                {/* Hero Section with Profile */}
                <section id="profile-section" className="relative pb-20 pt-70 px-4 sm:px-6">
                    <div className="max-w-[120rem] mx-auto">
                        <div className="bg-gradient-to-br from-white/6 to-transparent backdrop-blur-xl rounded-[2rem] shadow-xl/30 relative p-8 md:p-12 border-2 border-purple-500/20 hover:border-blue-500/30 transition-all duration-500">
                            
                            {/* Decorative gradient orbs */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-2xl opacity-20"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20"></div>

                            {/* Name and Introduction */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="mt-20 md:mt-24"
                            >
                                {/* Pill + SLAM Card side by side */}
                                <div className="flex gap-6 flex-wrap justify-center mt-5">

                                    {/* Left: Pill badge */}
                                    <div className="pl-50 relative inline-flex flex-col bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-tl-full rounded-bl-full rounded-tr-lg rounded-br-lg px-6 py-8 border border-white/20">
                                        {/* Animated profile image */}
                                        <motion.div
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 3, opacity: 1 }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                            className="absolute -top-8 -left-4 w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-white/30 ring-2 ring-purple-500/20 shadow-lg flex-shrink-0"
                                        >
                                            <img src={sql} alt="Profile" className="w-full h-full object-cover" />
                                        </motion.div>

                                        {/* Name on top-left */}
                                        <div className="text-white/90 pr-40 text-5xl font-bold mt-2">
                                            CAPPELLO Alicia
                                        </div>

                                        {/* Description at bottom */}
                                        <div className="text-white/70 pr-30 text-sm mt-auto mb-10">
                                            ✨ Etudiante en BTS SIO • Future UX/UI Designer
                                        </div>
                                    </div>

                                    {/* Right: SLAM Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7, duration: 0.6 }}
                                        className="relative inline-flex items-start gap-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-tl-lg rounded-bl-lg rounded-tr-full rounded-br-full px-6 py-4 border border-white/20 group hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 pt-8 pr-8 ml-10"
                                    >
                                        <div className="flex h-full p-4 pb-8 pl-8 pr-8">
                                            <div className="text-left">
                                                <p className="text-white font-bold text-lg md:text-xl tracking-tight">Bonjour!</p>
                                                <p className='text-white/70 text-sm md:text-base font-medium'>
                                                    Je suis passionnée par l'informatique et ses métiers, <br/>
                                                    Me préparant pour devenir future UI/UX Designer<br/>
                                                    et concepteur de solutions informatiques.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>            
                            <div className='pt-15'>
                                <ParcoursCombined />
                            </div>

                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills-section" className="px-4 sm:px-6 pb-20">
                    <div className="max-w-[120rem] mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-[#2B2B2B] to-[#1F1F1F] backdrop-blur-xl rounded-[2rem] shadow-xl/30 p-8 md:p-12 border-2 border-purple-500/20 hover:border-blue-500/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-12">
                                <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                                <div className="text-4xl md:text-6xl text-white">
                                Compétences
                                </div>
                            </div>
                            <Logos/>
                            <div className="mt-16 flex items-center gap-4 mb-8 justify-center flex-wrap w-full">
                                <div className='flex flex-col pb-10'>

                                    <div className="text-2xl pb-10 text-purple-300/80 text-center italic mb-4 font-medium tracking-wide">
                                        Compétences acquises au cours de mes 2 années de BTS
                                    </div>

                                    <div className='gap-30 flex'>
                                        {/* Backend */}
                                        <div className="bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 
                                                        backdrop-blur-sm rounded-2xl p-11 border border-purple-400/30 
                                                        w-125 flex flex-col items-center justify-center relative overflow-hidden">

                                            <div className="text-2xl font-bold mb-5 text-white tracking-tight">Compétences Backend</div>

                                                <div className="flex flex-wrap gap-3 justify-center">
                                                {/* PHP / Laravel */}
                                                <span className="px-4 py-2 bg-pink-500/20 border border-pink-400/40 text-pink-200 text-sm rounded-full">Laravel</span>
                                                <span className="px-4 py-2 bg-pink-500/20 border border-pink-400/40 text-pink-200 text-sm rounded-full">PHP</span>

                                                {/* Base de données */}
                                                <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/40 text-blue-200 text-sm rounded-full">MySQL</span>
                                                <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/40 text-blue-200 text-sm rounded-full">Eloquent ORM</span>

                                                {/* APIs */}
                                                <span className="px-4 py-2 bg-indigo-500/20 border border-indigo-400/40 text-indigo-200 text-sm rounded-full">REST API</span>
                                                <span className="px-4 py-2 bg-indigo-500/20 border border-indigo-400/40 text-indigo-200 text-sm rounded-full">Postman</span>

                                                {/* Python */}
                                                <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-400/40 text-yellow-200 text-sm rounded-full">Python</span>

                                                {/* Node.js */}
                                                <span className="px-4 py-2 bg-green-500/20 border border-green-400/40 text-green-200 text-sm rounded-full">Node.js</span>
                                                </div>

                                        </div>

                                        {/* Frontend */}
                                        <div className="bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 
                                                        backdrop-blur-sm rounded-2xl p-11 border border-purple-400/30 
                                                        w-125 flex flex-col items-center justify-center relative overflow-hidden">

                                            <div className="text-2xl font-bold mb-5 text-white tracking-tight">Compétences Frontend</div>

                                            <div className="flex flex-wrap gap-3 justify-center">
                                                <span className="px-4 py-2 bg-orange-500/20 border border-orange-400/40 text-orange-200 text-sm rounded-full">HTML</span>
                                                <span className="px-4 py-2 bg-blue-500/20 border border-blue-400/40 text-blue-200 text-sm rounded-full">CSS</span>
                                                <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-400/40 text-yellow-200 text-sm rounded-full">JavaScript</span>
                                                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-sm rounded-full">React</span>
                                                <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 text-sm rounded-full">Vue</span>
                                                <span className="px-4 py-2 bg-teal-500/20 border border-teal-400/40 text-teal-200 text-sm rounded-full">Tailwind</span>
                                                <span className="px-4 py-2 bg-teal-500/20 border border-teal-400/40 text-teal-200 text-sm rounded-full">Kotlin</span>
                                                <span className="px-4 py-2 bg-teal-500/20 border border-teal-400/40 text-teal-200 text-sm rounded-full">Vite</span>
                                                <span className="px-4 py-2 bg-teal-500/20 border border-teal-400/40 text-teal-200 text-sm rounded-full">Blade</span>
                                                <span className="px-4 py-2 bg-teal-500/20 border border-teal-400/40 text-teal-200 text-sm rounded-full">Clip Studio Paint</span>
                                                <span className="px-4 py-2 bg-teal-500/20 border border-teal-400/40 text-teal-200 text-sm rounded-full">Paint Tool Sai</span>
                                                <span className="px-4 py-2 bg-indigo-500/20 border border-indigo-400/40 text-indigo-200 text-sm rounded-full">Responsive Design</span>
                                            </div>

                                        </div>
                                    </div>
                            </div>
                            
                                    <div className="flex justify-center mt-8 gap-60">
                                        {[
                                        { end: 3, label: "Projets scolaire" },
                                        { end: 4, label: "Projets Stage" },
                                        { end: 8, label: "Languages appris" },
                                        ].map(({ end, label }, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                                            className="flex flex-col p-20 items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl border border-white/20 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                                        >
                                            <p className="text-white font-bold text-xl md:text-2xl">
                                            <CountUp end={end} duration={2} />
                                            </p>
                                            <p className="text-white/70 text-sm mt-1 text-center">{label}</p>
                                        </motion.div>
                                        ))}
                                </div>

                                </div>
                            <div className="mt-16">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                    <div className="text-4xl md:text-6xl text-white">Certification</div>
                                </div>
                                    {/* Card */}
                                    <div className="bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-10 border-2 border-dashed border-purple-400/30 min-h-[180px] flex items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="text-center relative z-10">
                                            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <span className="text-3xl">🎓</span>
                                            </div>
                                            <p className="text-white/80 text-lg font-light mb-4">Certification pix</p>
                                            <button
                                                onClick={() => setShowPdf(true)}
                                                className="px-5 py-2 bg-purple-500/30 hover:bg-purple-500/50 border border-purple-400/40 text-white/80 text-sm rounded-full transition-all duration-200 hover:scale-105"
                                            >
                                                Voir le certificat
                                            </button>
                                        </div>
                                    </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects-section" className="px-4 sm:px-6 pb-20">
                    <div className="max-w-[120rem] mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-[#2B2B2B] to-[#1F1F1F] backdrop-blur-xl rounded-[2rem] shadow-xl/30 p-8 md:p-12 border-2 border-purple-500/20 hover:border-blue-500/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-12">
                                <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                                <div className="text-4xl md:text-6xl text-white">
                                    Projets
                                </div>
                            </div>

                            <div className="mt-16">
                                <div className="flex gap-6">

                                    {/* Projets stages */}
                                    <div className="bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 
                                                    backdrop-blur-sm rounded-2xl p-10 border border-purple-400/30 
                                                    flex-1 pb-5 min-h-[180px] flex items-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="relative z-10 w-full">
                                            <div className="text-center w-full">
                                                <a href='/Projets' className='hover:underline text-2xl font-semibold text-white/80 hover:text-purple-300 transition-colors duration-300'>
                                                    Projets stages
                                                </a>
                                            </div>
                                            <StackedImages />
                                        </div>
                                    </div>

                                    {/* Projets scolaires */}
                                    <div className="bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 
                                                    backdrop-blur-sm rounded-2xl p-10 border border-purple-400/30 
                                                    flex-1 pb-5 min-h-[180px] flex items-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="relative z-10 w-full">
                                            <div className="text-center w-full">
                                                <a href='/PScolaire' className='hover:underline text-2xl font-semibold text-white/80 hover:text-purple-300 transition-colors duration-300'>
                                                    Projets scolaires
                                                </a>
                                            </div>
                                            <StackedImages />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact-section" className="px-4 sm:px-6 pb-24">
                    <div className="max-w-[120rem] mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-br from-white/6 to-transparent backdrop-blur-xl rounded-[2rem] shadow-xl/30 p-8 md:p-12 border-2 border-purple-500/20 hover:border-blue-500/30 transition-all duration-500"
                        >
                            <div className="flex items-center gap-4 mb-12">
                                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                <div className="text-4xl md:text-6xl text-white">
                                    Contact
                                </div>
                            </div>
                            <Contact/>
                        </motion.div>
                    </div>
                </section>

                {/* Footer decoration */}
                <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
            </div>
        </>
    )
};

export default HomeP;