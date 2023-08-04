"use client";

import React, { useEffect, useState } from "react";
import FeaturedCard from "./Cards/FeaturedCard";
import { JobDetails, jobResponse } from "@/types";
import { getLogo } from "@/utils/getLogo";

const HomepageFeatured = () => {
  const [featured, setFeatured] = useState<string[]>();
  const [data, setData] = useState<JobDetails[]>();
  useEffect(() => {
    async function getFeatured() {
      const query = await fetch("/api/featuredjobs");
      const result = await query.json();

      setFeatured(result);
    }
    getFeatured();
  }, []);

  useEffect(() => {
    async function getData() {
      const jobData: JobDetails[] = [];
      if (!featured) return;
      featured.forEach(async (id: string) => {
        const result = await fetch(`/api/fetchjob/${id}`);
        const jobResponse: jobResponse = await result.json();
        if (!jobResponse.data) return;
        jobData.push(jobResponse.data[0]);
      });
      setData(jobData);
    }
    getData();
  }, [featured]);

  return featured?.length === 0 ? null : (
    <section className="flex flex-col gap-4">
      {/* Dummy components */}
      <h5 className="headline-5">Featured Companies</h5>
      <div className="flex flex-wrap gap-6 md:gap-6">
        {data?.map((job) => {
          console.log(job.employer_reviews);
          return !job.employer_reviews ? null : (
            <FeaturedCard
              key={job.employer_logo}
              title={job.employer_name || ""}
              location={job.job_city || ""}
              logo={getLogo(job.employer_name || "")}
              reviews={job.employer_reviews[0]}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HomepageFeatured;
