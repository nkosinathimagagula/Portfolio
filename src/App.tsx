import { BrowserRouter } from "react-router-dom";
import Snowfall from "react-snowfall";

import { NavBar } from "./components/NavBar";
import { Landing } from "./components/Landing";
import AboutSection from "./components/AboutSection";
import WorkExperience from "./components/WorkExperience";
import ProjectsSection from "./components/ProjectsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import SkillSection from "./components/SkillSection";


const App = () => {

  return (
    <BrowserRouter>
        <NavBar />
        <Landing />

        <div className="bg-about-gradient bg-scroll bg-cover bg-center bg-no-repeat">
          <AboutSection />
        </div>

        <div className="bg-rect bg-cover bg-center bg-no-repeat">
          <WorkExperience />
        </div>

        <div className="bg-projects-gradient bg-scroll bg-cover bg-center bg-no-repeat">
          <ProjectsSection />
        </div>

        <div className="relative bg-[#f7f7f9] z-0">
          <SkillSection />
          <Snowfall 
            color="#c4c4c6" 
            speed={[0.05, 0.2]}
            changeFrequency={500}
            snowflakeCount={50}
            style={{zIndex: -1}} 
          />
        </div>

        <div className="bg-edge-rounds bg-cover bg-center bg-no-repeat">
          <EducationSection />
        </div>

        <div className="relative bg-[#f7f7f9] z-0">
          <ContactSection />
          <Snowfall 
            color="#c4c4c6" 
            speed={[0.05, 0.2]}
            changeFrequency={800}
            snowflakeCount={80}
            style={{zIndex: -1}} 
          />
        </div>
    </BrowserRouter>
  )
}

export default App
