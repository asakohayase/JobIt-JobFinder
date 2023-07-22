import { smallJobCardData } from "@data";
import React from "react";
import Button from "../Reusable/Button";
import JobCard from "./Cards/JobCard";

const HomepageJobPosts = () => {
  return (
    <section className="flex max-w-4xl flex-col gap-4">
      <div className="flex items-center justify-between md:pr-8">
        <h5 className="headline-5">Latest Job Posts</h5>
        <Button
          style="body-11 border border-natural-2 dark:border-darkBG-2 px-2 py-1 rounded-jobit text-natural-6"
          title={"See All"}
          href=""
        />
      </div>
      <div className="flex flex-wrap gap-4">
        <JobCard data={smallJobCardData} />
        <JobCard data={smallJobCardData} />
        <JobCard data={smallJobCardData} />
        <JobCard data={smallJobCardData} />
      </div>
    </section>
  );
};

export default HomepageJobPosts;
