/* eslint-disable camelcase */
import Image from "next/image";
import React from "react";
import Badge from "./Badge";
import Button from "./Button";

type Props = {
  data: {
    jobTitle: string;
    city: string;
    averagePayPerHour: string;
    postedDate: string;
    link: string;
  };
};

const JD_inlineJobCard = ({ data }: Props) => {
  const { jobTitle, city, averagePayPerHour, postedDate, link } = data;
  const getSincePostedDate = (date: string) => {
    const postedDate = new Date(date);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - postedDate.getTime();
    const daysSincePosted = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return Number(daysSincePosted);
  };
  return (
    <div className="inline-flex flex-col items-start justify-center gap-[20px] rounded-jobit bg-white p-5 shadow-1 dark:bg-darkBG-3 dark:text-natural-6">
      <div className="flex items-start gap-[30px]">
        <Image
          src={"/img/company-logo/adobe-illustrator.svg"}
          fill
          priority
          alt="Logo"
          className="h-12 w-12"
        />
        <div className="flex w-48 flex-col items-start gap-[6px] pr-0">
          <span className="text-lg font-bold not-italic leading-6 text-black">
            {jobTitle}
          </span>

          <span className="text-sm font-medium not-italic leading-5 text-natural-6">
            {city}
          </span>
        </div>
        <div className="flex flex-col items-center justify-between gap-y-1">
          <span className="text-right text-sm font-semibold not-italic leading-6 text-gray-900">
            ${averagePayPerHour}
            <span className="text-natural-6">/ Hr</span>
          </span>
        </div>
      </div>

      <div>
        <Badge
          style={"btn-tag-icon"}
          title={`${getSincePostedDate(postedDate)} days left`}
          icon={"/img/iconography/clock.svg"}
        />
      </div>

      <div className="flex items-center gap-[150px]">
        <Button
          href={link}
          style={"btn-natural"}
          icon={"/img/icons/archive.svg"}
        />
        <Button
          href={link}
          style={"btn-primary lg:py-[14px] px-[14px] py-2 lg:px-3"}
          title={"Visit Now"}
        />
      </div>
    </div>
  );
};

export default JD_inlineJobCard;
