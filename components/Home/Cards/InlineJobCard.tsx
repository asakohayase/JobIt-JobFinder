import Image from "next/image";
import React from "react";
import { getEmployementType } from "@/utils/index";

type Props = {
  data: {
    title: string;
    logo: string;
    city: string;
    averagePayPerHour: string;
    company: string;
    jobType: string;
  };
};

const InlineJobCard = ({
  data: { title, city, company, jobType, averagePayPerHour, logo },
}: Props) => {
  return (
    <div className="lg:body-16 body-21 bg-natural-3 dark:bg-darkBG-3 dark:text-natural-6 flex w-full items-center justify-between rounded-[10px] px-3 py-[14px] lg:max-w-[360px]">
      <div className="flex items-center gap-[9px]">
        <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
          <Image src={logo} fill priority alt="Logo" className="object-cover" />
        </div>
        <div className="flex flex-col gap-y-1">
          <span className="lg:body-6 body-10 lg:body-15 line-clamp-1 text-black dark:text-white">
            {title}
          </span>
          <div className="text-natural-7 flex items-center space-x-[5px]">
            <span>{company}</span>
            <span className="dark:bg-natural-7 bg-dot h-[3px] w-[3px] rounded-full" />
            <span>{city}</span>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end justify-between gap-y-1">
        {averagePayPerHour !== "0" ? (
          <span className="body-15 text-black dark:text-white">
            $ {averagePayPerHour}
            <span className="text-natural-7">/ Hr</span>
          </span>
        ) : (
          <span className="body-15 text-black dark:text-white">
            $ <span className="text-natural-7">N/A</span>
          </span>
        )}

        <span className="text-natural-7 capitalize">
          {getEmployementType(jobType.toLocaleLowerCase())?.toLocaleLowerCase()}
        </span>
      </div>
    </div>
  );
};

export default InlineJobCard;
