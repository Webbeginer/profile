
import { useRef, useState, useEffect } from "react";
import { flushSync } from "react-dom";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleRef = useRef(null);

  const toggleDarkMode = async () => {
    if (!toggleRef.current || !document.startViewTransition) {
      setIsDarkMode(prev => !prev);
      return;
    }

    const rect = toggleRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    await document.startViewTransition(() => {
      flushSync(() => {
        setIsDarkMode(prev => !prev);
      });
    }).ready;

    const maxRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`
        ]
      },
      {
        duration: 600,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)"
      }
    );
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <button
      ref={toggleRef}
      onClick={toggleDarkMode}
      className="px-4 py-2 text-black dark:text-white"
    >
      {isDarkMode ? <i className="bx bx-sun"></i> : <i className="bx bx-moon"></i>}
    </button>
  );
}
