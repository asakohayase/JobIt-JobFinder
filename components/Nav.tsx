import React from "react";
import Link from "next/link";
import Image from "next/image";
import ToggleTheme from "./ToggleTheme";

const Nav = () => {
  return (
    <nav className="flex h-16 items-center border border-slate-50 border-b-natural-5">
      <ul className="flex flex-row justify-around gap-5">
        <li className="py-6 text-primary">
          <Link href="/">JOBIT</Link>
        </li>
        <li className="border border-slate-50 py-6 text-natural-6 hover:border-b-primary hover:text-primary">
          <Link href="/">Overview</Link>
        </li>
        <li className=" border border-slate-50 py-6 text-natural-6 hover:border-b-primary hover:text-primary">
          <Link href="/">Job Search</Link>
        </li>
        <li className=" border border-slate-50 py-6 text-natural-6 hover:border-b-primary hover:text-primary">
          <Link href="/">Estimated Salaries</Link>
        </li>
      </ul>
      <ToggleTheme />
    </nav>
  );
};

export default Nav;
