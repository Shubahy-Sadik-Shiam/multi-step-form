"use client";

import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", storedTheme);
    setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-xs btn-accent btn-outline mb-2 mt-5">
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ToggleTheme;