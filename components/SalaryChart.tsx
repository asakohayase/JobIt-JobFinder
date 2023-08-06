"use client";

import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import Image from "next/image";
import { EstimatedSalaryData } from "@/types";
import Loader from "./Loader";

type Props = {
  jobTitle: string;
  location: string;
  EstimatedSalary: EstimatedSalaryData[] | null;
};

/**
 *
 * @example <SalaryChart EstimatedSalary={salaryData} />
 * @param EstimatedSalary Estimated salary **Data**
 * @returns Functional Graph Component
 *
 */

const SalaryChart = ({ jobTitle, location, EstimatedSalary }: Props) => {
  const [salaryResults, setSalaryResults] = useState<EstimatedSalaryData[]>([]);

  useEffect(() => {
    async function getJobs() {
      const salaryData = EstimatedSalary;
      if (!EstimatedSalary) return;
      if (!salaryData) return;
      const filter = salaryData.filter(
        (salary) => salary.min_salary !== null && salary.max_salary !== null
      );
      setSalaryResults(filter);
    }
    getJobs();
  }, [EstimatedSalary]);

  const employers = salaryResults.map((salary) => salary.publisher_name);
  const labels = employers;
  const minSalaries = salaryResults.map((salary) => salary.min_salary);
  const maxSalaries = salaryResults.map((salary) => salary.max_salary);
  const medianSalaries = salaryResults.map((salary) => salary.median_salary);

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
      item.forEach((value) => {
        if (typeof value !== "undefined") {
          testArr.push(value);
        }
      });
    });
    return Math.max(...testArr);
  }

  function getMinValue() {
    const test1 = data.datasets.map((dataset) => dataset.data);
    const testArr: number[] = [];
    test1.forEach((item) => {
      item.forEach((value) => {
        if (typeof value !== "undefined") {
          testArr.push(value);
        }
      });
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
        Estimated Salary <span className="font-normal">for</span> {jobTitle}{" "}
        <span className="font-normal">in</span> {location}
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
        {salaryResults.length ? (
          <Bar options={options} data={data} className="mt-4" />
        ) : (
          <Loader />
        )}
      </figure>
    </figure>
  );
};

export default SalaryChart;
