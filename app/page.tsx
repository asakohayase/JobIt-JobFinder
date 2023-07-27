/* eslint-disable camelcase */
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import PageTitle from "@components/Reusable/PageTitle";
import HomepageJobPosts from "@components/Home/HomepageJobPosts";
import HomepageFeatured from "@components/Home/HomepageFeatured";
import HomepageRecommended from "@components/Home/HomepageRecommended";
import { getAllJobs } from "@utils/getAllJobs";

const Home = async () => {
  const jobListings = await getAllJobs();
  if (!jobListings) return "no jobs found";
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="padding-layout flex flex-col gap-8 py-6 dark:bg-darkBG-1 md:py-10">
        <PageTitle title="Welcome to the Job Search Platform for Developers" />
        <section className="flex flex-col gap-8 md:gap-0">
          <section className="flex flex-col gap-8 md:flex-row">
            {/* Latest Job Posts */}
            <HomepageJobPosts jobListings={jobListings} />
            {/* Recommended Job Posts */}
            <HomepageRecommended jobListings={jobListings} />
          </section>
          {/* Featured Companies */}
          <HomepageFeatured />
        </section>
      </main>
    </ErrorBoundary>
  );
};

export default Home;
