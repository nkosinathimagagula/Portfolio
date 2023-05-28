import { motion } from "framer-motion";
import { Shake } from "reshake";
import { Tilt } from "react-tilt";

import { SectionWrapper } from "../hoc/SectionWrapper";
import { fadeIn } from "../utils/framer-motion/motion";
import { skills } from "../constants/skills";
import { skill } from "../types";

const Box = (props: {index: number, skill: skill}) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", 0.5*props.index, 2)}
            className="overflow-hidden"
        >
            <Shake className="p-5">
                <Tilt className="w-20 h-20 card-border flex rounded-2xl">
                    <div className="w-full h-full flex-col py-4 px-auto justify-center">
                        <img src={props.skill.icon} alt={props.skill.name} className="w-10 h-10 object-contain m-auto" />
                        {/* <p className="text-black text-[10px] font-extralightr">{props.skill.name}</p> */}

                    </div>
                </Tilt>
            </Shake>
        </motion.div>
    )
}

const Skill = () => {
    return (
        <div className="tbp:-mt-36 -mt-10 tbp:-mb-28">
            <motion.div
                variants={fadeIn("right", "spring", 0.2, 2)}
            >
                <p className="tbp:text-[20px] text-[18px] text-black font-medium tracking-widest mt-16">SKILLS</p>
            </motion.div>

            <div className="flex flex-wrap mt-10 gap-10 justify-center">
                {skills.map((skill, index) => (
                    <Box key={skill.name} index={index} skill={skill}/>
                ))}
            </div>
        </div>
    )
}
export default SectionWrapper(Skill, "")