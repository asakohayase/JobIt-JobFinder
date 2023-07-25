import React from "react";
import Button from "../Reusable/Button";
import JobCard from "./Cards/JobCard";
import { HomepageCardProps } from "@types";

const HomepageJobPosts = async ({ jobListings }: HomepageCardProps) => {
  return (
    <section className="flex max-w-4xl flex-col gap-4">
      <div className="flex items-center justify-between md:pr-16">
        <h5 className="headline-5">Latest Job Posts</h5>
        <Button
          style="body-11 border border-natural-2 dark:border-darkBG-2 px-2 py-1 rounded-jobit text-natural-6"
          title={"See All"}
          href=""
        />
      </div>
      <article className="flex flex-wrap gap-4">
        {jobListings.slice(0, 4).map((jobListing) => (
          <React.Fragment key={jobListing.job_id}>
            <JobCard data={jobListing} />
          </React.Fragment>
        ))}
      </article>
    </section>
  );
};

export default HomepageJobPosts;
