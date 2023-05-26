import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { SectionWrapper } from "../hoc/SectionWrapper";
import { projects } from "../constants/projects";
import { project } from "../types";
import { fadeIn, textVariant } from "../utils/framer-motion/motion";
import { github } from "../assets";


const Card = (props: {index: number, project: project}) => {
    return (
        <motion.div
            variants={fadeIn("right", "spring", props.index*0.1, 1)}
        >
            <Tilt
                className="tbp:w-[350px] w-full rounded-2xl p-5 card-border"
            >
                <div className="relative w-full h-[200px]">
                    <img 
                        src={props.project.image} 
                        alt={props.project.name} 
                        className="w-full h-full object-cover rounded-2xl" 
                    />
                </div>

                <div className="mt-5">
                    <h3 className="text-black font-bold text-[20px]">{props.project.name}</h3>
                    <p className="mt-2 text-[#303030] text-[16px]">{props.project.description}</p>
                </div>

                <div className="mt-5">
                    <div
                        onClick={() => window.open(props.project.source_code_link, "_blank")}
                        className="cursor-pointer flex items-center gap-1"
                    >
                        <img src={github} alt="github" className="w-6 h-6 object-contain" />
                        <p className="text-black text-[9px]">{props.project.source_code_link}</p>
                    </div>
                </div>

                <div className="mt-2 flex flex-wrap gap-5">
                    {props.project.languages.map((language) => (
                        <p key={language.name} className={`text-[14px] text-${language.color}`}>
                            #{language.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}


const ProjectsSection = () => {
  return (
    <div className="tbp:-mb-20">
        <motion.div
            variants={textVariant(0.1)}
        >
            <p
                className="tbp:text-[20px] text-[18px] text-black font-medium tracking-widest tbp:py-0 pt-16"
            >
                What I have done so far
            </p>
            <motion.h2 
                variants={textVariant(0.3)} 
                className="tbp:text-[60px] text-[40px] font-black mt-2"
            >
                Projects.
            </motion.h2>
        </motion.div>

        <div className="w-full flex">
            <motion.p
                variants={fadeIn("left", "spring", 0.3, 2)}
                className="mt-5 text-[#303030] tbp:text-[20px] text-[18px] leading-[30px]"
            >
                This section showcase the diverse range of projects that I have worked on so far. These projects
                reflects my skills of problem-solving and working with different technologies.I have used a range 
                of technologies and frameworks to achieve outstanding results. Each project in this section has 
                a description, a link to the github repository and the technologies used. I hope that browsing 
                through these projects will not only demonstrate my technical skills but also my diligence, 
                creativity and ability to work on complex projects.
            </motion.p>
        </div>

        <div className="flex flex-wrap mt-10 gap-10">
            {projects.map((project, index) => (
                <Card key={project.name} index={index} project={project} />
            ))}
        </div>
    </div>
  )
}

export default SectionWrapper(ProjectsSection, "projects")