import sql from '../assets/sql.png';
import { motion } from "motion/react";
import Logos from './CompTech/TechLogos';
import OutlinedTimeline from './CompTech/CV';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import StripeCard from './CompTech/Card';


const HomeP = () => {
    return (
        <div className="h-screen overflow-auto bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            {/* Hero Section with Profile */}
            <section id="profile-section" className="relative pt-24 pb-20 pt-50 px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    
                    <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-[2rem] shadow-2xl relative p-8 md:p-12 border border-white/20 transition-all duration-500">
                        {/* Decorative gradient orbs */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-2xl opacity-20"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-20"></div>
                        
                        {/* Profile Image with enhanced effect */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="w-32 h-32 md:w-40 md:h-40  rounded-full absolute -top-16 md:-top-20 left-1/2 transform -translate-x-1/2 shadow-2xl overflow-hidden border-4 border-white/30 ring-4 ring-purple-500/20"
                        >
                            <img
                                src={sql}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Name and Introduction */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="mt-20 md:mt-24 text-center"
                        >
                            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white/80">
                                CAPPELLO Alicia
                            </h1>

                            <div className="inline-block bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/20">
                                <p className="text-white/90 text-sm md:text-base font-medium">
                                    ✨ Etudiante en BTS SIO • Future UX/UI Designer
                                </p>
                            </div>
                            <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                                Passionnée par le fait que je sais pas ce que je fais aled?
                                <br className="hidden md:block" />
                                HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                            </p>
                        </motion.div>

                        {/* Background Section with modern card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="mt-16"
                        >
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
                                <h2 className="text-white text-2xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Mon Parcours
                                </h2>
                                <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-500"></div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20 shadow-xl">
                                <p className="text-white/90 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto font-light text-center">
                                    Avant d'intégrer le BTS SIO, j'ai commencé par un <span className="text-purple-300 font-medium">Bac Pro Gestion Administration</span>. 
                                    Après avoir obtenu mon diplôme, j'ai poursuivi mes études en <span className="text-pink-300 font-medium">langues anglais/japonais</span> à l'université pendant un an.
                                    Je me suis ensuite reconvertie dans le développement avec un <span className="text-blue-300 font-medium">BTS SIO option SLAM</span>.
                                    <br /><br />
                                    <span className="text-xl font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                                        Mon objectif : atteindre le niveau Master pour devenir UX/UI Designer
                                    </span>
                                </p>
                            </div>
                        </motion.div>

                        {/* SLAM vs SISR Cards - Enhanced */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="flex justify-center mt-14 gap-6 flex-wrap"
                        >
                            <div className="w-full md:w-80 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800 shadow-2xl rounded-3xl p-8 border border-purple-400/30 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                        </div>
                                        <p className="text-2xl font-bold text-white tracking-tight">SLAM</p>
                                    </div>
                                    <p className="text-white/90 text-base leading-relaxed font-light">
                                        Formation axée sur le développement d'applications et la programmation logicielle.
                                    </p>
                                    <div className="mt-4 inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <span className="text-white/80 text-xs font-medium">Ma spécialité ✓</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="w-full md:w-80 bg-gradient-to-br from-slate-700/40 via-slate-800/40 to-slate-900/40 backdrop-blur-md shadow-2xl rounded-3xl p-8 border border-white/10 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-slate-700/60 hover:via-slate-800/60 hover:to-slate-900/60 group relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                                            <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                                        </div>
                                        <p className="text-2xl font-bold text-white/80 tracking-tight">SISR</p>
                                    </div>
                                    <p className="text-white/70 text-base leading-relaxed font-light">
                                        Formation axée sur la maintenance et l'administration des systèmes et réseaux.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <div className="px-4 sm:px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500"
                    >
                        <OutlinedTimeline/>
                    </motion.div> 
                </div>
            </div>

            {/* Skills Section */}
            <section id="skills-section" className="px-4 sm:px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent tracking-tight">
                                Compétences
                            </h2>
                        </div>
                        <Logos/>
                        <div className="mt-16 flex items-center gap-4 mb-8 justify-center flex-wrap w-full">
                            <div className="bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-5 border-1 border border-purple-400/30 h-50 w-125 flex items-center justify-center relative overflow-hidden group "> 
                            gth
                            </div>
                            <div className="bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-5 border-1 border border-purple-400/30 h-50 w-125 flex items-center justify-center relative overflow-hidden group "> 
                            gth
                            </div>
                        </div>
                        <div className="mt-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Certifications</h3>
                            </div>
                            <div className="bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-10 border-2 border-dashed border-purple-400/30 min-h-[180px] flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="text-center relative z-10">
                                    <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-3xl">🎓</span>
                                    </div>
                                    <p className="text-white/60 text-lg font-light">Certifications à venir...</p>
                                    <p className="text-white/40 text-sm mt-2">En cours de préparation</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects-section" className="px-4 sm:px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500"
                    >
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
                                Projets
                            </h2>
                        </div>
                        <div className="mt-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Stage 1</h3>
                            </div>
                            <div>
                                <div className="pb-5 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-10 border-2 border-dashed border-purple-400/30 min-h-[180px] flex items-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative z-10">
                                        <div className="text-white/80 text-lg font-medium hover:text-purple-300 transition-colors duration-300">
                                            {<StripeCard/>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Stage 2</h3>
                            </div>
                            <div>
                                <div className="pb-5 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-10 border-2 border-dashed border-purple-400/30 min-h-[180px] flex items-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative z-10">
                                        <Link to="/ParadisDuGeek" className="text-white/80 text-lg font-medium hover:text-purple-300 transition-colors duration-300">
                                            Projet Paradis Geek -Refont d'un site wordpress
                                        </Link>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-10 border-2 border-dashed border-purple-400/30 min-h-[180px] flex items-center relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="relative z-10">
                                        <Link to="/Bridge" className="text-white/80 text-lg font-medium hover:text-purple-300 transition-colors duration-300">
                                            Projet Bridge - Création d'un site wordpress
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>  
            </section>

            {/* Contact Section */}
            <section id="contact-section" className="px-4 sm:px-6 pb-24">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-[2rem] shadow-2xl p-8 md:p-12 border border-white/20 hover:border-white/30 transition-all duration-500"
                    >
                        <Contact/>
                    </motion.div>
                </div>
            </section>

            {/* Footer decoration */}
            <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
        </div>
    )
};

export default HomeP;