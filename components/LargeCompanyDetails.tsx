"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import Button from "./Reusable/Button";
import { Job } from "@/types";
import { getLogo } from "@utils/getLogo";
import JobCard from "./Home/Cards/JobCard";
import Loader from "./Loader";

type Props = {
  firstCompany: Job;
  companyId: string;
  jobDetails: Promise<Job[] | null>;
};

const LargeCompanyDetails = ({
  firstCompany,
  companyId,
  jobDetails,
}: Props) => {
  const logo = getLogo(firstCompany.employer_name);
  const [query, setQuery] = useState("");
  const [jobResults, setJobResults] = useState<Job[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    return {
      pathname: `/company/${companyId}`,
      query: { query },
    };
  };

  useEffect(() => {
    async function getJobs() {
      const jobDetail = await jobDetails;
      if (!jobDetail) return;
      setJobResults(jobDetail);
    }
    getJobs();
  }, [jobDetails]);

  return (
    <article className="flex flex-col md:gap-14">
      <section className="md:max-h-48">
        <div>
          <Image
            src={"/img/widgets/header.png"}
            alt="Space Filler"
            width={1280}
            height={192}
            className="h-40 rounded-t-2xl md:h-48"
          />
        </div>
        <div className="relative bottom-8 left-2 flex w-16 items-center justify-center rounded-jobit bg-natural-3 p-1 dark:bg-natural-8 md:left-6">
          <Image
            src={logo}
            alt={`${firstCompany.employer_name} logo`}
            width={64}
            height={64}
          />
        </div>
      </section>
      <section className="flex flex-col md:gap-8">
        <section>
          <hgroup className="ml-2 flex flex-col gap-2 md:ml-6">
            <h2 className="headline-2">{firstCompany.employer_name}</h2>
            <div className="flex items-center gap-2">
              <h3 className="body-6 text-natural-7">
                {firstCompany.employer_name}
              </h3>
              <span className="h-[3px] w-[3px] rounded-full bg-black dark:bg-natural-7" />
              <h3 className="body-6 text-natural-7">{firstCompany.job_city}</h3>
            </div>
          </hgroup>
        </section>
        <hr className="my-4 h-1 w-full border-t-natural-2 dark:border-t-darkBG-3 md:hidden" />
        <section className="w-full">
          <article className="flex flex-col gap-12 rounded-jobit bg-white p-6 dark:bg-darkBG-2 md:ml-6">
            <section>
              <div className="body-15 flex h-14 w-full items-center justify-around rounded-2xl border-none bg-natural-3 text-natural-6 dark:bg-darkBG-3 md:w-7/12">
                <Image
                  src="/img/iconography/search.svg"
                  alt="search button"
                  width={24}
                  height={24}
                  className="ml-3 md:ml-5"
                />
                <input
                  className="body-7 h-full w-2/3 bg-natural-3 p-3 focus:outline-none dark:bg-darkBG-3"
                  placeholder={"Search Job Title or Keyword"}
                  type="text"
                  onChange={handleInputChange}
                />
                <Button
                  title={"Search"}
                  style="bg-primary rounded-jobit h-8 w-20 md:h-10 md:w-[4.5rem] text-white flex items-center justify-center mr-3"
                  href={handleSearch()}
                />
              </div>
            </section>
            <article className="flex flex-col gap-6">
              <h4 className="body-1">Recently Posted Jobs</h4>
              <article className="flex flex-wrap gap-6">
                {jobResults.length ? (
                  jobResults.slice(0, 4).map((jobDetail: Job) => (
                    <div
                      key={jobDetail.job_id}
                      className="flex h-56 w-[360px] grow items-center justify-center rounded-lg shadow-lg dark:bg-darkBG-3 dark:shadow-none md:shadow-lg"
                    >
                      <JobCard data={jobDetail} />
                    </div>
                  ))
                ) : (
                  <Loader />
                )}
              </article>
            </article>
            <div className="flex items-center justify-center">
              <Button
                title="See All Jobs"
                style="px-3 py-2 dark:bg-darkBG-3 body-15 text-natural-6 rounded-jobit"
                href=""
              />
            </div>
          </article>
        </section>
      </section>
    </article>
  );
};

export default LargeCompanyDetails;
