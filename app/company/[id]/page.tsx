/* eslint-disable tailwindcss/no-custom-classname */
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Jobit - Company Details",
  description: "Job Finder Web Application",
};

type Props = {};

const page = (props: Props) => {
  return (
    <div className="padding-layout flex flex-col gap-y-9  pb-[90px] pt-[46px]">
      <div className="dark:bg-darkBG-3 dark:text-natural-6 body-19 bg-natural-2 text-natural-7 flex w-fit cursor-pointer space-x-[6px] rounded-[10px] px-[10px] py-[7px]">
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
          <div className="dark:bg-darkBG-2 flex h-full items-center justify-center rounded-xl bg-white">
            Large Company Details Component
          </div>
        </div>
        <div className="flex w-full flex-col gap-y-5 md:max-w-[400px]">
          <div className="text-[22px] font-bold leading-8">
            Similar Companies
          </div>
          <div className="flex flex-col gap-y-6">
            {[...Array(8)].map((i) => (
              <span
                key={i}
                className="shadow-1 dark:bg-darkBG-2 flex h-[90px] w-full items-center justify-center rounded-xl bg-white md:max-w-[400px]"
              >
                Inline Similar Companie Component
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
