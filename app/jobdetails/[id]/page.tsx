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
        <button className="flex items-center justify-around gap-2 rounded-jobit px-[10px] py-[7px] dark:bg-darkBG-3">
          <Image
            src={"/img/icons/cheveron.svg"}
            priority
            height={18}
            width={18}
            alt={"back arrow icon"}
          />
          <a className="pr-1">Back</a>
        </button>
        <article className="flex w-2/3 items-center justify-center dark:bg-darkBG-3">
          <div>
            <p>Large Job Details Component</p>
          </div>
        </article>
        <article className="flex flex-col">
          {[...Array(9)].map((i) => (
            <article key={i}>
              <h1>Inline Similar jobs Component</h1>
            </article>
          ))}
        </article>
      </section>
    </section>
  );
};

export default page;
