import React from "react";
import { Metadata } from "next";
import Image from "next/image";

import PageTitle from "@components/Reusable/PageTitle";
import Button from "@components/Reusable/Button";

export const metadata: Metadata = {
  title: "Jobit - Job Description",
  description: "Job Finder Web Application",
};

const page = () => {
  return (
    <section className="padding-layout flex  shrink-0  flex-col gap-y-9 pt-[46px]">
      <PageTitle />
      <div className="flex w-full flex-col shadow-1 md:flex-row">
        <input
          className="flex h-20 w-full items-center justify-center  rounded-jobit rounded-b-none bg-white text-center dark:bg-darkBG-3 md:rounded-input md:rounded-r-none"
          placeholder="Search Input Component"
        />
        <hr />
        <input
          className="flex h-20 w-full items-center justify-center bg-white text-center dark:bg-darkBG-3"
          placeholder="Search Input Component"
        />
        <hr />
        <input
          className="flex h-20 w-full items-center justify-center rounded-input rounded-t-none bg-white text-center dark:bg-darkBG-3 md:rounded-input md:rounded-l-none"
          placeholder="Search Input Component"
        />
      </div>
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
          <div className="ml-0 flex items-center justify-between pb-5 md:ml-10">
            <h2>
              <span className="font-semibold leading-6 text-natural-6">
                Showing:
              </span>
              <span className="text-lg font-bold text-black dark:text-white">
                {" "}
                10 Jobs
              </span>
            </h2>
            <h2>
              <span className="font-semibold leading-6 text-natural-6">
                Sort by:
              </span>
              <span className="text-base font-bold text-black dark:text-white">
                {" "}
                Relevance
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
        </section>
      </section>
      <section className="border border-transparent border-t-natural-2 dark:border-t-darkBG-3">
        <div className="my-8 flex flex-row items-center justify-between">
          <div className="body-13 flex  cursor-pointer items-center justify-center  gap-2 rounded-lg bg-white px-3.5 py-2 shadow-1 dark:bg-darkBG-2 dark:text-white">
            <Image
              src={"/img/iconography/arrow-left.svg"}
              priority
              height={18}
              width={18}
              alt="icon"
            />
            <span>Previous</span>
          </div>
          <div className="body-13 flex  cursor-pointer items-center justify-center  gap-2 rounded-lg bg-white px-3.5 py-2 shadow-1 dark:bg-darkBG-2 dark:text-white">
            <span>Next</span>
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
  );
};

export default page;
