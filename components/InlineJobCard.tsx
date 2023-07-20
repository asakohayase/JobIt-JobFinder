import Image from "next/image";
import React from "react";

type Props = {
  jobTitle: string;
  city: string;
  companyName: string;
  jobType: string;
};

const InlineJobCard = ({ data }: Props) => {
  const { jobTitle, city, companyName, jobType, averagePayPerHour } = data;
  return (
    <div className="lg:body-16 body-21 flex w-full items-center justify-between rounded-[10px] bg-natural-3 px-3 py-[14px] dark:bg-darkBG-3 dark:text-natural-6 md:max-w-[360px]">
      <div className="flex items-center gap-[9px]">
        <div className="h-9 relative flex w-9 items-center justify-center">
          <Image
            src={"/img/company-logo/google.svg"}
            fill
            priority
            alt="Logo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="md:body-6 body-10 lg:body-15 text-black dark:text-white">
            {jobTitle}
          </span>
          <div className="flex items-center space-x-[5px] text-natural-7">
            <span>{companyName}</span>
            <span className="h-[3px] w-[3px] rounded-full dark:bg-natural-7 md:bg-[#d8d8d8]" />
            <span>{city}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-y-1">
        <span className="body-15 text-black dark:text-white">
          ${averagePayPerHour}
          <span className="text-natural-7">/ Hr</span>
        </span>
        <span className="text-natural-7">{jobType}</span>
      </div>
    </div>
  );
};

export default InlineJobCard;
