import { useState } from "react";

import { dark, light } from "../assets/images";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

    theme === "light"
      ? (document.body.className = "dark")
      : (document.body.className = "light");
  };

  return (
    <header className="bg-body dark:bg-bodyD justify-between flex p-3 xs:px-5 sm:px-12 sm:py-3 md:mx-24 md:px-0 lg:max-w-[70vw] lg:mx-auto xl:max-w-[50vw]">
      <h1
        onClick={() => location.reload()}
        className="name font-normal cursor-pointer text-3xl -translate-y-[0.025em] translate-x-[0.04em] text-blue-900 dark:text-mainHeadingD"
      >
        Wetter
      </h1>
      <input
        type="checkbox"
        id="themeToggle"
        className="hidden w-0 h-0 peer"
        onClick={toggleTheme}
      />
      <label
        htmlFor="themeToggle"
        className="peer-checked:after:left-[34px] peer-checked:bg-[hsl(0,0%,70%)] peer-checked:after:bg-[linear-gradient(180deg,_hsl(0,0%,50%),_hsl(0,0%,38%))] peer-checked:invert relative flex align-center -[inset_0px_1px_3px_hsla(0,0%,0%,0.4),_inset_0px_-1px_3px_hsla(0,0%,100%,0.4)] w-16 h-8 rounded-2xl cursor-pointer transition-[0.4s] after:content-[''] after:w-7 after:h-7 after:absolute after:rounded-full after:transition-[0.4s] after:top-[2px] after:left-[2px] after:-[0px_1px_5px_hsla(0,0%,0%,0.2)] after:bg-[linear-gradient(180deg,_hsl(30,40%,98%),_hsl(0,0%,78%))]"
      >
        <img
          className="absolute z-50 w-6 top-[4px] left-1 transition-[0.4s]"
          src={light}
          alt="light mode"
        />
        <img
          className="absolute z-50 w-6 top-[4.5px] right-1 transition-[0.4s]"
          src={dark}
          alt="dark mode"
        />
      </label>
    </header>
  );
};

export default Header;
