"use client";

import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Image from "next/image";
import { Job } from "@/types";
import Loader from "./Loader";

type Props = {
  allJobs: Job[] | null;
};

/**
 *
 * @example <SalaryChart allJobs={jobData} />
 * @param allJobs Array with all of the Jobs
 * @returns Functional Graph Component
 *
 */

const SalaryChart = ({ allJobs }: Props) => {
  const [jobResults, setJobResults] = useState<Job[]>([]);

  useEffect(() => {
    async function getJobs() {
      const jobDetail = allJobs;
      if (!allJobs) return;
      if (!jobDetail) return;
      const filter = jobDetail.filter(
        (job) => job.job_min_salary !== null && job.job_max_salary !== null
      );
      setJobResults(filter);
    }
    getJobs();
  }, [allJobs]);

  const employers = jobResults.map((job) => job.employer_name);
  const labels = employers;
  const minSalaries = jobResults.map((job) => job.job_min_salary);
  const maxSalaries = jobResults.map((job) => job.job_max_salary);
  const medianSalaries = [];

  for (let index = 0; index < minSalaries.length; index++) {
    medianSalaries.push((maxSalaries[index] + minSalaries[index]) / 2);
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Minimum salary",
        borderRadius: 30,
        data: minSalaries,
        backgroundColor: "rgba(253,221,140, 1)",
        barThickness: 20,
      },
      {
        label: "Maximum salary",
        borderRadius: 30,
        data: maxSalaries,
        backgroundColor: "rgba(11,171,124, 0.7)",
        barThickness: 20,
      },
      {
        label: "median salary",
        borderRadius: 30,
        data: medianSalaries,
        backgroundColor: "rgb(255,187,215)",
        barThickness: 20,
      },
    ],
  };

  function getMaxValue() {
    const test1 = data.datasets.map((dataset) => dataset.data);
    const testArr: number[] = [];
    test1.forEach((item) => {
      item.forEach((value) => testArr.push(value));
    });
    return Math.max(...testArr);
  }

  function getMinValue() {
    const test1 = data.datasets.map((dataset) => dataset.data);
    const testArr: number[] = [];
    test1.forEach((item) => {
      item.forEach((value) => testArr.push(value));
    });
    return Math.min(...testArr);
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
    y: {
      max: getMaxValue() + 30000,
      min: getMinValue() - 60000,
      ticks: {
        maxTicksLimit: 2,
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
    <figure className="flex h-full w-full flex-col gap-3 rounded-2xl bg-white px-7 py-6 dark:bg-darkBG-2">
      <h1 className="headline-5 md:font-bold">
        Estimated Salary <span className="font-normal">for</span> NodeJS
        Developer <span className="font-normal">in</span> New York
      </h1>
      <div className="body-20 flex justify-around md:justify-start md:gap-4">
        <div className="md:body-12 flex items-center gap-2">
          <Image
            alt="Minimum Salary Graph Dot"
            src="/img/widgets/yellowDot.svg"
            width={10}
            height={10}
          />
          Minimum
          <span className="hidden md:relative md:right-1 md:block">Salary</span>
        </div>
        <div className="md:body-12 flex items-center gap-2">
          <Image
            alt="Minimum Salary Graph Dot"
            src="/img/widgets/primaryDot.svg"
            width={10}
            height={10}
          />
          Maximum
          <span className="hidden md:relative md:right-1 md:block">Salary</span>
        </div>
        <div className="md:body-12 flex items-center gap-2">
          <Image
            alt="Minimum Salary Graph Dot"
            src="/img/widgets/pinkDot.svg"
            width={10}
            height={10}
          />
          Median
          <span className="hidden md:relative md:right-1 md:block">Salary</span>
        </div>
      </div>
      <figure className="w-full">
        {jobResults.length ? (
          <Bar options={options} data={data} className="mt-4" />
        ) : (
          <Loader />
        )}
      </figure>
    </figure>
  );
};

export default SalaryChart;
