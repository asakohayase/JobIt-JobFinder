/* eslint-disable camelcase */
import { Metadata } from "next";
import Image from "next/image";

import React from "react";

import PageTitle from "@components/Reusable/PageTitle";

export const metadata: Metadata = {
  title: "Jobit - Job Details",
  description: "Job Finder Web Application",
};

const page = ({ params }: { params: { id: String } }) => {
  return (
    <main className="padding-layout flex flex-col gap-y-9 pb-[90px] pt-[46px]">
      <PageTitle />
      <section>
        <div className="hidden pb-6 md:flex">
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
        </div>
        <section className="flex flex-col gap-6 md:flex-row">
          <article className="flex h-[1549px] items-center justify-center rounded-jobit bg-white dark:bg-darkBG-3 md:w-2/3">
            <div>
              <p>Large Job Details Component</p>
            </div>
          </article>
          <article className="flex flex-col gap-4 md:w-1/3">
            {[...Array(9)].map((i) => (
              <article
                key={i}
                className="flex h-36 items-center justify-center rounded-jobit bg-white dark:bg-darkBG-3"
              >
                <h1>Inline Similar jobs Component</h1>
              </article>
            ))}
          </article>
        </section>
      </section>
    </main>
  );
};

export default page;
