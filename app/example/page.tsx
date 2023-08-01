"use client";

import React from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { getAllJobs } from "@/utils/getAllJobs";

const page = async () => {
  const labels = ["Salary.com", "ZipRecruiter", "Talent.com"];

  const jobs = await getAllJobs();

  const employers = jobs?.map((job) => job.employer_name);
  const minSalaries = jobs?.map((job) => job.job_min_salary);
  const maxSalaries = jobs?.map((job) => job.job_max_salary);

  console.log(employers, minSalaries, maxSalaries);

  const getMaxValue = () => {
    const test1 = data.datasets.map((dataset) => dataset.data);
    const testArr: number[] = [];
    test1.forEach((item) => {
      item.forEach((value) => testArr.push(value));
    });
    return Math.max(...testArr);
  };

  const getMinValue = () => {
    const test1 = data.datasets.map((dataset) => dataset.data);
    const testArr: number[] = [];
    test1.forEach((item) => {
      item.forEach((value) => testArr.push(value));
    });
    return Math.min(...testArr);
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Minimum salary",
        borderRadius: 30,
        data: [72000, 84000, 77500],
        backgroundColor: "rgba(253,221,140, 1)",
        barThickness: 20,
      },
      {
        label: "Maximum salary",
        borderRadius: 30,
        data: [224000, 250000, 200000],
        backgroundColor: "rgba(11,171,124, 0.7)",
        barThickness: 20,
      },
      {
        label: "median salary",
        borderRadius: 30,
        data: [142000, 172000, 150000],
        backgroundColor: "rgb(255,187,215)",
        barThickness: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Estimated Salary for NodeJS Developer in New York",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    y: {
      max: getMaxValue() + 30000,
      min: getMinValue() - 30000,
      ticks: {
        maxTicksLimit: 3,
        stepSize: 150000,
        font: {
          size: 14,
        },
      },
    },
    elements: {
      bar: {
        borderColor: "rgba(0, 0, 0, 0)",
        borderWidth: 4,
      },
    },
  };
  return (
    <main className="padding-layout">
      <section className="flex items-center justify-center">
        <figure className="flex w-full flex-col gap-3 rounded-2xl bg-white px-7 py-6 dark:bg-darkBG-2">
          <h1 className="headline-5 md:headline-1">
            Estimated Salary for NodeJS Developer in New York
          </h1>
          <div className="body-20 flex justify-around md:justify-start md:gap-4">
            <div className="md:body-6 flex items-center gap-2">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="8" height="8" rx="4" fill="#FDDD8C" />
              </svg>
              Minimum
              <span className="hidden md:relative md:right-1 md:block">
                Salary
              </span>
            </div>
            <div className="md:body-6 flex items-center gap-2">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="8" height="8" rx="4" fill="#0BAB7C" />
              </svg>
              Maximum
              <span className="hidden md:relative md:right-1 md:block">
                Salary
              </span>
            </div>
            <div className="md:body-6 flex items-center gap-2">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="8" height="8" rx="4" fill="#FFBBD7" />
              </svg>
              Median
              <span className="hidden md:relative md:right-1 md:block">
                Salary
              </span>
            </div>
          </div>
          <Bar options={options} data={data} className="mt-4" />
        </figure>
      </section>
    </main>
  );
};

export default page;
