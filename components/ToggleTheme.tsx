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
    setIsOn(!isOn);
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex gap-4">
      <Image
        src="img/iconography/sun.svg"
        alt={"Moon Icon"}
        width={20}
        height={20}
      />
      <button
        className="flex w-[49px] rounded-xl bg-natural2 p-[2px] transition duration-150 ease-in-out dark:bg-darkBG3"
        data-isOn={isOn}
        onClick={toggleSwitch}
      >
        <motion.div
          className="relative h-[20px] w-[20px] rounded-full bg-primary dark:left-6"
          layout
          transition={spring}
        />
      </button>
      <Image
        src="img/iconography/moon.svg"
        alt={"Moon Icon"}
        width={20}
        height={20}
      />
    </div>
  );
};

export default ToggleTheme;
