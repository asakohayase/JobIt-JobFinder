import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import PageTitle from "@components/PageTitle";
import HomepageJobPosts from "@components/HomepageJobPosts";
import HomepageFeatured from "@components/HomepageFeatured";
import HomepageRecommended from "@components/HomepageRecommended";

const Home = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="padding-layout flex flex-col gap-8 py-6 dark:bg-darkBG-1 md:py-10">
        <PageTitle title="Welcome to the Job Search Platform for Developers" />
        <div className="flex flex-col gap-8 md:flex-row md:justify-between md:gap-0">
          <div className="flex flex-col gap-8">
            {/* Latest Job Posts */}
            <HomepageJobPosts />
            {/* Featured Companies */}
            <HomepageFeatured />
          </div>
          {/* Recommended Job Posts */}
          <HomepageRecommended />
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default Home;
