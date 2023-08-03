"use client";

import Link from "next/link";
import ToggleTheme from "./Reusable/ToggleTheme";
import Image from "next/image";

import { usePathname } from "next/navigation";

const Nav = () => {
  const currentRoute = usePathname();
  return (
    <nav className="sticky top-0 z-50 flex h-70 w-full items-center border border-transparent border-b-natural-5 bg-white  dark:border-b-darkBG-3 dark:bg-darkBG-1">
      <ul className="md:padding-layout flex w-full flex-row items-center justify-between">
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
        <div className="flex gap-x-9 ">
          <li className="border-b-2 border-transparent py-6 text-natural-6 hover:border-primary hover:text-primary active:border-b-primary">
            <Link
              href="/"
              className={
                currentRoute === "/"
                  ? "border-b-2 border-primary py-6"
                  : "border-transparent"
              }
            >
              Overview
            </Link>
          </li>
          <li className="border-b-2 border-transparent py-6 text-natural-6 hover:border-primary hover:text-primary active:border-b-primary">
            <Link
              href="/jobsearch"
              className={
                currentRoute === "/jobsearch"
                  ? "border-b-2 border-primary py-6"
                  : "border-transparent "
              }
            >
              Job Search
            </Link>
          </li>
          <li className="border-b-2 border-transparent py-6 text-natural-6 hover:border-primary hover:text-primary active:border-b-primary">
            <Link
              href="/estimatedsalaries"
              className={
                currentRoute === "/estimatedsalaries"
                  ? "border-b-2 border-primary py-6"
                  : "border-transparent "
              }
            >
              Estimated Salaries
            </Link>
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
