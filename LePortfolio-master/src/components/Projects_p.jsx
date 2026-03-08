import { motion } from 'framer-motion';
import CardBdd from './CompTech/Card_bdd';
import CardCata from './CompTech/Card_cata';
import CardReserv from './CompTech/Card_reserv';
import CardGeek from './CompTech/Card_geek';
import CardBh from './CompTech/Card_bh';
import CardGourm from './CompTech/Card_Gourm';
import VRtueuxPreview from './CompTech/PreviewVR';
import CardVr from './CompTech/Card_reserv';

// ─── Reusable primitives ──────────────────────────────────────────────────────

const SectionDivider = ({ label }) => (
    <div className="flex items-center gap-4 mb-8">
        <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
        <span className="text-2xl font-bold text-white tracking-tight">{label}</span>
    </div>
);

const CardSlot = ({ children }) => (
    <div className="flex-1 rounded-2xl p-8 min-h-[180px] flex items-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 w-full text-white/80 text-lg font-medium">
            {children}
        </div>
    </div>
);

const CardRow = ({ children }) => (
    <div className="flex flex-col gap-6">
        {children}
    </div>
);

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section = ({ title, date, children }) => (
    <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-[120rem] mx-auto">
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/6 to-transparent backdrop-blur-xl rounded-[2rem] shadow-xl/30 p-8 md:p-12 border-2 border-purple-500/20 hover:border-blue-500/30 transition-all duration-500"
            >
                {/* Section header */}
                <div className="flex flex-col lg:flex-row border-b border-white/10 pb-4 mb-8">
                    <div className="lg:w-2/3 lg:pl-6">
                        <h2 className="text-3xl font-bold text-teal-800 mb-1">{title}</h2>
                        {date && <p className="text-sm text-white/70">{date}</p>}
                    </div>
                </div>

                {children}
            </motion.div>
        </div>
    </section>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

export const PStages = () => {
    return (
        <div className="h-screen overflow-auto relative font-mono">

            {/* Ambient background blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            {/* ── VRtueux ──────────────────────────────────────────────────── */}
            <Section title="VRtueux" date="5 janvier – 13 février 2026">
                <CardRow>
                    <CardSlot>
                        <VRtueuxPreview />
                    </CardSlot>
                    <CardSlot>
                        <CardVr />
                    </CardSlot>
                </CardRow>
            </Section>

            {/* ── Elixir Création ──────────────────────────────────────────── */}
            <Section title="Elixir Création" date="5 janvier – 13 février 2026">
                <div className="mt-12">
                    <SectionDivider label="SWIPER" />
                    <CardRow>
                        <CardSlot>
                            <CardGeek />
                        </CardSlot>
                        <CardSlot>
                            <CardBh />
                        </CardSlot>
                    </CardRow>
                </div>
            </Section>

            {/* ── Projet Scolaire ──────────────────────────────────────────── */}
            <Section title="Projet Scolaire">
                <CardRow>
                    <CardSlot>
                        <CardGourm />
                    </CardSlot>
                    <CardSlot>
                        <CardBh />
                    </CardSlot>
                </CardRow>
            </Section>

            {/* ── Projets (Stages 1 & 2) ───────────────────────────────────── */}
            <section className="px-4 sm:px-6 pb-20">
                <div className="max-w-[120rem] mx-auto">
                    <motion.div
                        variants={sectionVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-[2rem] shadow-xl/30 p-8 md:p-12 border-2 border-purple-500/20 hover:border-blue-500/30 transition-all duration-500"
                    >
                        {/* Top-level heading */}
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                            <h2 className="text-4xl md:text-6xl text-white">Projets</h2>
                        </div>

                        {/* Stage 1 */}
                        <div className="mb-16">
                            <SectionDivider label="Stage 1" />
                            <CardRow>
                                <CardSlot><CardBdd /></CardSlot>
                                <CardSlot><CardCata /></CardSlot>
                                <CardSlot><CardReserv /></CardSlot>
                            </CardRow>
                        </div>

                        {/* Stage 2 */}
                        <div>
                            <SectionDivider label="Stage 2" />
                            <CardRow>
                                <CardSlot><CardGeek /></CardSlot>
                                <CardSlot><CardBh /></CardSlot>
                            </CardRow>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};