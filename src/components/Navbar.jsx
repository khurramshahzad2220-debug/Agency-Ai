import { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react"

export const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <motion.div 
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, ease:"easeInOut"}}
      className="sticky top-0 z-20 flex items-center justify-between px-4 py-4 font-medium sx:px-12 bg-white/50 backdrop-blur-lg lg:px-24 xl:px-40 dark:bg-gray-900/70">
        <img
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          className="w-32 sx:w-40"
          alt=""
        />
        <div
          className={`sx:text-md text-gray-800 dark:text-white ${!sidebarOpen ? "max-sx:w-0 overflow-hidden" : "max-sx:w-60 max-sx:pl-10"} max-sx:fixed max-sx:min-h-screen max-sx:flex-col max-sx:bg-primary max-sx:text-white max-sx:pt-20 top-0 right-0 bottom-0 flex gap-5 transition-all`}
        >
          <img
            src={assets.close_icon}
            alt=""
            className="absolute w-5 sx:hidden top-5 right-5"
            onClick={() => setSidebarOpen(false)}
          />

          <a
            onClick={() => setSidebarOpen(false)}
            href="#"
            className="sx:hover:border-b sx:hover:text-primary"
          >
            Home
          </a>
          <a
            onClick={() => setSidebarOpen(false)}
            href="#services"
            className="sx:hover:border-b sx:hover:text-primary"
          >
            Services
          </a>
          <a
            onClick={() => setSidebarOpen(false)}
            href="#our-work"
            className="sx:hover:border-b sx:hover:text-primary"
          >
            Our Work
          </a>
          <a
            onClick={() => setSidebarOpen(false)}
            href="#contact-us"
            className="sx:hover:border-b sx:hover:text-primary"
          >
            Contact Us
          </a>
        </div>

        <div className="flex items-center gap-2 sx:gap-4">
          <ThemeToggleBtn theme={theme} setTheme={setTheme} />
          <img
            src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
            alt=""
            onClick={() => setSidebarOpen(true)}
            className="w-8 sx:hidden"
          />

          <a
            href="#contact-us"
            className="flex items-center gap-2 px-6 py-2 text-sm text-white transition-all rounded-full shadow-sm cursor-pointer max-sx:hidden bg-primary hover:scale-103"
          >
            Connect
            <img src={assets.arrow_icon} width={14} alt="arrow-icon" />
          </a>
        </div>
      </motion.div>
    </>
  );
};
