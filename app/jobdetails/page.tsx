import ErrorFallback from "@components/ErrorFallback";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";

const jobdetails = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="padding-layout mt-16">
        <div className="flex flex-col gap-2">
          <h1 className="headline-1">Job Details</h1>
          <p className="body-8 dark:text-natural-6">
            {new Date().toLocaleString("en-us", {
              weekday: "long",
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default jobdetails;
