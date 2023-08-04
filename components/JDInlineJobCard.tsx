/* eslint-disable camelcase */
import Image from "next/image";
import React from "react";

import Button from "@/components/Reusable/Button";
import { Job } from "@/types";
import { averagePayPerHour, getSincePostedDate } from "@/utils";
import { getLogo } from "@/utils/getLogo";

type Props = {
  data: Job;
};

const JDInlineJobCard = ({ data }: Props) => {
  const {
    job_title,
    job_city,
    job_posted_at_datetime_utc,
    job_apply_link,
    job_min_salary,
    job_max_salary,
    employer_name,
  } = data;
  const logo = getLogo(employer_name);
  const averagePay = averagePayPerHour(job_min_salary, job_max_salary);

  return (
    <aside className="inline-flex flex-col items-start justify-center gap-[20px] rounded-jobit bg-white p-5 shadow-1 dark:bg-darkBG-3 dark:text-natural-6">
      <div className="flex w-full items-start justify-between">
        <div className="flex items-center gap-[15px]">
          <div className="relative">
            <Image
              src={logo}
              priority
              alt="Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="md:w-46 flex w-40 flex-col items-start gap-[6px] pr-0">
            <h1 className="line-clamp-1 text-base font-bold not-italic leading-6 text-black dark:text-white lg:font-medium">
              {job_title.length > 30 ? job_title.slice(0, 30) : job_title}
            </h1>
            <span className="text-sm font-normal not-italic leading-5 text-natural-6 lg:font-medium">
              {job_city}
            </span>
          </div>
        </div>

        <span className="text-right text-xs font-semibold not-italic leading-6 text-gray-900 dark:text-white lg:text-sm">
          ${averagePay}
          <span className="dark:text-natural-6">/ Hr</span>
        </span>
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="text-xs font-medium not-italic leading-5 text-natural-6 lg:text-sm">
          {`${getSincePostedDate(job_posted_at_datetime_utc)}`}
        </div>

        <div className="flex items-center justify-center gap-[10px] rounded-md bg-primary/10 px-[14px] py-[8px]">
          <Button
            href={job_apply_link}
            style={
              "text-center text-sm not-italic font-medium leading-5 text-primary"
            }
            title={"View"}
          />
        </div>
      </div>
    </aside>
  );
};

export default JDInlineJobCard;
