import Navbar from "./assets/components/Navbar/Navbar";
import AboutSection from "./assets/components/sections/AboutSection";
import ContacSection from "./assets/components/sections/ContactSection";
import FooterSection from "./assets/components/sections/FooterSection";
import HomeSection from "./assets/components/sections/Home";
import ProjectSection from "./assets/components/sections/ProjectSection";
import SkillSection from "./assets/components/sections/SkillSection";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  
    useEffect(() => {
    AOS.init({
      duration: 800, // durasi animasi dalam ms
      once: false,   
    });
  }, []);
    return (
    <>
    <div className="dark:bg-black transition-all duration-500 ">
      <Navbar />
     <HomeSection/>
     <AboutSection/>
     <SkillSection/>
     <ProjectSection/>
     <ContacSection/>
     <FooterSection/>
      
    </div>
     
    </>
  )
}

export default App;