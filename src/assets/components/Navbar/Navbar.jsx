import { useEffect, useRef, useState } from "react";
import navbarData from "../data/navbarData"; // ✅ pastikan file ini ada & isinya toggle
import DarkModeToggle from "../bits/AnimasiDarkMode/DarkModeTransition";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [isScrolling, setIsScrolling] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      navbarData.listMenu.forEach((item) => {
        const section = document.querySelector(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(item.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Shadow on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Klik di luar tutup menu mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutsideMenu =
        menuRef.current && !menuRef.current.contains(event.target);
      const clickedOutsideToggle =
        toggleButtonRef.current && !toggleButtonRef.current.contains(event.target);
      if (clickedOutsideMenu && clickedOutsideToggle) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav
      className={`font-roboto fixed top-0 left-0 w-full z-[99999] transition-all duration-300 ${
        isScrolling ? "shadow-lg" : ""
      } bg-white dark:bg-slate-900 bg-opacity-90`}
    >
      <div className="flex justify-between items-center px-4 py-4 lg:justify-center">
        {/* Brand / Logo */}
        <div className="text-xl font-bold md:ml-4 text-slate-800 dark:text-white">
          <i className="bx bx-code-alt"></i> <span>{navbarData.title}</span>
        </div>

        {/* Mobile Toggle */}
        <div ref={toggleButtonRef} className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl dark:text-white">
            <i className={isOpen ? navbarData.buttons.close : navbarData.buttons.open}></i>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:ml-32 gap-6 text-lg">
          {navbarData.listMenu.map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 transition-colors duration-300 ${
                activeSection === item.id
                  ? "text-slate-500 dark:text-slate-300"
                  : "text-slate-800 dark:text-white hover:text-slate-900 dark:hover:text-slate-300"
              }`}
            >
              <a href={item.id}>
                <i className={item.icon}></i> {item.label}
              </a>
            </li>
          ))}
          <DarkModeToggle/>
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-2/4 max-w-xs bg-white dark:bg-slate-900 z-[99999] transform transition-transform duration-300 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4">
            <div className="flex gap-4 justify-between">
                <DarkModeToggle/>
                 <button
                    onClick={() => setIsOpen(false)}
                    className="text-4xl mt-2 self-end dark:text-white"
                >
                    <i className={navbarData.buttons.close}></i>
                </button>
                
            </div>
         
          {navbarData.listMenu.map((item, index) => (
            <li
              key={index}
              className={`w-full h-12 border shadow-md flex justify-center items-center rounded-lg transition-all duration-300 cursor-pointer ${
                activeSection === item.id
                  ? "bg-slate-900 text-white"
                  : "bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-900 hover:text-white"
              }`}
            >
              <a href={item.id}>
                <i className={item.icon}></i> {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
