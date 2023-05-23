import { motion } from "framer-motion";

import { staggerContainer } from "../utils/framer-motion/motion";


export const SectionWrapper = (Component: () => JSX.Element, idName: string) => function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            className="relative z-0 tbp:p-40 p-5"
        >
            <span className="block tbp:mt-[-200px] mt-[-150px] pb-[100px]" id={idName}>
                &nbsp;
            </span>
            <Component />
        </motion.section>
    )
}