import { ABOUT_TEXT } from "../assets/Info";
import a12 from "../assets/Images/a12.jpg";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="pb-4">
            <h1 className="my-20 text-center text-4xl">About Me</h1>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full mb-4 lg:mb-0 lg:w-1/2 lg:pr-8 lg:pt-8 lg:pb-8">
                    <div className="flex items-center justify-center">
                        <img src={a12} alt="About" className="object-cover rounded-3xl" />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:pl-8 lg:pt-8 lg:pb-8">
                    <div className="flex justify-center lg:justify-start">
                        <p className="max-w-xl mt-4 lg:mt-0">{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;