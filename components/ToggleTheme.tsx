"use client";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const [isOn, setIsOn] = useState(theme === "dark");
  const toggleSwitch = () => {
    setIsOn((prevIsOn) => !prevIsOn);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex gap-2">
      <Image
        src="img/iconography/sun.svg"
        alt={"Moon Icon"}
        width={24}
        height={24}
      />
      <button
        className="flex w-11 rounded-xl bg-natural-2 p-[2px] transition duration-150 ease-in-out dark:bg-darkBG-3"
        data-isOn={isOn}
        onClick={toggleSwitch}
      >
        <motion.div
          className="relative h-[20px] w-[20px] rounded-full bg-primary dark:left-5"
          layout
          transition={spring}
        />
      </button>
      <Image
        src="img/iconography/moon.svg"
        alt={"Moon Icon"}
        width={24}
        height={24}
      />
    </div>
  );
};

export default ToggleTheme;
