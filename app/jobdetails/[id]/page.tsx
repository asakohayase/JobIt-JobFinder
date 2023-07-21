// import { GETJobDetails } from "@app/api/jobdetails/route";
// import { GET } from "@app/api/jobdetails/route";
import ErrorFallback from "@components/ErrorFallback";
import { JobDetailsResponse } from "@types";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const fetchJob = async (id: String) => {
  const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${id}%3D%3D&extended_publisher_details=false`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.DB_KEY || "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result: JobDetailsResponse = await response.json();

  return result;
};

const jobdetails = async ({ params }: { params: { id: String } }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="padding-layout mt-8">
        <div className="flex flex-col gap-2">
          <h2 className="headline-2">{"Let's find your dream job"}</h2>
          {/* Current Date */}
          <p className="body-8 text-natural-6">
            {new Date().toLocaleString("en-us", {
              weekday: "long",
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
          {/* PlaceHolder Component (Replace with real) */}
          {/* Job Details & Inline Job Card */}
          <section className="flex justify-between">
            {/* Job Details */}

            {/* Inline Job Cards */}
          </section>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default jobdetails;
