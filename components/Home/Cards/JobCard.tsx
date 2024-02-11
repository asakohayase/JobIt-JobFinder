/* eslint-disable camelcase */
import Image from "next/image";
import React from "react";
import Link from "next/link";

import Badge from "@/components/Reusable/Badge";
import Button from "@/components/Reusable/Button";
import {
  getSincePostedDate,
  getEmployementType,
  averagePayPerHour,
} from "@/utils/index";
import { Job } from "@/types";
import { getLogo } from "@/utils/getLogo";

type Props = {
  data: Job;
};

const JobCard = ({
  data: {
    job_description,
    job_title,
    job_employment_type,
    job_apply_link,
    job_min_salary,
    job_max_salary,
    job_is_remote,
    job_required_skills,
    job_posted_at_datetime_utc,
    employer_name,
    job_id,
  },
}: Props) => {
  const logo = getLogo(employer_name ?? "");
  const averagePay =
    job_min_salary &&
    job_max_salary &&
    job_min_salary !== 0 &&
    job_max_salary !== 0
      ? averagePayPerHour(job_min_salary, job_max_salary)
      : 0;

  return (
    <article className="flex w-full flex-col gap-y-[30px] rounded-jobit bg-white p-5 shadow-1 dark:bg-darkBG-2">
      <header className="flex items-center gap-5">
        <div className="flex h-[46px] w-[46px] items-center justify-center  rounded-lg border-[3px] border-natural-3 bg-natural-2 dark:border-logoDark dark:bg-logoDark lg:h-[64px] lg:w-[64px]">
          <div className="relative h-[34.5px] w-[34.5px] lg:h-12 lg:w-12">
            <Image
              src={logo}
              alt="logo"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        <section className="flex h-[60px] flex-1 flex-col justify-between lg:h-16">
          <div className="flex items-start justify-between">
            <h2 className="body-6 lg:body-2 line-clamp-1 text-black dark:text-white lg:max-w-[250px]">
              {job_title}
            </h2>
            <Link href={"/#"} scroll={false} className="shrink-0">
              <Image
                src={"/img/icons/more.svg"}
                width={19}
                height={19}
                alt="icon"
              />
            </Link>
          </div>
          <div className="flex flex-wrap gap-[5px]">
            {job_required_skills
              ?.splice(0, 2)
              .map((technology) => (
                <Badge key={technology} style={"btn-tag"} title={technology} />
              ))}
          </div>
        </section>
      </header>
      <summary className="lg:body-8 body-12 line-clamp-6 text-natural-7 dark:text-natural-6">
        {job_description}
      </summary>
      <section className="flex space-x-3">
        <Badge
          style={"btn-tag-icon"}
          title={`${
            job_employment_type
              ? getEmployementType(job_employment_type.toLocaleLowerCase())
              : ""
          }`}
          icon={"/img/iconography/briefcase.svg"}
        />
        <Badge
          style={"btn-tag-icon"}
          title={job_is_remote ? "Remote" : "In-Office"}
          icon={"/img/iconography/people.svg"}
        />
        <Badge
          style={"btn-tag-icon"}
          title={`${
            job_posted_at_datetime_utc
              ? getSincePostedDate(job_posted_at_datetime_utc)
              : "N/A"
          }`}
          icon={"/img/iconography/clock.svg"}
        />
      </section>
      <section className="flex items-center justify-between">
        {averagePay !== 0 ? (
          <span className="body-6 lg:body-2 text-black dark:text-white">
            ${averagePay}
            <span className="body-8 lg:body-3 text-natural-7"> /month</span>
          </span>
        ) : (
          <span className="body-6 lg:body-2 text-black dark:text-white">
            $
            <span className="body-8 lg:body-3 text-natural-7">
              Not specified
            </span>
          </span>
        )}
        <Button
          href={`/jobdetails/${job_id}`}
          style={"btn-primary lg:py-[14px] px-[14px] py-2 lg:px-3"}
          title={"View Details"}
        />
      </section>
    </article>
  );
};

export default JobCard;
