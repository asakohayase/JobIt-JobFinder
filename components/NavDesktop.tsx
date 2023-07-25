"use client";

import Link from "next/link";
import ToggleTheme from "./Reusable/ToggleTheme";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="padding-layout sticky top-0 z-50 flex h-70 items-center border border-transparent border-b-natural-5 dark:border-b-darkBG-3">
      <ul className="flex w-full flex-row items-center justify-around">
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
          <li className="border-b-2 border-transparent px-4 py-6 text-natural-6 hover:border-primary hover:text-primary active:border-b-primary">
            <Link href="/">Overview</Link>
          </li>
          <li className="border-b-2 border-transparent px-4 py-6 text-natural-6 hover:border-primary hover:text-primary active:border-b-primary">
            <Link href="/">Job Search</Link>
          </li>
          <li className="border-b-2 border-transparent px-4 py-6 text-natural-6 hover:border-primary hover:text-primary active:border-b-primary">
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
