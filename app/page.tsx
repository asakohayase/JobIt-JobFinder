import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import PageTitle from "@components/PageTitle";
import { inlineJobCard, smallJobCardData } from "@data";
import JobCard from "@components/JobCard";
import InlineJobCard from "@components/InlineJobCard";
import Featured from "@components/Featured";
import Button from "@components/Button";

const Home = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="padding-layout flex flex-col gap-8 py-6 dark:bg-darkBG-1 md:py-10">
        <PageTitle title="Welcome to the Job Search Platform for Developers" />
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-0">
          <div className="flex flex-col gap-8">
            {/* Latest Job Posts */}
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
            {/* Featured Companies */}
            <section className="flex flex-col gap-4">
              {/* Dummy components until Home Page Integration gets implemented */}
              <h5 className="headline-5">Featured Companies</h5>
              <div className="flex flex-wrap gap-6 md:gap-6">
                <Featured />
                <Featured />
                <Featured />
              </div>
            </section>
          </div>
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
              <InlineJobCard data={inlineJobCard} />
              <InlineJobCard data={inlineJobCard} />
              <InlineJobCard data={inlineJobCard} />
              <InlineJobCard data={inlineJobCard} />
              <InlineJobCard data={inlineJobCard} />
            </div>
          </section>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default Home;
