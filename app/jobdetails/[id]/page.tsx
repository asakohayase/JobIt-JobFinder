/* eslint-disable camelcase */
import { Metadata } from "next";
import Image from "next/image";

import React from "react";

import PageTitle from "@/components/Reusable/PageTitle";
import JDJobCardLarge from "@/components/JDJobCardLarge";
import InlineJobCard from "@/components/Home/Cards/InlineJobCard";
import { fetchJob } from "@/utils/fetchJob";
import { getAllJobs } from "@/utils/getAllJobs";

export const metadata: Metadata = {
  title: "Jobit - Job Details",
  description: "Job Finder Web Application",
};

const page = async ({ params }: { params: { id: String } }) => {
  try {
    const jobDetails = await fetchJob(params.id);
    if (!jobDetails || !jobDetails.data || jobDetails.data.length === 0) {
      return (
        <main className="padding-layout flex flex-col gap-y-9 pb-[90px] pt-[46px]">
          <PageTitle />
          <div>Job details not found!</div>
        </main>
      );
    }
    const allJobs = await getAllJobs();
    const [data] = jobDetails.data;

    return (
      <main className="padding-layout flex flex-col gap-y-9 pb-[90px] pt-[46px]">
        <PageTitle />
        <section>
          <div className="hidden pb-6 md:flex">
            <a href="/" className="w-full pr-1">
              <button className="flex items-center justify-around gap-2 rounded-jobit px-[10px] py-[7px] dark:bg-darkBG-3">
                <Image
                  src={"/img/icons/cheveron.svg"}
                  priority
                  height={18}
                  width={18}
                  alt={"back arrow icon"}
                />
                Back
              </button>
            </a>
          </div>
          <section className="flex flex-col gap-6 md:flex-row">
            <article className="flex rounded-jobit bg-white dark:bg-darkBG-3 md:w-2/3">
              <div>
                <JDJobCardLarge data={data} />
              </div>
            </article>
            <article className="flex flex-col gap-4 md:w-1/3">
              {allJobs?.map((item, index) => (
                <InlineJobCard key={item.job_id} data={item} />
              ))}
            </article>
          </section>
        </section>
      </main>
    );
  } catch (error) {
    console.error(
      "An error occurred while fetching job details:",
      error.message
    );
    return (
      <main className="padding-layout flex flex-col gap-y-9 pb-[90px] pt-[46px]">
        <PageTitle />
        <div>An error occurred while fetching job details.</div>
      </main>
    );
  }
};

export default page;
