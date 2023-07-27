import React from "react";
import Button from "../Reusable/Button";
import InlineJobCard from "./Cards/InlineJobCard";
import { HomepageCardProps } from "@types";

const HomepageRecommended = async ({ jobListings }: HomepageCardProps) => {
  // Need to create algo for recommended
  return (
    <div className="flex">
      <section className="flex w-[23rem] flex-col gap-4">
        <div className="flex items-center justify-between">
          <h5 className="headline-5">Recommended For You</h5>
          <Button
            style="body-11 border border-natural-2 dark:border-darkBG-2 px-2 py-1 rounded-jobit text-natural-6"
            title={"See All"}
            href=""
          />
        </div>
        <div className="flex flex-col items-center gap-2 rounded-jobit bg-white p-4 dark:bg-darkBG-2">
          {jobListings.slice(5, 10).map((jobListing) => (
            <React.Fragment key={jobListing.job_id}>
              <InlineJobCard data={jobListing} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomepageRecommended;
