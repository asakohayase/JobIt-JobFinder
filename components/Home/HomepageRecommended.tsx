import React from "react";
import Button from "../Reusable/Button";
import InlineJobCard from "./Cards/InlineJobCard";
import { HomepageCardProps } from "@types";
import { getLogo } from "@utils/getLogo";

const HomepageRecommended = async ({ jobListings }: HomepageCardProps) => {
  // Need to create algo for recommended
  return (
    <div>
      <section className="flex w-[23rem] shrink-0 flex-col gap-4">
        <div className="flex items-center justify-between">
          <h5 className="headline-5">Recommended For You</h5>
          <Button
            style="body-11 border border-natural-2 dark:border-darkBG-2 px-2 py-1 rounded-jobit text-natural-6"
            title={"See All"}
            href=""
          />
        </div>
        <div className="flex flex-col items-center gap-2 rounded-jobit bg-white p-4 dark:bg-darkBG-2">
          {jobListings.slice(0, 5).map((jobListing) => (
            <React.Fragment key={jobListing.job_id}>
              <InlineJobCard
                data={{
                  title: jobListing.job_title,
                  city: jobListing.job_city,
                  company: jobListing.employer_name,
                  jobType: jobListing.job_employment_type,
                  averagePayPerHour: (
                    (jobListing.job_min_salary + jobListing.job_max_salary) /
                    52 /
                    40
                  ).toString(),
                  logo: getLogo(jobListing.employer_name),
                }}
              />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomepageRecommended;
