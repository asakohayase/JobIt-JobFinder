import React from "react";
import { Metadata } from "next";
import PageTitle from "@/components/Reusable/PageTitle";
import Input from "@/components/Input";

export const metadata: Metadata = {
  title: "Jobit - Estimated Salaries",
  description: "Job Finder Web Application",
};

const estimatedSalaries = () => {
  return (
    <section className="padding-layout flex flex-col gap-y-12  pb-[90px] pt-[46px]">
      <PageTitle />
      <section className="flex flex-col justify-between md:flex-row">
        <section>
          <Input />
        </section>
        <section className="mt-10 flex items-center justify-center rounded-jobit bg-white shadow-1 dark:bg-darkBG-2 md:w-[616px]">
          <h1>Estimated Salaries Graph</h1>
        </section>
      </section>
    </section>
  );
};

export default estimatedSalaries;
