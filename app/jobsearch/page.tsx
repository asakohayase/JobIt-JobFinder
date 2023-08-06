"use client";
import React, { Suspense, useState } from "react";
import Image from "next/image";

import PageTitle from "@/components/Reusable/PageTitle";
import Search from "@/components/Search";
import JobCardLarge from "@/components/Home/Cards/JobCardLarge"
import { JobDetails } from "@/types";
import Filter from "@/components/Filter";

const Page = () => {
  const [jobs, setJobs] = useState<JobDetails[]>([]);
  const FilterArray = [
    {
      title: "Job Requirements",
      list: {
        under_3_years_experience: "Under 3 years experience",
        more_than_3_years_experience: "+3 years of experience",
        no_experience: "No experience",
        no_degree: "No degree",
      },
    },
    {
      title: "Type Of Employment",
      list: {
        FULLTIME: "Full Time",
        PARTTIME: "Part Time",
        CONTRACTOR: "Contractor",
        INTERN: "Intership",
      },
    },
  ];

  return (
    <section className="padding-layout flex flex-col gap-8 py-10">
      <PageTitle />
      <section>
        <Search jobs={jobs} setJobs={setJobs} />
      </section>
      <section className="flex items-start">
        <aside className="grid gap-[30px] pt-1 lg:min-w-[250px]">
          {FilterArray.map((el) => {
            return (
              <Filter
                key={el.title}
                data={el}
                setJobs={setJobs}
                jobs={jobs}
              />
            );
          })}
        </aside>
        <section className="ml-0 w-full md:w-[956px] lg:ml-12">
          <div className=" flex items-center justify-between pb-5">
            <h2>
              <span className="font-semibold leading-6 text-natural-6">
                Showing:
              </span>
              {jobs.length > 0 ? (
                <span className="text-lg font-bold text-black dark:text-white">
                  10 Jobs
                </span>
              ) : (
                <span className="text-lg font-bold text-black dark:text-white">
                  0
                </span>
              )}
            </h2>
            <h2 className="flex gap-1">
              <span className="hidden font-semibold leading-6 text-natural-6 md:inline">
                Sort by:{" "}
              </span>
              <span className="flex flex-row gap-5 text-base font-bold text-black dark:text-white">
                {" "}
                Relevance
                <Image
                  src={"/img/icons/chevron-down.svg"}
                  priority
                  height={10}
                  width={10}
                  alt="icon"
                />
              </span>
            </h2>
          </div>


          <Suspense fallback={<p>Loading feed...</p>}>
            <section className="grid gap-[22px]">

              {jobs?.map((job) => <JobCardLarge key={job.job_id} job={job} />)}
            </section>
          </Suspense>
          {jobs.length > 0 && (
            <section className="mt-10 border border-transparent border-t-natural-2 dark:border-t-darkBG-3">
              <div className="mt-5 flex items-center justify-between md:my-8">
                <div className="body-13 flex cursor-pointer items-center  justify-center gap-2 rounded-lg bg-white px-3.5 py-2 shadow-1 dark:bg-darkBG-2 dark:text-white">
                  <Image
                    src={"/img/iconography/arrow-left.svg"}
                    priority
                    height={18}
                    width={18}
                    alt="icon"
                  />
                  <span className="hidden md:inline">Previous</span>
                </div>
                <div className="inline md:hidden">
                  <p className="font-medium text-natural-8 dark:text-natural-6">
                    Page <span className="font-semibold dark:text-white">1</span>{" "}
                    of 10
                  </p>
                </div>
                <div className="hidden w-[300px] items-center justify-around text-center font-semibold text-natural-7 dark:text-natural-6 md:flex">
                  <p className="w-10 rounded-lg bg-primary p-3  text-white">1</p>
                  <p className="hover:btn-page-number w-10 p-3">2</p>
                  <p className="hover:btn-page-number w-10 p-3">3</p>
                  <p>...</p>
                  <p className="hover:btn-page-number w-10 p-3">8</p>
                  <p className="hover:btn-page-number w-10 p-3">9</p>
                  <p className="hover:btn-page-number w-10 p-3">10</p>
                </div>
                <div className="body-13 flex cursor-pointer items-center  justify-center gap-2 rounded-lg bg-white px-3.5 py-2 shadow-1 dark:bg-darkBG-2 dark:text-white">
                  <span className="hidden md:inline">Next</span>
                  <Image
                    src={"/img/iconography/arrow-right.svg"}
                    priority
                    height={18}
                    width={18}
                    alt="icon"
                  />
                </div>
              </div>
            </section>
          )}
        </section>
      </section>
    </section>
  )
}

export default Page;