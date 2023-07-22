import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import PageTitle from "@components/PageTitle";
import { inlineJobCard, smallJobCardData } from "@data";
import JobCard from "@components/JobCard";
import InlineJobCard from "@components/InlineJobCard";

const Home = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="padding-layout flex flex-col gap-8 py-6 dark:bg-darkBG-1 md:py-10">
        <PageTitle title="Welcome to the Job Search Platform for Developers" />
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-0">
          <div className="flex flex-col gap-6">
            <p className="body-2">Latest Job Posts</p>
            <div className="flex max-w-4xl flex-wrap gap-4">
              <JobCard data={smallJobCardData} />
              <JobCard data={smallJobCardData} />
              <JobCard data={smallJobCardData} />
              <JobCard data={smallJobCardData} />
            </div>
            {/* Featured Companies */}
            <div className="flex">
              {/* Dummy components until Home Page Integration gets implemented */}
            </div>
          </div>
          <div className="flex flex-col gap-6 md:w-96">
            <p className="body-2">Recommended For You</p>
            <div className="flex flex-col items-center gap-2 rounded-jobit bg-white p-4 dark:bg-darkBG-2">
              <InlineJobCard data={inlineJobCard} />
              <InlineJobCard data={inlineJobCard} />
              <InlineJobCard data={inlineJobCard} />
              <InlineJobCard data={inlineJobCard} />
              <InlineJobCard data={inlineJobCard} />
            </div>
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default Home;
