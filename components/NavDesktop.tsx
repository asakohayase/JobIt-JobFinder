"use client";

import { useState } from "react";
import Link from "next/link";
import ToggleTheme from "./Reusable/ToggleTheme";
import Image from "next/image";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="flex h-70 items-center border border-slate-50 border-b-natural-5 dark:border-darkBG-3">
      <ul className="sticky top-0 flex w-full flex-row items-center justify-around">
        <li>
          <Link href="/">
            <Image
              src={"/img/company-logo/jobit.svg"}
              alt={"Jobit Icon"}
              width={80}
              height={80}
              className="ml-5 hidden md:inline"
            />
            <Image
              src={"/img/iconography/hamburger-menu.svg"}
              alt={"Hamburger Menu"}
              width={30}
              height={30}
              className="mr-14 md:hidden"
              onClick={() => setNavbar(!navbar)}
            />
          </Link>
        </li>
        <div className="flex gap-3">
          <li className="hidden border-b-2 border-transparent px-4 py-6 text-natural-6 hover:border-primary hover:text-primary active:border-b-primary md:inline">
            <Link href="/">Overview</Link>
          </li>
          <li className="hidden border-b-2 border-transparent px-4 py-6 text-natural-6 hover:border-primary hover:text-primary active:border-b-primary md:inline">
            <Link href="/">Job Search</Link>
          </li>
          <li className=" hidden border-b-2 border-transparent px-4 py-6 text-natural-6 hover:border-primary hover:text-primary active:border-b-primary md:inline">
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
