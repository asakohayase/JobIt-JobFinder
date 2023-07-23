import React from "react";
import Button from "../Reusable/Button";
import JobCard from "./Cards/JobCard";
import { getLogo } from "@utils/getLogo";
import { HomepageCardProps } from "@types";

const HomepageJobPosts = async ({ jobListings }: HomepageCardProps) => {
  return (
    <section className="flex max-w-4xl flex-col gap-4">
      <div className="flex items-center justify-between md:pr-4">
        <h5 className="headline-5">Latest Job Posts</h5>
        <Button
          style="body-11 border border-natural-2 dark:border-darkBG-2 px-2 py-1 rounded-jobit text-natural-6"
          title={"See All"}
          href=""
        />
      </div>
      <div className="flex flex-wrap gap-4">
        {jobListings.slice(0, 4).map((jobListing) => (
          <React.Fragment key={jobListing.job_id}>
            <JobCard
              data={{
                title: jobListing.job_title,
                description: jobListing.job_description,
                peopleApplied: 10,
                postedDate: jobListing.job_posted_at_datetime_utc,
                averagePay:
                  (jobListing.job_min_salary + jobListing.job_max_salary) / 2,
                logo: getLogo(jobListing.employer_name),
                link: jobListing.job_apply_link,
                jobType: jobListing.job_employment_type,
                technologies: jobListing.job_required_skills,
              }}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default HomepageJobPosts;
