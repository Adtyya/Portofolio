import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Works from "./components/Works";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";

const App = () => {
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <Helmet>
        <meta name="desciption" content="Web Portofolio Aditya" />
      </Helmet>
      <button
        onClick={handleTheme}
        type="button"
        className="fixed z-[999] right-3 top-3 bg-indigo-500 text-lg p-1 rounded-md"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
      <div className="font-inter bg-slate-100 dark:bg-slate-900">
        <div className="container-cs">
          <HeroSection />
          <Works />
          <AboutMe />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
