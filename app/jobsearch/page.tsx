"use client";

import React, { useState, ChangeEvent, FormEvent, Suspense } from "react";
import { Metadata } from "next";

import PageTitle from "@/components/Reusable/PageTitle";
import Search from "@/components/Search";
import { JobDetails } from "@/types";
import JobCard from "@/components/Home/Cards/JobCard";
import Loader from "@/components/Loader";
import Pagination, { paginate } from "../api/search/Pagination";

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

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

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

    const response = await fetch(
      `/api/searchjob/?input=${searchInput}&state=${selectedLocation}&jobtype=${selectedJobType}`
    );

    const result = await response.json();
    setJobs(result);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(jobs, currentPage, pageSize);

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
                {paginatedPosts.length} Jobs
              </span>
            </h2>
          </div>
          <div className="flex flex-col gap-y-5 sm:ml-0">
            <Suspense fallback={<Loader />}>
              {jobs.length > 0 ? (
                paginatedPosts.map((job: JobDetails) => {
                  return <JobCard key={job.job_id} data={job} />;
                })
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <Loader />
                  <h3 className="headline-2">Start Searching for Jobs!</h3>
                </div>
              )}
            </Suspense>
          </div>
          <section className="m-10 border border-transparent border-t-natural-2 dark:border-t-darkBG-3">
            <Suspense fallback={<Loader />}>
              <Pagination
                jobs={jobs.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
              />
            </Suspense>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Page;
