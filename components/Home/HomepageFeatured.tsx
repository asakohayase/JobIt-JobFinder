"use client";

import React, { useEffect, useState } from "react";
import FeaturedCard from "./Cards/FeaturedCard";
import { JobDetails } from "@/types";
import { getLogo } from "@/utils/getLogo";

const HomepageFeatured = () => {
  const [featured, setFeatured] = useState<JobDetails[] | null>(null);
  useEffect(() => {
    async function getFeatured() {
      const query = await fetch("/api/featuredjobs");
      const result = await query.json();

      setFeatured(result);
    }
    getFeatured();
  }, []);

  return featured?.length === 0 ? null : (
    <section className="flex flex-col gap-4">
      {/* Dummy components */}
      <h5 className="headline-5">Featured Companies</h5>
      <div className="flex flex-wrap gap-6 md:gap-6">
        {featured?.map((job) => {
          if (!job.employer_reviews) return <></>;
          return (
            <FeaturedCard
              key={job.employer_logo}
              title={job.employer_name || ""}
              location={`${job.job_city}, ${job.job_state}` || ""}
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
