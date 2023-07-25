/* eslint-disable tailwindcss/no-custom-classname */
import PageTitle from "@components/Reusable/PageTitle";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Jobit - Job Details",
  description: "Job Finder Web Application",
};

const page = ({ params }: { params: { id: String } }) => {
  return (
    <section className="padding-layout flex flex-col gap-y-9  pb-[90px] pt-[46px]">
      <PageTitle />
      <section>
        <button className="flex items-center justify-around gap-2 rounded-jobit p-2 dark:bg-darkBG-3">
          <Image
            src={"/img/icons/cheveron.svg"}
            priority
            height={18}
            width={18}
            alt={"back arrow icon"}
          />
          <a className="pr-1">Back</a>
        </button>
        <article className="flex w-2/3 dark:bg-darkBG-3"></article>
      </section>
    </section>
  );
};

export default page;
