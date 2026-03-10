import { motion } from 'framer-motion';
import CardGourm from './CompTech/Card_Gourm';
import CardMulti from './CompTech/Card_Multi';
import CardScrabb from './CompTech/Card_Scrabble';
import ElaborateCard from './CompTech/PreviewEla';

// ─── Reusable primitives ──────────────────────────────────────────────────────

const CardSlot = ({ children }) => (
    <div className="flex-1 rounded-2xl p-8 min-h-[180px] flex items-center relative overflow-hidden group
                    bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20
                    backdrop-blur-sm border border-purple-400/30">
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
                className="bg-gradient-to-br from-[#2B2B2B] to-[#1F1F1F] backdrop-blur-xl rounded-[2rem] shadow-xl/30 p-8 md:p-12 border-2 border-purple-500/20 hover:border-blue-500/30 transition-all duration-500"
            >
                {/* Section header */}
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                    <div className="text-xl md:text-3xl text-white">{title}</div>
                </div>
                {date && <p className="text-sm text-white/70 -mt-8 mb-8 pl-20">{date}</p>}

                {children}
            </motion.div>
        </div>
    </section>
);


export const PScolaire = () => {
    return (
        <div className="h-screen overflow-auto relative font-mono">

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            {/* ── Projet Scolaire ──────────────────────────────────────────── */}
            <Section title="Projet Scolaire">
                <CardRow>
                    <CardSlot>
                        <ElaborateCard/>
                    </CardSlot>
                    <CardSlot>
                        <CardGourm />
                    </CardSlot>
                    <CardSlot>
                        <CardMulti />
                    </CardSlot>
                    <CardSlot>
                        <CardScrabb />
                    </CardSlot>
                </CardRow>
            </Section>

            {/* Footer decoration */}
            <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
        </div>
    );
};