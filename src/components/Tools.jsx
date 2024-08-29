import { RiReactjsLine, RiNodejsFill } from "react-icons/ri"
import { SiMongodb, SiAngular, SiFirebase, SiVisualstudiocode } from "react-icons/si"
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Tools = () => {
    return (
        <div className="pb-24">
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl">Tools & Technologies</motion.h1>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-3 border-neutral-900 bg-neutral-900 p-4">
                    <RiReactjsLine style={{ color: '#61DAFB' }} className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-3 border-neutral-900 bg-neutral-900 p-4">
                    <SiAngular style={{ color: '#DD0031' }} className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconVariants(6)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-3 border-neutral-900 bg-neutral-900 p-4">
                    <RiNodejsFill style={{ color: '#339933' }} className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-3 border-neutral-900 bg-neutral-900 p-4">
                    <SiFirebase style={{ color: '#FFCA28' }} className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconVariants(4.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-3 border-neutral-900 bg-neutral-900 p-4">
                    <SiMongodb style={{ color: '#47A248' }} className="text-7xl" />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.5)}
                    initial="initial"
                    animate="animate"
                    className="rounded-2xl border-3 border-neutral-900 bg-neutral-900 p-4">
                    <SiVisualstudiocode style={{ color: '#007ACC' }} className="text-7xl" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Tools