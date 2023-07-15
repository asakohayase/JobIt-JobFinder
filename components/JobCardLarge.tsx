import Image from "next/image";
import React from "react";
import Badge from "./Badge";
import Button from "./Button";

type Props = {
  data: {
    title: string;
    description: string;
    peopleApplied: number;
    postedDate: string;
    averagePay: string;
    technologies?: string[];
    logo: string;
    company: string;
    city: string;
  };
};

const JobCard = ({ data }: Props) => {
  const {
    title,
    description,
    peopleApplied,
    postedDate,
    averagePay,
    technologies,
    logo,
    company,
    city,
  } = data;

  const getSincePostedDate = (date: string) => {
    const postedDate = new Date(date);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - postedDate.getTime();
    const daysSincePosted = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return Number(daysSincePosted);
  };

  return (
    <div className="dark:bg-darkBG-2 relative flex w-full max-w-[950px] flex-col gap-y-[30px] p-5">
      <div className="flex items-center gap-5">
        <div className="border-natural-3 bg-natural-2 flex h-[46px] w-[46px]  items-center justify-center rounded-lg border-[3px] dark:border-[#2C2C2C] dark:bg-[#2C2C2C] lg:h-[64px] lg:w-[64px]">
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
        <div className="flex h-[60px] flex-1 flex-col space-y-[6px] lg:h-16">
          <div className="flex items-start justify-between">
            <h2 className="body-6 lg:body-2 text-black dark:text-white">
              {title}
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
          <div className="body-15 text-natural-7 flex flex-col gap-y-[3px] md:flex-row md:items-center md:gap-x-[5px]">
            <span>{company}</span>
            <div className="flex items-center gap-[5px]">
              <span className="bg-natural-7 hidden h-[3px] w-[3px] rounded-full md:flex" />
              <span>{city}</span>
              <span className="bg-natural-7 h-[3px] w-[3px] rounded-full" />
              <span>{`${getSincePostedDate(postedDate)} days left`}</span>
            </div>
          </div>
        </div>
      </div>
      <p className="lg:body-16 body-20 text-natural-7 dark:text-natural-6">
        {description}
      </p>
      <div className="flex gap-[5px]">
        {technologies?.map((technology, i) => (
          <Badge key={i} style={"btn-tag"} title={technology} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-between space-y-[30px] md:flex-row md:space-y-0">
        <div className="flex w-full justify-between md:w-1/2 md:max-w-[342px]">
          <div className="body-6 lg:body-2 text-black dark:text-white">
            ${averagePay}
            <span className="body-8 lg:body-3 text-natural-7">/month</span>
          </div>
          <div className="body-6 lg:body-2 text-black dark:text-white">
            {peopleApplied}
            <span className="body-8 lg:body-3 text-natural-7">
              {" "}
              People Applied
            </span>
          </div>
        </div>
        <div className="flex w-full items-center justify-between md:w-1/2 md:justify-end md:gap-5">
          <Button
            href={"/"}
            style={"btn-natural lg:py-[12px] px-[38px] py-[9px] lg:px-[30px]"}
            title={"Message"}
          />
          <Button
            href={"/"}
            style={"btn-primary lg:py-[12px] px-[38px] py-[9px] lg:px-[52.5px]"}
            title={"Visit Now"}
          />
        </div>
      </div>
    </div>
  );
};

export default JobCard;
