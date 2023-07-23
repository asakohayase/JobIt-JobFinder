/* eslint-disable camelcase */
import ErrorFallback from "@components/ErrorFallback";
import JD_inlineJobCard from "@components/JD_inlineJobCard";
import JD_jobCardLarge from "@components/JD_JobCardLarge";
import { JD_inlineJobCardData, JD_jobCardLargeData } from "@data";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const jobdetails = ({ params }: { params: { id: String } }) => {
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
          <JD_inlineJobCard data={JD_inlineJobCardData} />
          <JD_jobCardLarge data={JD_jobCardLargeData} />
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
