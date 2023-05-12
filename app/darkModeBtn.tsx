"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const ThemeToggler = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {/* <button
        className="w-8 h-8 bg-blue-100 rounded-lg dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-blue-400 transition-all duration-300 focus:outline-none"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle Dark Mode"
      >
        {theme === "light" ? "" : ""}
      </button> */}
      {/* <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select> */}

      {currentTheme === "dark" ? (
        <BsFillMoonStarsFill
          className="h-5 w-5 cursor-pointer text-yellow-500"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      ) : (
        <BsFillSunFill
          className="button h-5 w-5 cursor-pointer text-yellow-500"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      )}
    </>
  );
};

export default ThemeToggler;
