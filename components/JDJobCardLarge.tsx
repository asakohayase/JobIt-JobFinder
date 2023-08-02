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
    <section className="flex h-[1549px] w-[860px] shrink-0 flex-col">
      <div className="relative">
        <div className="h-48 w-[820px] shrink-0">
          <Image
            src={"/img/widgets/header.png"}
            alt="header"
            fill
            priority
            className="rounded-t-[20px]"
          />
        </div>
        <div className="item-center absolute -bottom-10 left-[40px] flex justify-center rounded-[10px] bg-natural-3">
          <div className="relative m-[3px] h-16 w-16 shrink-0 ">
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
      <div className="ml-[37.5px] mt-[72px] flex items-center gap-[150px]">
        <div className="inline-flex flex-col items-start gap-[6px]">
          <div className="flex items-center gap-[20px]">
            <span className="text-2xl font-bold not-italic leading-8 dark:text-white">
              {job_title}
            </span>
            <Button
              href={"google.com"}
              style={"h-5 w-5"}
              icon={"/img/iconography/saved.png"}
            />
          </div>
          <div className="flex items-center gap-[5px]">
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
            </span>
          </div>
        </div>

        <div className="flex items-start justify-end gap-[15px]">
          <Button
            href={job_apply_link}
            style={"btn-primary px-[22px] py-[10px]"}
            title={"Apply Now"}
          />
          <Button
            href={job_apply_link}
            style={"px-[14px] py-2 lg:py-3 btn-outline"}
            title={"Share"}
          />

          <Button
            href={job_apply_link}
            style={"btn-tag-icon"}
            icon={"/img/icons/more.svg"}
          />
        </div>
      </div>

      <div className="ml-10 mt-8 inline-flex items-center justify-center gap-[40px] rounded-[20px] bg-natural-3 dark:bg-darkBG-3">
        <div className="flex flex-col items-start justify-center gap-[10px] px-[24px] py-[16px]">
          <span className="text-sm font-semibold not-italic leading-6 text-natural-6">
            Experience
          </span>
          <span className="text-base font-semibold not-italic leading-6 text-natural-8 dark:text-white">
            {job_required_experience?.required_experience_in_months ?? "N/A"}
          </span>
        </div>

        <div className="flex flex-col items-start gap-[10px] px-[24px] py-[16px]">
          <span className="text-sm font-semibold not-italic leading-6 text-natural-6">
            Work Level
          </span>
          <span className="text-base font-semibold not-italic leading-6 text-natural-8 dark:text-white">
            {job_job_title ?? "N/A"}
          </span>
        </div>

        <div className="flex flex-col items-start gap-[10px] px-[24px] py-[16px]">
          <span className="text-sm font-semibold not-italic leading-6 text-natural-6">
            Employee Type
          </span>
          <span className="text-base font-semibold not-italic leading-6 text-natural-8 dark:text-white">
            {job_employment_type}
          </span>
        </div>

        <div className="flex flex-col items-start justify-center gap-[10px] px-[24px] py-[16px]">
          <span className="text-sm font-semibold not-italic leading-6 text-natural-6">
            Offer Salary
          </span>
          <span className="text-base font-semibold not-italic leading-6 text-natural-8 dark:text-white">
            {averagePay}
          </span>
        </div>
      </div>

      <div className="ml-10 mt-8 flex w-[778px] flex-col items-start gap-[12px]">
        <h2 className="text-lg font-bold not-italic leading-6 text-black dark:text-white">
          About The Job
        </h2>

        <p className="text-base font-normal not-italic leading-6 text-natural-7">
          {job_description}
        </p>
      </div>

      <div className="ml-10 mt-8 flex w-[778px] flex-col items-start gap-[12px]">
        <h2 className="text-lg font-bold not-italic leading-6 text-black dark:text-white">
          Responsibilities
        </h2>

        <div className="text-base font-normal not-italic leading-6 text-natural-7">
          <ul className="list-none">
            {job_highlights?.Responsibilities.map((responsibility, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full border-2 border-primary" />
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ml-10 mt-8 flex w-[778px] flex-col items-start gap-[12px]">
        <h2 className="text-lg font-bold not-italic leading-6 text-black dark:text-white">
          Qualifications and Skill Sets
        </h2>

        <span className="text-base font-normal not-italic leading-6 text-natural-7">
          <ul className="list-none">
            {job_highlights?.Qualifications.map((qualification, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full border-2 border-primary" />
                {qualification}
              </li>
            ))}
          </ul>
        </span>
      </div>

      <span className="ml-10 mt-8 h-px w-[780px] bg-natural-2" />
      <h2 className="ml-10 mt-8 text-lg font-bold not-italic">
        About The Company
      </h2>

      <div className="ml-10 mt-5 inline-flex items-center gap-[487px]">
        <div className="flex items-center gap-[20px]">
          <div className="relative h-12 w-12 shrink-0">
            <Image
              src={"/img/company-logo/ui-hut.svg"}
              alt="logo"
              fill
              priority
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-start gap-[2px]">
            <span className="text-lg font-bold not-italic leading-6 text-black dark:text-natural-2">
              {employer_name}
            </span>
            <span className="text-base font-medium not-italic leading-6 text-natural-7">
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
