import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

import { SectionWrapper } from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/framer-motion/motion";
import { experiences } from "../constants/experiences";
import { experience } from "../types";


const Card = (props: {experience: experience}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#b0b7c0",
                color: "#000000"
            }}
            contentArrowStyle={{
                borderLeft: "5px solid #595e60"
            }}
            date={props.experience.date}
            iconStyle={{
                background: "#ffffff",
            }}
            icon={
                <div className="flex justify-center w-full h-full items-center">
                    <img src={props.experience.icon} alt={props.experience.company_name} className="w-[70%] h-[70%] object-contain"/>
                </div>
            }
        >
            <div>
                <h3 className="text-black font-bold text-[20px]">{props.experience.title}</h3>
                <p className="font-semibold text-[16px] text-[#505050]">{props.experience.company_name}</p>
            </div>

            <ul className="mt-5 list-disc list-inside ml-5 space-y-2">
                {props.experience.points.map((point, index) => (
                    <li
                        key={index}
                        className="text-black text-[15px] pl-2 tracking-wide"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    )
}


const WorkExperience = () => {
    return (
        <>
            <motion.div 
                variants={textVariant(0.3)}
            >
                <h2 className="tbp:text-[60px] text-[40px] font-black pb-10  tbp:py-0 pt-16">Work Experience.</h2>
            </motion.div>

            <motion.div
                variants={fadeIn("left", "spring", 0.5, 2)}
                className="mt-10"
            >
                <div className="flex flex-wrap">
                    <VerticalTimeline
                        lineColor="#b0b7c0"
                        layout="1-column-left"
                    >
                        {experiences.map((experience, index) => (
                            <Card key={index} experience={experience} />
                        ))}
                    </VerticalTimeline>
                </div>
            </motion.div>
        </>
    )
}


export default SectionWrapper(WorkExperience, "experience")
