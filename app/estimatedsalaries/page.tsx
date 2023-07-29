import React from "react";
import { Metadata } from "next";
import PageTitle from "@components/Reusable/PageTitle";
import Input from "@components/Input";

export const metadata: Metadata = {
  title: "Jobit - Estimated Salaries",
  description: "Job Finder Web Application",
};

const estimatedSalaries = () => {
  return (
    <section className="padding-layout flex flex-col gap-y-9  pb-[90px] pt-[46px]">
      <PageTitle />
      <section className="flex flex-row justify-between">
        <section>
          <Input />
        </section>
        <section className="flex h-[332px] w-[616px] items-center justify-center rounded-jobit bg-white shadow-1">
          <h1>Estimated Salaries Graph</h1>
        </section>
      </section>
    </section>
  );
};

export default estimatedSalaries;
