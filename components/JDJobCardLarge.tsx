/* eslint-disable camelcase */
import { averagePayPerHour, getSincePostedDate } from "@/utils";
import Image from "next/image";
import React from "react";
import Button from "@/components/Reusable/Button";
import { JobDetails } from "@/types";

type Props = {
  data: JobDetails;
};

const JDJobCardLarge = ({
  data: {
    job_title,
    job_city,
    job_posted_at_datetime_utc,
    job_required_experience,
    job_job_title,
    job_employment_type,
    job_description,
    job_highlights,
    employer_name,
    job_apply_link,
    employer_company_type,
    job_min_salary,
    job_max_salary,
  },
}: Props) => {
  const averagePay = averagePayPerHour(job_min_salary, job_max_salary);

  return (
    <section className="flex h-[1549px] w-[327px] shrink-0 flex-col md:w-[860px]">
      <div className="relative">
        <div className="h-48 w-full md:w-[820px]">
          <Image
            src={"/img/widgets/header.png"}
            alt="header"
            fill
            priority
            className="rounded-t-[20px]"
          />
        </div>
        <div className="absolute -bottom-5 left-[40px] flex items-center justify-center rounded-[10px] bg-natural-3 md:-bottom-10">
          <div className="relative m-[3px] h-10 w-10 shrink-0 md:h-16 md:w-16 ">
            <Image
              src={"/img/company-logo/ui-hut.svg"}
              alt="logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="ml-[20px] mt-[40px] flex flex-col items-center gap-[30px] md:ml-[37.5px] md:mt-[72px] md:flex-row md:gap-[150px]">
        <div className="inline-flex flex-col items-start gap-[6px]">
          <div className="flex items-center gap-[20px]">
<<<<<<< HEAD
            <span className="text-base font-semibold not-italic  leading-6 dark:text-white md:text-2xl md:font-bold md:leading-8">
              {title}
=======
            <span className="text-2xl font-bold not-italic leading-8 dark:text-white">
              {job_title}
>>>>>>> main
            </span>
            <Button
              href={"google.com"}
              style={"h-5 w-5"}
              icon={"/img/iconography/saved.png"}
            />
          </div>
          <div className="flex items-center gap-[5px]">
<<<<<<< HEAD
            <span className="text-xs font-medium not-italic leading-4 text-natural-7 md:text-base md:leading-6">
              {company}
            </span>
            <span className="h-[3px] w-[3px] rounded-full dark:bg-natural-7 md:bg-[#d8d8d8]" />
            <span className="text-xs font-medium not-italic leading-4 text-natural-7 md:text-base md:leading-6">
              {city}
            </span>
            <span className="h-[3px] w-[3px] rounded-full dark:bg-natural-7 md:bg-[#d8d8d8]" />
            <span className="text-xs font-medium not-italic leading-4 text-natural-7 md:text-base md:leading-6">
              {getSincePostedDate(postedDate)}
=======
            <span className="text-base font-medium not-italic leading-6 text-natural-7">
              {employer_name}
            </span>
            <span className="h-[3px] w-[3px] rounded-full dark:bg-natural-7 md:bg-[#d8d8d8]" />
            <span className="text-base font-medium not-italic leading-6 text-natural-7">
              {job_city}
            </span>
            <span className="h-[3px] w-[3px] rounded-full dark:bg-natural-7 md:bg-[#d8d8d8]" />
            <span className="text-base font-medium not-italic leading-6 text-natural-7">
              {getSincePostedDate(job_posted_at_datetime_utc)} days ago
>>>>>>> main
            </span>
          </div>
        </div>

        <div className="flex items-start gap-[15px] md:justify-end">
          <Button
            href={job_apply_link}
            style={"btn-primary px-[22px] py-[10px]"}
            title={"Apply Now"}
          />
          <Button
<<<<<<< HEAD
            href={link}
            style={"px-[14px] py-2 md:py-3 btn-outline"}
=======
            href={job_apply_link}
            style={"px-[14px] py-2 lg:py-3 btn-outline"}
>>>>>>> main
            title={"Share"}
          />

          <Button
            href={job_apply_link}
            style={"btn-tag-icon"}
            icon={"/img/icons/more.svg"}
          />
        </div>
      </div>

      <div className="ml-4 mr-[5px] mt-8 inline-flex flex-wrap items-center justify-center gap-[10px] rounded-[10px] bg-natural-3 dark:bg-darkBG-3 md:ml-10 md:gap-[40px] md:rounded-[20px]">
        <div className="flex flex-col items-start gap-[10px] px-[24px] py-[16px] md:justify-center">
          <span className="text-xs not-italic leading-4 text-natural-6 md:text-sm md:font-semibold md:leading-6">
            Experience
          </span>
<<<<<<< HEAD
          <span className="text-sm font-semibold not-italic leading-6 text-natural-8 dark:text-white md:text-base">
            {experience}
=======
          <span className="text-base font-semibold not-italic leading-6 text-natural-8 dark:text-white">
            {job_required_experience?.required_experience_in_months ?? "N/A"}
>>>>>>> main
          </span>
        </div>

        <div className="flex flex-col items-start gap-[10px] px-[24px] py-[16px]">
          <span className="text-xs not-italic leading-4 text-natural-6 md:text-sm md:font-semibold md:leading-6">
            Work Level
          </span>
<<<<<<< HEAD
          <span className="text-sm font-semibold not-italic leading-6 text-natural-8 dark:text-white md:text-base">
            {workLevel}
=======
          <span className="text-base font-semibold not-italic leading-6 text-natural-8 dark:text-white">
            {job_job_title ?? "N/A"}
>>>>>>> main
          </span>
        </div>

        <div className="flex flex-col items-start gap-[10px] px-[24px] py-[16px]">
          <span className="text-xs not-italic leading-4 text-natural-6 md:text-sm md:font-semibold md:leading-6">
            Employee Type
          </span>
<<<<<<< HEAD
          <span className="text-sm font-semibold not-italic leading-6 text-natural-8 dark:text-white md:text-base">
            {jobType}
=======
          <span className="text-base font-semibold not-italic leading-6 text-natural-8 dark:text-white">
            {job_employment_type}
>>>>>>> main
          </span>
        </div>

        <div className="flex flex-col items-start gap-[10px] px-[24px] py-[16px] md:justify-center">
          <span className="text-xs not-italic leading-4 text-natural-6 md:text-sm md:font-semibold md:leading-6">
            Offer Salary
          </span>
          <span className="text-sm font-semibold not-italic leading-6 text-natural-8 dark:text-white md:text-base">
            {averagePay}
          </span>
        </div>
      </div>

      <div className="ml-[20px] mt-8 flex w-[280px]  flex-col items-start gap-[12px] md:ml-10 md:w-[778px]">
        <h2 className="text-base font-bold not-italic leading-6 text-black dark:text-white md:text-lg">
          About The Job
        </h2>

<<<<<<< HEAD
        <p className="line-clamp-[12] text-sm font-normal not-italic leading-5 text-natural-7 md:line-clamp-6 md:text-base md:leading-6">
          {description}
=======
        <p className="text-base font-normal not-italic leading-6 text-natural-7">
          {job_description}
>>>>>>> main
        </p>
      </div>

      <div className="ml-[20px] mt-8 flex w-[280px] flex-col items-start gap-[12px] md:ml-10 md:w-[778px]">
        <h2 className="text-base font-bold not-italic leading-6 text-black dark:text-white md:text-lg">
          Responsibilities
        </h2>

        <div className="line-clamp-3 text-sm font-normal not-italic leading-5 text-natural-7 md:line-clamp-2 md:text-base md:leading-6">
          <ul className="list-none">
<<<<<<< HEAD
            {responsibilities.map((responsibility, i) => (
              <li key={i} className="flex gap-2 md:items-center">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full border-2 border-primary md:mt-0 md:h-2.5 md:w-2.5" />
=======
            {job_highlights?.Responsibilities.map((responsibility, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full border-2 border-primary" />
>>>>>>> main
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ml-[20px] mt-8 flex w-[280px] flex-col items-start gap-[12px] md:ml-10 md:w-[778px]">
        <h2 className="text-base font-bold not-italic leading-6 text-black dark:text-white md:text-lg">
          Qualifications and Skill Sets
        </h2>

        <span className="line-clamp-3 text-sm font-normal not-italic leading-5 text-natural-7 md:line-clamp-2  md:text-base md:leading-6">
          <ul className="list-none">
<<<<<<< HEAD
            {qualifications.map((qualification, i) => (
              <li key={i} className="flex gap-2 md:items-center">
                <div className="mt-2 h-2 w-2 shrink-0 rounded-full border-2 border-primary md:mt-0 md:h-2.5 md:w-2.5" />
=======
            {job_highlights?.Qualifications.map((qualification, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full border-2 border-primary" />
>>>>>>> main
                {qualification}
              </li>
            ))}
          </ul>
        </span>
      </div>

      <span className="ml-[20px] mt-8 h-px w-[780px] bg-natural-2 md:ml-10" />
      <h2 className="ml-10 mt-8 font-bold not-italic leading-6 md:text-lg">
        About The Company
      </h2>

      <div className="ml-[20px] mt-5 inline-flex flex-col items-center gap-[14px] md:ml-10 md:flex-row md:gap-[487px]">
        <div className="flex items-start gap-[20px] md:items-center">
          <div className="relative h-12 w-12 shrink-0">
            <Image
              src={"/img/company-logo/ui-hut.svg"}
              alt="logo"
              fill
              priority
              className="object-contain"
            />
          </div>

<<<<<<< HEAD
          <div className="flex flex-col gap-[2px] self-start">
            <span className="text-base font-semibold not-italic leading-6 text-black dark:text-natural-2 md:text-lg md:font-bold">
              {company}
=======
          <div className="flex flex-col items-start gap-[2px]">
            <span className="text-lg font-bold not-italic leading-6 text-black dark:text-natural-2">
              {employer_name}
>>>>>>> main
            </span>
            <span className="text-sm font-medium not-italic leading-6 text-natural-7 md:text-base">
              {employer_company_type}
            </span>
          </div>
        </div>

        <Button
          href={job_apply_link}
          style={
            "flex justify-center items-center gap-[6px] px-2.5 py-[7px] round-[10px] border border-primary text-primary rounded-[10px]"
          }
          title={"Follow"}
          icon={"/img/iconography/plus.svg"}
        />
      </div>
    </section>
  );
};

export default JDJobCardLarge;
