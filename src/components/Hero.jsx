import { motion } from 'framer-motion';

const Hero = () => (
    <section className="scroll-section bg-[#0d0d0d] text-white">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h1 className="text-5xl font-bold">Web-Uni</h1>
            <p className="text-xl mt-4">Web Developer | Frontend Specialist</p>
        </motion.div>
    </section>
);

export default Hero;