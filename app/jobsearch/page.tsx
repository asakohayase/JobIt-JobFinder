"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Metadata } from "next";
import Image from "next/image";

import PageTitle from "@/components/Reusable/PageTitle";
import Search from "@/components/Search";
import { JobDetails } from "@/types";
import JDJobCardLarge from "@/components/JDJobCardLarge";
import JobCard from "@/components/Home/Cards/JobCard";
import Loader from "@/components/Loader";

export const metadata: Metadata = {
  title: "Jobit - Job Search",
  description: "Job Finder Web Application",
};

interface HomePageState {
  searchInput: string;
  selectedLocation: string;
  selectedJobType: string;
}

const Page = () => {
  const [state, setState] = useState<HomePageState>({
    searchInput: "",
    selectedLocation: "",
    selectedJobType: "",
  });

  const [jobs, setJobs] = useState<JobDetails[]>([]);

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, searchInput: event.target.value });
  };

  const handleLocationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, selectedLocation: event.target.value });
  };

  const handleJobTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setState({ ...state, selectedJobType: event.target.value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const { searchInput, selectedLocation, selectedJobType } = state;
    console.log("Search Input:", searchInput);
    console.log("Selected Location:", selectedLocation);
    console.log("Selected Job Type:", selectedJobType);

    const response = await fetch(
      `/api/searchjob/?input=${searchInput}&state=${selectedLocation}&jobtype=${selectedJobType}`
    );

    const result = await response.json();
    setJobs(result);
  };

  return (
    <section className="padding-layout">
      <PageTitle />
      <section>
        <Search
          input={state.searchInput}
          onInputChange={handleSearchInputChange}
          selectedLocation={state.selectedLocation}
          onLocationChange={handleLocationChange}
          selectedJobType={state.selectedJobType}
          onJobTypeChange={handleJobTypeChange}
          handleSubmit={handleSubmit}
        />
      </section>
      <section className="mt-6 flex">
        <section className="w-full">
          <div className=" flex items-center justify-between pb-5">
            <h2>
              <span className="font-semibold leading-6 text-natural-6">
                Showing:
              </span>
              <span className="text-lg font-bold text-black dark:text-white">
                {" "}
                10 Jobs
              </span>
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
          <div className="flex flex-col gap-y-5 sm:ml-0">
            {jobs.length > 0 ? (
              jobs.map((job) => {
                return <JobCard key={job.job_id} data={job} />;
              })
            ) : (
              <Loader />
            )}
          </div>
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
        </section>
      </section>
    </section>
  );
};

export default Page;
