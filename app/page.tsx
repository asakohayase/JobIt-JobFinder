"use client";

import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import PageTitle from "@/components/Reusable/PageTitle";
import HomepageJobPosts from "@/components/Home/HomepageJobPosts";
import HomepageFeatured from "@/components/Home/HomepageFeatured";
import HomepageRecommended from "@/components/Home/HomepageRecommended";
import { GeoResponse } from "@/types";

const Home = () => {
  const [jobListings, setJobListings] = useState(null);
  const [location, setLocation] = useState<GeoResponse>();

  useEffect(() => {
    async function fetchLocation() {
      const url = "http://ip-api.com/json/";

      const response = await fetch(url, {
        method: "GET",
      });
      const result = await response.json();
      setLocation(result);
    }
    fetchLocation();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (!location) return "no location available";
      const response = await fetch(
        `/api/alljobs?country=${location.country}&regionName=${location.regionName}`
      );
      const data = await response.json();

      setJobListings(data);
    }
    fetchData();
  }, [location]);

  if (!jobListings) return;

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="padding-layout flex flex-col gap-8 py-6 dark:bg-darkBG-1 md:py-10">
        <PageTitle title="Welcome to the Job Search Platform for Developers" />
        <section className="flex flex-col gap-8 md:gap-12">
          <section className="flex grow flex-col gap-8 xl:flex-row">
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
