"use client"
import React, { useState } from "react";
import PageTitle from "@/components/Reusable/PageTitle";
import Input from "@/components/Input";


const EstimatedSalaries = () => {
  const [estimatedSalaries, setEstimatedSalaries] =  useState({})
  return (
    <section className="padding-layout flex flex-col gap-y-12  pb-[90px] pt-[46px]">
      <PageTitle />
      <section className="flex flex-col justify-between md:flex-row">
        <section>
          <Input estimatedSalaries={estimatedSalaries} setEstimatedSalaries={setEstimatedSalaries}/>
        </section>
        <section className="rounded-jobit shadow-1 dark:bg-darkBG-2 mt-10 flex items-center justify-center bg-white md:w-[616px]">
          <h1>Estimated Salaries Graph</h1>
        </section>
      </section>
    </section>
  );
};

export default EstimatedSalaries;
