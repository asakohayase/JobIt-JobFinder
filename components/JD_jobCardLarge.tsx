/* eslint-disable camelcase */
import Image from "next/image";
import link from "next/link";
import React from "react";
import Button from "./Button";

type Props = {
  data: {
    title: string;
    city: string;
    postedDate: string;
    experience: string;
    workLevel: string;
    jobType: string;
    averagePay: number;
    description: string;
    responsibility: string[];
    qualification: string[];
    company: string;
    companyDescription: string;
    followers: number;
    link: string;
  };
};

const JD_jobCardLarge = ({ data }: Props) => {
  const {
    title,
    city,
    postedDate,
    experience,
    workLevel,
    jobType,
    averagePay,
    description,
    responsibility,
    qualification,
    company,
    companyDescription,
    followers,
    link,
  } = data;

  const getSincePostedDate = (date: string) => {
    const postedDate = new Date(date);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - postedDate.getTime();
    const daysSincePosted = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return Number(daysSincePosted);
  };

  return (
    <div className="h-[1549px]  w-[860px] shrink-0 bg-white dark:bg-darkBG-2">
      <div className="h-48 w-[860px] shrink-0">
        <Image
          src={"/img/widgets/header.png"}
          alt="header"
          fill
          priority
          className="object-contain"
        />
        <Image
          src={"/img/company-logo/adobe-illustrator.svg"}
          alt="logo"
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Jobtitle */}
      <div className="inline-flex flex-col items-start gap-[6px]">
        <div className="flex items-center gap-[20px]">
          <span className="">{title}</span>
          <span className="h-5 w-5">
            <Button
              href={link}
              style={"btn-natural"}
              icon={"/img/icons/archive.svg"}
            />
          </span>
        </div>
        {/* may have to adjust completely */}
        <div className="flex w-48 flex-col items-start gap-[6px] pr-0">
          <span className="text-base font-medium not-italic leading-6">
            {`${company}  ・${city}・${getSincePostedDate(
              postedDate
            )} days left`}
          </span>
        </div>
        <Button href={link} style={"btn-tag-icon"} title={"Apply Now"} />
        <Button href={link} style={"btn-tag-icon"} title={"Share"} />

        <Button
          href={link}
          style={"btn-tag-icon"}
          icon={"/img/icons/more.svg"}
        />
      </div>

      {/* Experience         */}
      <div className="inline-flex items-center justify-center gap-[40px]">
        <div className="flex flex-col items-start justify-center gap-[10px]">
          <span className="text-sm font-semibold not-italic leading-6">
            Experience
          </span>
          <span className="text-base font-semibold not-italic leading-6">
            {experience}
          </span>
        </div>

        <div className="flex flex-col items-start justify-center gap-[10px]">
          <span className="text-sm font-semibold not-italic leading-6">
            Work Level
          </span>
          <span className="text-base font-semibold not-italic leading-6">
            {workLevel}
          </span>
        </div>

        <div className="flex flex-col items-start justify-center gap-[10px]">
          <span className="text-sm font-semibold not-italic leading-6">
            Employee Type
          </span>
          <span className="text-base font-semibold not-italic leading-6">
            {jobType}
          </span>
        </div>

        <div className="flex flex-col items-start justify-center gap-[10px]">
          <span className="text-sm font-semibold not-italic leading-6">
            Offer Salary
          </span>
          <span className="text-base font-semibold not-italic leading-6">
            {averagePay}
          </span>
        </div>
        {/* border-radius: 20px;
      background: var(--natural-4, #FAFAFB);  padding: 16px 24px; */}
      </div>

      {/* About the job */}
      <div className="flex w-[778px] flex-col items-start gap-[12px]">
        <span className="text-lg font-bold not-italic leading-6 text-black dark:text-white">
          About The Job
        </span>

        <span className="text-base font-normal not-italic leading-6 text-natural-3">
          {description}
        </span>
      </div>

      {/* Responsibilities */}
      <div className="flex w-[778px] flex-col items-start gap-[12px]">
        <span className="text-lg font-bold not-italic leading-6 text-black dark:text-white">
          Responsibilities
        </span>

        <span className="text-base font-normal not-italic leading-6 text-natural-3">
          {responsibility}
        </span>
      </div>

      {/* Qualifications */}
      <div className="flex w-[778px] flex-col items-start gap-[12px]">
        <span className="text-lg font-bold not-italic leading-6 text-black dark:text-white">
          Qualifications and Skill Sets
        </span>

        <span className="text-base font-normal not-italic leading-6 text-natural-3">
          {qualification}
        </span>
      </div>

      <span className="h-px w-[780px] bg-natural-2" />

      <span className="text-lg font-bold not-italic">About The Company</span>

      <div className="inline-flex items-center gap-[487px]">
        <div className="h-12 w-12 shrink-0">
          <Image
            src={"/img/company-logo/adobe-illustrator.svg"}
            alt="logo"
            fill
            priority
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-start gap-[2px]">
          <span className="text-lg font-bold not-italic leading-6 text-black">
            {company}
          </span>
          <span className="text-base font-medium not-italic leading-6 text-natural-3">
            {followers}
          </span>
        </div>

        <Button
          href={link}
          style={"btn-primary lg:py-[14px] px-[14px] py-2 lg:px-3"}
          title={"Follow"}
        />
      </div>

      <span className="w-[753px]">{companyDescription}</span>
    </div>
  );
};

export default JD_jobCardLarge;
