import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import ExampleComponents from "@components/ExampleComponents";

const Home = async () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {/* EXAMPLE OF REUSABLE COMPONENTS AND DIFFERENT TYPOGRAPHIE CUSTOM CLASS */}

      <main className="padding-layout flex flex-col gap-5 py-10 dark:bg-darkBG-1">
        <ExampleComponents />
      </main>
    </ErrorBoundary>
  );
};

export default Home;
