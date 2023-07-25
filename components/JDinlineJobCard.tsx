import { getSincePostedDate } from "@/utils/getSincePostedDate";
import Image from "next/image";
import React from "react";
import Button from "@/components/Reusable/Button";

type Props = {
  data: {
    title: string;
    city: string;
    averagePayPerHour: string;
    postedDate: string;
    link: string;
  };
};

const JDInlineJobCard = ({ data }: Props) => {
  const { title, city, averagePayPerHour, postedDate, link } = data;
  return (
    <div className="inline-flex flex-col items-start justify-center gap-[20px] rounded-jobit bg-white p-5 shadow-1 dark:bg-darkBG-3 dark:text-natural-6">
      <div className="flex items-start gap-[30px]">
        <div className="flex items-center gap-[15px]">
          <div className="relative">
            <Image
              src={"/img/company-logo/adobe-illustrator.svg"}
              priority
              alt="Logo"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="flex w-48 flex-col items-start gap-[6px] pr-0">
            <span className="text-lg font-bold not-italic leading-6 text-black">
              {title}
            </span>
            <span className="text-sm font-medium not-italic leading-5 text-natural-6">
              {city}
            </span>
          </div>
        </div>

        <span className="text-right text-sm font-semibold not-italic leading-6 text-gray-900">
          ${averagePayPerHour}
          <span className="text-natural-6">/ Hr</span>
        </span>
      </div>

      <div className="flex items-center gap-[150px]">
        <div className="text-sm font-medium not-italic leading-5 text-natural-6">
          {`${getSincePostedDate(postedDate)} days left`}
        </div>

        <div className="flex items-center gap-[11px]">
          <div className="flex items-center justify-center gap-[7px] rounded-md border border-natural-5 p-2">
            <Button
              href={link}
              style={"w-4 h-4"}
              icon={"/img/icons/archive.svg"}
            />
          </div>
          <div className="flex items-center justify-center gap-[10px] rounded-md bg-primary bg-opacity-10 px-[14px] py-[8px]">
            <Button
              href={link}
              style={
                "text-center text-sm not-italic font-medium leading-5 text-primary"
              }
              title={"View"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JDInlineJobCard;
