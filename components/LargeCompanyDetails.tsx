/* eslint-disable camelcase */
import React from "react";
import Image from "next/image";

import Button from "./Reusable/Button";
import { Job } from "@/types";
import { getLogo } from "@/utils/getLogo";

type Props = {
  job: Job;
  jobListings?: Job[];
};
/**
 * LargeCompanyDetails component displays detailed information about a company and its job listings.
 * @param {Props} props - The props object containing job and jobListings data.
 * @returns {JSX.Element} A JSX element representing the LargeCompanyDetails component.
 *
 * @example
 * <LargeCompanyDetails
 *   job={{
 *     job_title: "Software Dev",
 *     job_description: "Test Desc.",
 *     job_apply_link: "",
 *     job_city: "Los Angeles",
 *     job_employment_type: "FULLTIME",
 *     job_id: 1,
 *     job_is_remote: true,
 *     job_max_salary: 120000,
 *     job_min_salary: 100000,
 *     job_posted_at_datetime_utc: Date.now().toLocaleString(),
 *     job_required_skills: [],
 *     employer_logo: "",
 *     employer_name: "Google",
 *   }}
 * />
 *
 *
 * @example
 * const data = {
 *   job_title: "Software Engineer",
 *   job_description: "Join our software engineering team!",
 *   job_apply_link: "https://example.com/apply",
 *   job_city: "San Francisco",
 *   job_employment_type: "FULLTIME",
 *   job_id: 2,
 *   job_is_remote: false,
 *   job_max_salary: 150000,
 *   job_min_salary: 120000,
 *   job_posted_at_datetime_utc: "2023-07-27T12:00:00Z",
 *   job_required_skills: ["JavaScript", "React", "Node.js"],
 *   employer_logo: "https://example.com/logo.png",
 *   employer_name: "Facebook",
 * };
 *
 * const jobListings = [...]; // An array of additional job listings
 *
 * <LargeCompanyDetails
 *   job={data}
 *   jobListings={jobListings}
 * />
 */
const LargeCompanyDetails = ({ job, jobListings }: Props) => {
  const {
    job_description,
    job_title,
    job_employment_type,
    job_apply_link,
    job_min_salary,
    job_max_salary,
    job_is_remote,
    job_required_skills,
    job_posted_at_datetime_utc,
    job_city,
    employer_name,
  } = job;

  const logo = getLogo(employer_name);

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
            alt={`${employer_name} logo`}
            width={64}
            height={64}
          />
        </div>
      </section>
      <section className="flex flex-col md:gap-8">
        <section>
          <hgroup className="ml-2 flex flex-col gap-2 md:ml-6">
            <h2 className="headline-2">{employer_name}</h2>
            <div className="flex items-center gap-2">
              <h3 className="body-6 text-natural-7">{employer_name}</h3>
              <span className="h-[3px] w-[3px] rounded-full bg-black dark:bg-natural-7" />
              <h3 className="body-6 text-natural-7">{job_city}</h3>
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
                />
                <Button
                  title={"Search"}
                  style="bg-primary rounded-jobit h-8 w-20 md:h-10 md:w-[4.5rem] text-white flex items-center justify-center mr-3"
                  href=""
                />
              </div>
            </section>
            <article className="flex flex-col gap-6">
              <h4 className="body-1">Recently Posted Jobs</h4>
              <article className="flex flex-wrap gap-6">
                {[...Array(4)].map((element, index) => (
                  <div
                    key={index}
                    className="flex h-56 w-[360px] grow items-center justify-center rounded-lg shadow-lg dark:bg-darkBG-3 dark:shadow-none md:shadow-lg"
                  >
                    Job Card
                  </div>
                ))}
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
