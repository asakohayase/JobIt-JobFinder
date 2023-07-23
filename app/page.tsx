/* eslint-disable camelcase */
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/ErrorFallback";
import Button from "@/components/Button";
import Input from "@/components/Input";
import JobCard from "@/components/JobCard";
import JobCardLarge from "@/components/JobCardLarge";
import InlineJobCard from "@/components/InlineJobCard";
import { Job } from "@/types";
import { getAllJobs } from "@/utils/index";
import JD_inlineJobCard from "@components/JD_inlineJobCard";
import JD_jobCardLarge from "@components/JD_JobCardLarge";
import { JD_inlineJobCardData, JD_jobCardLargeData } from "@data";

const Home = async () => {
  const allJobs = await getAllJobs();
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {/* EXAMPLE OF REUSABLE COMPONENTS AND DIFFERENT TYPOGRAPHIE CUSTOM CLASS */}

      <div className="padding-layout flex h-full flex-col gap-5 bg-white p-10 dark:bg-darkBG-1">
        {allJobs.map((jobListing: Job) => (
          <React.Fragment key={jobListing.job_id}>
            <InlineJobCard
              data={{
                title: jobListing.job_title,
                city: jobListing.job_city,
                averagePayPerHour:
                  (jobListing.job_min_salary + jobListing.job_max_salary) /
                  1440,
                company: jobListing.employer_name,
                jobType: jobListing.job_employment_type,
              }}
            />
            <JobCardLarge
              data={{
                title: jobListing.job_title,
                description: jobListing.job_description,
                isRemote: jobListing.job_is_remote,
                postedDate: jobListing.job_posted_at_datetime_utc,
                averagePay:
                  (jobListing.job_min_salary + jobListing.job_max_salary) / 2,
                technologies: jobListing.job_required_skills,
                company: jobListing.employer_name,
                city: jobListing.job_city,
              }}
            />
            <JobCard
              data={{
                title: jobListing.job_title,
                description: jobListing.job_description,
                isRemote: jobListing.job_is_remote,
                postedDate: jobListing.job_posted_at_datetime_utc,
                averagePay:
                  (jobListing.job_min_salary + jobListing.job_max_salary) / 2,
                technologies: jobListing.job_required_skills,
                link: jobListing.job_apply_link,
                jobType: jobListing.job_employment_type,
              }}
            />
          </React.Fragment>
        ))}

        <div className="flex flex-row gap-5">
          <Button
            title={"Submit"}
            href={"/"}
            style={"px-[14px] py-2 lg:py-3 btn-primary"}
          />
          <Button
            title={"Submit"}
            href={"/"}
            style={"px-[14px] py-2 lg:py-3 btn-natural"}
          />
          <Button
            title={"Submit"}
            href={"/"}
            style={"px-[14px] py-2 lg:py-3 btn-outline"}
          />
        </div>
        <div className="flex flex-row gap-5">
          <Button title={"Submit"} href={"/"} style={"btn-tag"} />
          <Button
            title={"Submit"}
            href={"/"}
            style={"btn-tag-icon"}
            icon={"/img/iconography/briefcase.svg"}
          />
        </div>
        <div className="max-w-xl">
          <Input placeholder={"Type here...."} type={"text"} />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="headline-1 text-black">
            This is the headline-1 custom class
          </h1>
          <h1 className="headline-2 text-black">
            This is the headline-2 custom class
          </h1>
          <h1 className="headline-3 text-black">
            This is the headline-3 custom class
          </h1>
          <h1 className="headline-4 text-black">
            This is the headline-4 custom class
          </h1>
          <h1 className="headline-5 text-black">
            This is the headline-5 custom class
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          <p className="body-1">This is the body-1 custom class</p>
          <p className="body-2">This is the body-2 custom class</p>
          <p className="body-3">This is the body-3 custom class</p>
          <p className="body-4">This is the body-4 custom class</p>
          <p className="body-5">This is the body-5 custom class</p>
          <p className="body-6">This is the body-6 custom class</p>
          <p className="body-7">This is the body-7 custom class</p>
          <p className="body-8">This is the body-8 custom class</p>
          <p className="body-9">This is the body-9 custom class</p>
          <p className="body-10">This is the body-10 custom class</p>
          <p className="body-11">This is the body-11 custom class</p>
          <p className="body-12">This is the body-12 custom class</p>
          <p className="body-13">This is the body-13 custom class</p>
          <p className="body-14">This is the body-14 custom class</p>
          <p className="body-15">This is the body-15 custom class</p>
          <p className="body-16">This is the body-16 custom class</p>
          <p className="body-17">This is the body-17 custom class</p>
          <p className="body-18">This is the body-18 custom class</p>
          <p className="body-19">This is the body-19 custom class</p>
          <p className="body-20">This is the body-20 custom class</p>
        </div>
        <JD_inlineJobCard data={JD_inlineJobCardData} />
        <JD_jobCardLarge data={JD_jobCardLargeData} />
      </div>
    </ErrorBoundary>
  );
};

export default Home;
