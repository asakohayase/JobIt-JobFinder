import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";

const Home = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="padding-layout"></main>
    </ErrorBoundary>
  );
};

export default Home;
