/* eslint-disable tailwindcss/no-custom-classname */
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import CompanySimilar from "@components/CompanySimilar";
import { getAllJobs } from "@utils/getAllJobs";

export const metadata: Metadata = {
  title: "Jobit - Company Details",
  description: "Job Finder Web Application",
};

const page = async () => {
  const jobDetails = await getAllJobs();
  if (!jobDetails) return "no companies found";

  return (
    <div className="padding-layout flex flex-col gap-y-9  pb-[90px] pt-[46px]">
      <div className="body-19 flex w-fit cursor-pointer space-x-[6px] rounded-[10px] bg-natural-2 px-[10px] py-[7px] text-natural-7 dark:bg-darkBG-3 dark:text-natural-6">
        <Image
          src={"/img/icons/cheveron.svg"}
          priority
          height={18}
          width={18}
          alt="icon"
        />
        <span>Back</span>
      </div>
      <div className="flex flex-col gap-[14px] lg:flex-row lg:gap-x-10">
        <div className="flex w-full max-w-[816px] flex-col gap-y-5">
          <div className="flex h-full items-center justify-center rounded-xl bg-white dark:bg-darkBG-2">
            Large Company Details Component
          </div>
        </div>
        <div className="md:max-w-[400px]">
          <CompanySimilar jobDetails={jobDetails} />
        </div>
      </div>
    </div>
  );
};

export default page;
