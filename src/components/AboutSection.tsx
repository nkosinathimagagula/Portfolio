import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { textVariant, fadeIn } from "../utils/framer-motion/motion";
import { interests } from "../constants/interests";
import { interest } from "../types";
import { SectionWrapper } from "../hoc/SectionWrapper";

const Card = (props: {index: number, interest: interest}) => {
    return(
        <Tilt>
            <motion.div
                variants={fadeIn("right", "spring", 0.5*props.index, 2.5)}
                className="mt-5 w-[250px] h-72 card-border rounded-[20px]"
            >
                
                    <div className="py-16">
                        <img src={props.interest.icon} alt={props.interest.name} className="w-20 h-20 mx-auto "/>
                        <h3 className="text-[20px] font-bold text-center">{props.interest.name}</h3>
                    </div>
                
            </motion.div>
        </Tilt>
    )
}


const AboutSection = () => {
    return (
        <>
            <motion.div
                variants={textVariant(0.1)}
                className="overflow-hidden"
            >
                <p className="tbp:text-[20px] text-[18px] text-black font-medium tracking-widest tbp:py-0 pt-16">WELCOME</p>
                <motion.h2 
                    variants={textVariant(0.3)} 
                    className="tbp:text-[60px] text-[40px] font-black mt-2"
                >
                    About Me.
                </motion.h2>
            </motion.div>

            <motion.p
                variants={fadeIn("left", "spring", 0.5, 2)}
                className="tbp:text-[20px] text-[18px] mt-3 leading-[30px] text-[#303030]"
            >
                I am a passionate individual with a little experience in 
                software development/engineering, working with React and 
                TypeScript. I am very interested in backend development 
                as I enjoy writing code that powers big applications. It 
                can either be with APIs or databases. I strive to deliver 
                high quality code that improves the performance or functionality 
                of big applications. Please take a moment to explore my portfolio 
                to see my work and how my expertise can contribute to your 
                team's success.
            </motion.p>

            <motion.div
                variants={fadeIn("right", "spring", 0.5, 2)}
                className=""
            >
                <p className="tbp:text-[20px] text-[18px] py-5 mt-2 text-black font-medium tracking-widest">INTERESTS</p>
            </motion.div>

            <div className="py-5 flex flex-wrap gap-10 justify-center overflow-hidden">
                {interests.map((interest, index) => (
                    <Card key={interest.name} index={index} interest={interest}/>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(AboutSection, "about_me")
