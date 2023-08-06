"use client";
import React, { useState } from "react";
import PageTitle from "@/components/Reusable/PageTitle";
import Input from "@/components/Input";
import SalaryChart from "@/components/SalaryChart";
import { EstimatedSalaryData, InitialValuesType } from "@/types";

const EstimatedSalaries = () => {
  const initialValues: InitialValuesType = {
    position: "",
    location: "",
    radius: "",
  };
  const [values, setValues] = useState(initialValues);
  const [estimatedSalaries, setEstimatedSalaries] = useState<
    EstimatedSalaryData[]
  >([]);
  return (
    <section className="padding-layout flex flex-col gap-y-12  pb-[90px] pt-[46px]">
      <PageTitle />
      <section className="flex flex-col justify-between md:flex-row">
        <section>
          <Input
            values={values}
            setValues={setValues}
            setEstimatedSalaries={setEstimatedSalaries}
          />
        </section>
        <section className="mt-10 flex items-center justify-center rounded-jobit bg-white shadow-1 dark:bg-darkBG-2 md:w-[616px]">
          <SalaryChart
            jobTitle={values.position}
            location={values.location}
            EstimatedSalary={estimatedSalaries}
          />
        </section>
      </section>
    </section>
  );
};

export default EstimatedSalaries;
