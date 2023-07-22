import Image from "next/image";
import React from "react";
import Badge from "../../Reusable/Badge";
import Button from "../../Reusable/Button";

type Props = {
  data: {
    title: string;
    description: string;
    peopleApplied: number;
    postedDate: string;
    averagePay: string;
    technologies?: string[];
    logo: string;
    link: string;
    jobType: string;
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
    link,
    jobType,
  } = data;

  const getSincePostedDate = (date: string) => {
    const postedDate = new Date(date);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - postedDate.getTime();
    const daysSincePosted = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return daysSincePosted;
  };

  return (
    <div className="flex w-full max-w-[400px] flex-col gap-y-[30px] rounded-jobit bg-white p-5 shadow-1 dark:bg-darkBG-2">
      <div className="flex items-center gap-5">
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
        <div className="flex h-[60px] flex-1 flex-col justify-between lg:h-16">
          <div className="flex items-start justify-between">
            <h2 className="body-6 lg:body-2 text-black dark:text-white">
              {title}
            </h2>
            <Image
              src={"/img/icons/more.svg"}
              width={19}
              height={19}
              alt="icon"
            />
          </div>
          <div className="flex gap-[5px]">
            {technologies?.map((technology, i) => (
              <Badge key={i} style={"btn-tag"} title={technology} />
            ))}
          </div>
        </div>
      </div>
      <p className="lg:body-8 body-12 text-natural-7 dark:text-natural-6">
        {description}
      </p>
      <div className="flex justify-between">
        <Badge
          style={"btn-tag-icon"}
          title={jobType}
          icon={"/img/iconography/briefcase.svg"}
        />
        <Badge
          style={"btn-tag-icon"}
          title={`${peopleApplied} Applied`}
          icon={"/img/iconography/people.svg"}
        />
        <Badge
          style={"btn-tag-icon"}
          title={`${getSincePostedDate(postedDate)} days left`}
          icon={"/img/iconography/clock.svg"}
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="body-6 lg:body-2 text-black dark:text-white">
          ${averagePay}
          <span className="body-8 lg:body-3 text-natural-7"> /month</span>
        </span>
        <Button
          href={link}
          style={"btn-primary lg:py-[14px] px-[14px] py-2 lg:px-3"}
          title={"Apply Now"}
        />
      </div>
    </div>
  );
};

export default JobCard;
