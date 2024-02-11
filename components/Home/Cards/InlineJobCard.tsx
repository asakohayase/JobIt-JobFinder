import Image from "next/image";
import React from "react";

import { averagePayPerHour, getEmployementType } from "@/utils/index";
import { Job } from "@/types";
import { getLogo } from "@/utils/getLogo";
import Link from "next/link";

type Props = {
  data: Job;
};

const InlineJobCard = ({
  data: {
    job_title,
    job_min_salary,
    job_max_salary,
    employer_name,
    job_city,
    job_employment_type,
    job_id,
  },
}: Props) => {
  const logo = getLogo(employer_name ?? "");
  const averagePay =
    job_min_salary && job_max_salary
      ? averagePayPerHour(job_min_salary, job_max_salary)
      : "0";

  return (
    <Link
      href={`/jobdetails/${job_id}`}
      className="lg:body-16 body-21 flex w-full items-center justify-between rounded-[10px] bg-natural-3 px-3 py-[14px] hover:bg-natural-5 dark:bg-darkBG-3 dark:text-natural-6 hover:dark:bg-darkBG-1"
    >
      <div className="flex items-center gap-[9px]">
        <div className="relative flex h-9 w-9 shrink-0 items-center justify-center">
          <Image src={logo} fill priority alt="Logo" className="object-cover" />
        </div>
        <div className="flex max-w-[200px] flex-col gap-y-1 lg:max-w-full">
          <span className="lg:body-6 body-10 lg:body-15 line-clamp-1 text-black dark:text-white">
            {job_title}
          </span>
          <div className="flex items-center space-x-[5px] text-natural-7">
            <span className="truncate">{employer_name}</span>
            {job_city && (
              <span className="h-[3px] w-[3px] rounded-full bg-dot dark:bg-natural-7" />
            )}
            <span className="truncate">{job_city}</span>
          </div>
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end justify-between gap-y-1 place-self-start">
        {averagePay == null || averagePay === "0" ? (
          <span className="body-15 text-black dark:text-white">N/A</span>
        ) : (
          <span className="body-15 text-black dark:text-white">
            $ {averagePay}
            <span className="text-natural-7">/ Hr</span>
          </span>
        )}

        <span className="capitalize text-natural-7">
          {job_employment_type
            ? getEmployementType(job_employment_type.toLocaleLowerCase())
            : ""}
        </span>
      </div>
    </Link>
  );
};

export default InlineJobCard;
