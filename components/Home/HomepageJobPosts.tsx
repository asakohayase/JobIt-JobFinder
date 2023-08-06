import React from "react";

import Button from "../Reusable/Button";
import JobCard from "./Cards/JobCard";
import { HomepageCardProps } from "@/types";

const HomepageJobPosts = ({ jobListings }: HomepageCardProps) => {
  return (
    <section className="flex flex-col gap-4">
      <article className="flex flex-col gap-4">
        <section>
          <div className="flex items-center">
            <div className="flex w-full justify-between">
              <h5 className="headline-5">Latest Job Posts</h5>
              <Button
                style="body-11 border border-natural-2 dark:border-darkBG-2 px-2 py-1 rounded-jobit text-natural-6"
                title={"See All"}
                href="/jobsearch"
              />
            </div>
          </div>
        </section>
        <article className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {jobListings.slice(0, 4).map((jobListing) => (
            <React.Fragment key={jobListing.job_id}>
              <JobCard data={jobListing} />
            </React.Fragment>
          ))}
        </article>
      </article>
    </section>
  );
};

export default HomepageJobPosts;
