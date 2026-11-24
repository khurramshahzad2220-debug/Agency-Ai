import { useEffect } from "react";
import assets from "../assets/assets";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  //! jab theme local storage mein add ha, to iski zarurat nahi ha...
  //! hum isko hata bhi sakty hain. koi problem nahi.
  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(theme || (prefersDarkMode ? "dark" : "light"));
  }, [theme, setTheme]);


  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);


  return (
    <>
      <button>
        {theme === "dark" ? (
          <img
            onClick={() => setTheme("light")}
            src={assets.sun_icon}
            className="size-8.5 p-1.5"
          />
        ) : (
          <img
            onClick={() => setTheme("dark")}
            src={assets.moon_icon}
            className="size-8.5 p-1.5 border border-gray-300 rounded-full"
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBtn;
