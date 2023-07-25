import { getSincePostedDate } from "@/utils/getSincePostedDate";
import Image from "next/image";
import React from "react";
import Button from "@/components/Reusable/Button";

type Props = {
  data: {
    title: string;
    city: string;
    postedDate: string;
    experience: string;
    workLevel: string;
    jobType: string;
    averagePay: string;
    description: string;
    responsibilities: string[];
    qualifications: string[];
    company: string;
    companyDescription: string;
    followers: string;
    link: string;
  };
};

const JDJobCardLarge = ({ data }: Props) => {
  const {
    title,
    city,
    postedDate,
    experience,
    workLevel,
    jobType,
    averagePay,
    description,
    responsibilities,
    qualifications,
    company,
    companyDescription,
    followers,
    link,
  } = data;

  return (
    <div className="flex h-[1549px] w-[860px] shrink-0 flex-col">
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
              {title}
            </span>
            <Button
              href={"google.com"}
              style={"h-5 w-5"}
              icon={"/img/iconography/saved.png"}
            />
          </div>
          <div className="flex items-center gap-[5px]">
            <span className="text-base font-medium not-italic leading-6 text-natural-7">
              {company}
            </span>
            <span className="h-[3px] w-[3px] rounded-full dark:bg-natural-7 md:bg-[#d8d8d8]" />
            <span className="text-base font-medium not-italic leading-6 text-natural-7">
              {city}
            </span>
            <span className="h-[3px] w-[3px] rounded-full dark:bg-natural-7 md:bg-[#d8d8d8]" />
            <span className="text-base font-medium not-italic leading-6 text-natural-7">
              {getSincePostedDate(postedDate)} days ago
            </span>
          </div>
        </div>

        <div className="flex items-start justify-end gap-[15px]">
          <Button
            href={link}
            style={
              "btn-primary w-32 px-3.5 py-2.5 justify-center items-center gap-[10px]"
            }
            title={"Apply Now"}
          />
          <Button
            href={link}
            style={"px-[14px] py-2 lg:py-3 btn-outline"}
            title={"Share"}
          />

          <Button
            href={link}
            style={"btn-tag-icon"}
            icon={"/img/icons/more.svg"}
          />
        </div>
      </div>

      <div className="ml-10 mt-8 inline-flex items-center justify-center gap-[40px] rounded-[20px] bg-natural-3">
        <div className="flex flex-col items-start justify-center gap-[10px] px-[24px] py-[16px]">
          <span className="text-sm font-semibold not-italic leading-6 text-natural-6">
            Experience
          </span>
          <span className="text-base font-semibold not-italic leading-6 text-natural-8">
            {experience}
          </span>
        </div>

        <div className="flex flex-col items-start gap-[10px] px-[24px] py-[16px]">
          <span className="text-sm font-semibold not-italic leading-6 text-natural-6">
            Work Level
          </span>
          <span className="text-base font-semibold not-italic leading-6 text-natural-8">
            {workLevel}
          </span>
        </div>

        <div className="flex flex-col items-start gap-[10px] px-[24px] py-[16px]">
          <span className="text-sm font-semibold not-italic leading-6 text-natural-6">
            Employee Type
          </span>
          <span className="text-base font-semibold not-italic leading-6 text-natural-8">
            {jobType}
          </span>
        </div>

        <div className="flex flex-col items-start justify-center gap-[10px] px-[24px] py-[16px]">
          <span className="text-sm font-semibold not-italic leading-6 text-natural-6">
            Offer Salary
          </span>
          <span className="text-base font-semibold not-italic leading-6 text-natural-8">
            {averagePay}
          </span>
        </div>
      </div>

      <div className="ml-10 mt-8 flex w-[778px] flex-col items-start gap-[12px]">
        <span className="text-lg font-bold not-italic leading-6 text-black dark:text-white">
          About The Job
        </span>

        <span className="text-base font-normal not-italic leading-6 text-natural-7">
          {description}
        </span>
      </div>

      <div className="ml-10 mt-8 flex w-[778px] flex-col items-start gap-[12px]">
        <span className="text-lg font-bold not-italic leading-6 text-black dark:text-white">
          Responsibilities
        </span>

        <div className="text-base font-normal not-italic leading-6 text-natural-7">
          <ul className="list-none">
            {responsibilities.map((responsibility, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full border-2 border-primary" />
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="ml-10 mt-8 flex w-[778px] flex-col items-start gap-[12px]">
        <span className="text-lg font-bold not-italic leading-6 text-black dark:text-white">
          Qualifications and Skill Sets
        </span>

        <span className="text-base font-normal not-italic leading-6 text-natural-7">
          <ul className="list-none">
            {qualifications.map((qualification, i) => (
              <li key={i} className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full border-2 border-primary" />
                {qualification}
              </li>
            ))}
          </ul>
        </span>
      </div>

      <span className="ml-10 mt-8 h-px w-[780px] bg-natural-2" />
      <span className="ml-10 mt-8 text-lg font-bold not-italic">
        About The Company
      </span>

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
            <span className="text-lg font-bold not-italic leading-6 text-black">
              {company}
            </span>
            <span className="text-base font-medium not-italic leading-6 text-natural-7">
              {followers} Followers
            </span>
          </div>
        </div>

        <Button
          href={link}
          style={
            "flex justify-center items-center gap-[6px] px-2.5 py-[7px] round-[10px] border border-primary text-primary rounded-[10px]"
          }
          title={"Follow"}
          icon={"/img/iconography/plus.svg"}
        />
      </div>
      <span className="ml-10 mt-8 w-[753px] text-base font-normal not-italic leading-6 text-natural-7">
        {companyDescription}
      </span>
    </div>
  );
};

export default JDJobCardLarge;
