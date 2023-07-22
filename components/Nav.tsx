"use client";

import React from "react";
import Link from "next/link";
import ToggleTheme from "@components/Reusable/ToggleTheme";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex h-70 items-center border border-slate-50 border-b-natural-5 bg-white dark:border-darkBG-3 dark:bg-darkBG-1">
      <ul className="padding-layout flex w-full flex-row items-center justify-between">
        <li>
          <Link href="/">
            <Image
              src={"/img/company-logo/jobit.svg"}
              alt={"Jobit Icon"}
              width={80}
              height={80}
            />
          </Link>
        </li>
        <div className="flex gap-3">
          <li className="border-b-2 border-transparent px-4 py-6 text-natural-6 hover:border-primary hover:text-primary">
            <Link href="/">Overview</Link>
          </li>
          <li className="border-b-2 border-transparent px-4 py-6 text-natural-6 hover:border-primary hover:text-primary">
            <Link href="/">Job Search</Link>
          </li>
          <li className=" border-b-2 border-transparent px-4 py-6 text-natural-6 hover:border-primary hover:text-primary">
            <Link href="/">Estimated Salaries</Link>
          </li>
        </div>
        <div className="flex items-center">
          <ToggleTheme />
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
