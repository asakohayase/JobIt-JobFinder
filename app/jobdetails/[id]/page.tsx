/* eslint-disable camelcase */
import ErrorFallback from "@/components/ErrorFallback";
import { JDinlineJobCardData, JDjobCardLargeData } from "@data";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import JDinlineJobCard from "@/components/JDInlineJobCard";
import JDjobCardLarge from "@/components/JDjobCardLarge";

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
          <JDinlineJobCard data={JDinlineJobCardData} />
          <JDjobCardLarge data={JDjobCardLargeData} />
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
