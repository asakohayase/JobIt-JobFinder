import Search from "@components/Search";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Jobit - Job Search",
  description: "Job Searching Utility",
};

const page = () => {
  return (
    <main className="padding-layout">
      <Search />
    </main>
  );
};

export default page;
