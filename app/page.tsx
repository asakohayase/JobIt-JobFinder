import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../components/ErrorFallback";
import Button from "@/components/Button";
import Input from "@/components/Input";

const Home = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="padding-layout">Home</div>
    </ErrorBoundary>
  );
};

export default Home;
