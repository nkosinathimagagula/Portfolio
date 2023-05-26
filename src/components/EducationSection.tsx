import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import { SectionWrapper } from "../hoc/SectionWrapper";
import { educationList } from "../constants/education";
import { education } from "../types";
import { fadeIn, textVariant } from "../utils/framer-motion/motion";


const Card = (props: {education: education}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#b0b7c0",
                color: "#000000"
            }}
            contentArrowStyle={{
                borderLeft: "7px solid #595e60"
            }}
            date={props.education.years}
            iconStyle={{
                background: "#ffffff",
            }}
            icon={
                <div className="flex justify-center w-full h-full items-center">
                    <img src={props.education.icon} alt={props.education.name} className="w-[70%] h-[70%] object-contain"/>
                </div>
            }
        >
            <div>
                <h3 className="text-black font-bold text-[20px]">{props.education.qualification}</h3>
                <p className="font-semibold text-[16px] text-[#505050]">{props.education.name}</p>
                <p></p>
                <span className=" text-[14px] text-[#505050]">{props.education.location}</span>
                <p className="font-semibold text-[16px]">Graduation Date: {props.education.graduation_year}</p>
            </div>
        </VerticalTimelineElement>
    )
}


const EducationSection = () => {
  return (
    <>
        <motion.div
            variants={textVariant(0.3)}
        >
            <h2 className="tbp:text-[60px] text-[40px] font-black pb-10  tbp:py-0 pt-16">Education.</h2>
        </motion.div>

        <motion.div
            variants={fadeIn("left", "spring", 0.5, 2)}
        >
            <div className="flex flex-wrap mt-10">
                <VerticalTimeline
                    lineColor="#b0b7c0"
                    layout="1-column-left"
                >
                    {educationList.map((education, index) => (
                        <Card key={index} education={education } />
                    ))}
                </VerticalTimeline>
            </div>
        </motion.div>
        
    </>
  )
}

export default SectionWrapper(EducationSection, "")
