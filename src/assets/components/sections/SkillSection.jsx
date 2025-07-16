import LayoutSection from "../layouts/layoutSection/LayoutSection"
import skillData from "../data/skillData";
import { useEffect, useRef, useState } from "react";

const SkillSection= ()=>{
    const [selected, setSelected] = useState(skillData.categories[0]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef= useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        }
        
        document.addEventListener("click", handleClickOutside);
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
    },[])

    return (
        <>
          <LayoutSection id="skill">
                {/* Title + Subtitle */}
                <div data-aos="fade-up" className="text-center px-4">
                  <h4 className="font-bold text-3xl lg:text-4xl uppercase text-slate-800 dark:text-white">
                    {skillData.title}
                  </h4>
                  <p data-aos="fade-up" className="text-slate-500 dark:text-slate-300 text-base mt-2">
                    {skillData.subtitle}
                  </p>
                </div>

                {/* Dropdown */}
                <div data-aos="fade-up" className="w-full flex justify-center mt-12 px-4">
                  <div className="relative" ref={dropdownRef}>
                    <button
                      className="h-12 w-48 rounded-md shadow-md border bg-white dark:bg-slate-800 text-slate-800 dark:text-white border-slate-300 dark:border-slate-600 flex items-center justify-between px-4 transition duration-300"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <div className="flex items-center gap-2">
                        <i className={selected.icon}></i>
                        <span>{selected.title}</span>
                      </div>
                      <i className={`text-2xl ${isOpen ? "bx bx-chevron-up" : "bx bx-chevron-down"}`}></i>
                    </button>

                    <div
                      className={`absolute mt-2 w-full bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md z-50 transition-all duration-300 shadow-md ${
                        isOpen
                          ? "opacity-100 max-h-96 pointer-events-auto"
                          : "opacity-0 max-h-0 pointer-events-none"
                      }`}
                    >
                      {skillData.categories.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelected(item);
                            setIsOpen(false);
                          }}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-600 cursor-pointer text-slate-800 dark:text-white"
                        >
                          <i className={item.icon}></i>
                          <span>{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skill Cards */}
                <div data-aos="fade-down" style={{ transform: "none" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 place-items-center px-4 z-0">
                  {selected.skills.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col justify-center items-center h-32 w-64 rounded-md shadow-md border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-white transition-all duration-300"
                    >
                      <i className={`text-5xl ${item.icon}`}></i>
                      <span className="mt-2 font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
</LayoutSection>

        </>
    )
};

export default SkillSection;