import React from "react";
import { Metadata } from "next";
import Image from "next/image";

import PageTitle from "@/components/Reusable/PageTitle";
import Search from "@/components/Search";

export const metadata: Metadata = {
  title: "Jobit - Job Description",
  description: "Job Finder Web Application",
};

const page = () => {
  return (
    <section className="padding-layout flex  shrink-0  flex-col gap-8 py-10">
      <PageTitle />
      <section>
        <Search />
      </section>
      <section className="flex">
        <aside className="hidden w-[256px] flex-col md:flex">
          <div className="flex flex-row items-center justify-between pb-2">
            <h2 className="text-lg font-semibold leading-6">
              Type of Employment
            </h2>
            <Image
              src={"/img/iconography/arrow-up.svg"}
              priority
              height={24}
              width={24}
              alt="icon"
            />
          </div>
          <div className="flex h-60 w-[250px] items-center justify-center bg-white dark:bg-darkBG-1">
            <p>Filter Component</p>
          </div>
          <div className="flex flex-row items-center justify-between pb-2 pt-8">
            <h2 className="  text-lg font-semibold leading-6">
              Experience Level
            </h2>
            <Image
              src={"/img/iconography/arrow-up.svg"}
              priority
              height={24}
              width={24}
              alt="icon"
            />
          </div>
          <div className="flex h-[284px] w-[250px] items-center justify-center bg-white dark:bg-darkBG-1">
            <p>Filter Component</p>
          </div>
          <div className="flex flex-row items-center justify-between  pb-2 pt-8">
            <h2 className="  text-lg font-semibold leading-6">Salary Range</h2>
            <Image
              src={"/img/iconography/arrow-up.svg"}
              priority
              height={24}
              width={24}
              alt="icon"
            />
          </div>
          <div className="flex h-[248px] w-[250px] items-center justify-center bg-white dark:bg-darkBG-1">
            <p>Filter Component</p>
          </div>
          <div>
            <div className="flex flex-row items-center justify-between  pt-8">
              <h2 className="  text-lg font-semibold leading-6">Location</h2>
              <Image
                src={"/img/icons/chevron-down.svg"}
                priority
                height={15}
                width={15}
                alt="icon"
              />
            </div>
            <div className="flex flex-row items-center justify-between pt-8">
              <h2 className="text-lg font-semibold leading-6">Language</h2>
              <Image
                src={"/img/icons/chevron-down.svg"}
                priority
                height={15}
                width={15}
                alt="icon"
              />
            </div>
            <div className="flex flex-row items-center justify-between pt-8">
              <h2 className="text-lg font-semibold leading-6">Facility</h2>
              <Image
                src={"/img/icons/chevron-down.svg"}
                priority
                height={15}
                width={15}
                alt="icon"
              />
            </div>
          </div>
        </aside>
        <section className="ml-0 w-full md:ml-12 md:w-[956px]">
          <div className=" flex items-center justify-between pb-5">
            <h2>
              <span className="font-semibold leading-6 text-natural-6">
                Showing:
              </span>
              <span className="text-lg font-bold text-black dark:text-white">
                {" "}
                10 Jobs
              </span>
            </h2>
            <h2 className="flex gap-1">
              <span className="hidden font-semibold leading-6 text-natural-6 md:inline">
                Sort by:{" "}
              </span>
              <span className="flex flex-row gap-5 text-base font-bold text-black dark:text-white">
                {" "}
                Relevance
                <Image
                  src={"/img/icons/chevron-down.svg"}
                  priority
                  height={10}
                  width={10}
                  alt="icon"
                />
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-y-5 sm:ml-0">
            {[...Array(5)].map((i) => (
              <span
                key={i}
                className="flex h-[284px] items-center justify-center rounded-jobit bg-white dark:bg-darkBG-2"
              >
                Job card Component
              </span>
            ))}
          </div>
          <section className="mt-10 border border-transparent border-t-natural-2 dark:border-t-darkBG-3">
            <div className="mt-5 flex items-center justify-between md:my-8">
              <div className="body-13 flex cursor-pointer items-center  justify-center gap-2 rounded-lg bg-white px-3.5 py-2 shadow-1 dark:bg-darkBG-2 dark:text-white">
                <Image
                  src={"/img/iconography/arrow-left.svg"}
                  priority
                  height={18}
                  width={18}
                  alt="icon"
                />
                <span className="hidden md:inline">Previous</span>
              </div>
              <div className="inline md:hidden">
                <p className="font-medium text-natural-8 dark:text-natural-6">
                  Page <span className="font-semibold dark:text-white">1</span>{" "}
                  of 10
                </p>
              </div>
              <div className="hidden w-[300px] items-center justify-around text-center font-semibold text-natural-7 dark:text-natural-6 md:flex">
                <p className="w-10 rounded-lg bg-primary p-3  text-white">1</p>
                <p className="hover:btn-page-number w-10 p-3">2</p>
                <p className="hover:btn-page-number w-10 p-3">3</p>
                <p>...</p>
                <p className="hover:btn-page-number w-10 p-3">8</p>
                <p className="hover:btn-page-number w-10 p-3">9</p>
                <p className="hover:btn-page-number w-10 p-3">10</p>
              </div>
              <div className="body-13 flex cursor-pointer items-center  justify-center gap-2 rounded-lg bg-white px-3.5 py-2 shadow-1 dark:bg-darkBG-2 dark:text-white">
                <span className="hidden md:inline">Next</span>
                <Image
                  src={"/img/iconography/arrow-right.svg"}
                  priority
                  height={18}
                  width={18}
                  alt="icon"
                />
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default page;

// w-10 hover:rounded-lg hover:bg-primary hover:p-3 hover:text-center hover:text-white
