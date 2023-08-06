/* eslint-disable camelcase */
import Image from "next/image";
import React from "react";
import Badge from "@/components/Reusable/Badge";
import Button from "@/components/Reusable/Button";
import { averagePayPerHour, getSincePostedDate } from "@/utils/index";
import { JobDetails } from "@/types";

type Props = {
  job: JobDetails;
};

const JobCard = ({
  job: {
    job_description,
    job_is_remote,
    job_city,
    job_id,
    job_apply_link,
    job_min_salary,
    job_max_salary,
    employer_name,
    employer_logo,
    job_posted_at_datetime_utc,
    job_required_skills,
    job_title,
  },
}: Props) => {
  const averagePay = averagePayPerHour(job_min_salary, job_max_salary);

  return (
    <div className="relative flex w-full max-w-[950px] shrink-0 flex-col gap-y-[30px] rounded-jobit bg-white p-5 dark:bg-darkBG-2">
      <div className="flex items-center gap-5">
        <div className="flex h-[46px] w-[46px] items-center justify-center  rounded-lg border-[3px] border-natural-3 bg-natural-2 dark:border-logoDark dark:bg-logoDark lg:h-[64px] lg:w-[64px]">
          <div className="relative h-[34.5px] w-[34.5px] lg:h-12 lg:w-12">
            <Image
              src={"/img/company-logo/adobe-illustrator.svg"}
              alt="logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex h-[60px] flex-1 flex-col space-y-[6px] lg:h-16">
          <div className="flex items-start justify-between">
            <h2 className="body-6 lg:body-2 text-black dark:text-white">
              {job_title}
            </h2>
          </div>
          <div className="md:btn-natural absolute right-5 top-5 flex cursor-pointer items-center md:gap-x-[6px] md:px-[10px] md:py-[7px]">
            <span className="hidden md:flex">Save Job</span>
            <div className="relative h-[19px] w-[19px] md:h-[16px] md:w-[16px] ">
              <Image
                src={"/img/icons/archive.svg"}
                alt="icon"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          <div className="body-15 flex flex-col gap-y-[3px] text-natural-7 md:flex-row md:items-center md:gap-x-[5px]">
            <span className="line-clamp-1">{employer_name}</span>
            <div className="flex items-center gap-[5px]">
              {job_city && (
                <span className="hidden h-[3px] w-[3px] rounded-full bg-natural-7 md:flex" />
              )}
              <span>{job_city}</span>
              <span className="h-[3px] w-[3px] rounded-full bg-natural-7" />
              <span>{getSincePostedDate(job_posted_at_datetime_utc)}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="lg:body-16 body-20 line-clamp-2 text-natural-7 dark:text-natural-6">
        {job_description}
      </p>
      <div className={"flex flex-wrap gap-[5px]"}>
        {job_required_skills
          ?.slice(0, 5)
          .map((technology, i) => (
            <Badge key={i} style={"btn-tag"} title={technology} />
          ))}
      </div>
      <div className="flex flex-col items-center justify-between space-y-[30px] md:flex-row md:space-y-0">
        <div className="flex w-full justify-between md:w-1/2 md:max-w-[342px]">
          {averagePay === 0 ? (
            <div className="body-6 lg:body-2 text-black dark:text-white">
              ${averagePay}
              <span className="body-8 lg:body-3 text-natural-7">/month</span>
            </div>
          ) : (
            <div className="body-6 lg:body-2 text-black dark:text-white">
              $
              <span className="body-8 lg:body-3 text-natural-7">
                Not specified
              </span>
            </div>
          )}

          <div className="body-6 lg:body-2 text-black dark:text-white">
            <span className="body-8 lg:body-3 text-natural-7">
              {`${job_is_remote === true ? "Remote" : "In-Office"} `}
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between md:w-1/2 md:justify-end md:gap-5">
          <Button
            href={`/jobdetails/${job_id}`}
            style={"btn-natural lg:py-[12px] px-[38px] py-[9px] lg:px-[30px]"}
            title={"View Details"}
          />
          <Button
            href={job_apply_link !== null ? `${job_apply_link}` : "#!"}
            style={"btn-primary lg:py-[12px] px-[38px] py-[9px] lg:px-[52.5px]"}
            title={"Apply Now"}
          />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
