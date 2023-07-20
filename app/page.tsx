import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import ExampleComponents from "@components/ExampleComponents";
import TestValidation from "@components/TestValidation";

const Home = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {/* EXAMPLE OF REUSABLE COMPONENTS AND DIFFERENT TYPOGRAPHIE CUSTOM CLASS */}

      <main className="padding-layout flex flex-col gap-5 bg-white p-10 dark:bg-darkBG-1">
        <ExampleComponents />
        <TestValidation />
      </main>
    </ErrorBoundary>
  );
};

export default Home;
