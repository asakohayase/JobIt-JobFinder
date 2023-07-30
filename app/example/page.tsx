"use client";

import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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
};

const labels = ["Salary.com", "ZipRecruiter", "Talent.com"];

export const data = {
  labels,
  datasets: [
    {
      label: "Minimum salary",
      borderRadius: 30,
      data: [72000, 84000, 77500],
      backgroundColor: "rgba(253,221,140, 1)",
      barThickness: 10,
    },
    {
      label: "Maximum salary",
      borderRadius: 30,
      data: [224000, 250000, 200000],
      backgroundColor: "rgba(11,171,124, 0.7)",
      barThickness: 10,
    },
    {
      label: "median salary",
      borderRadius: 30,
      data: [142000, 172000, 150000],
      backgroundColor: "rgb(255,187,215)",
      barThickness: 10,
    },
  ],
};

const page = () => {
  return (
    <main className="padding-layout">
      <section className="flex items-center justify-center">
        <figure className="flex w-full flex-col gap-10 rounded-2xl bg-white px-7 py-6 dark:bg-darkBG-2">
          <h1 className="headline-1">
            Estimated Salary for NodeJS Developer in New York
          </h1>
          <Bar options={options} data={data} className="" />
        </figure>
      </section>
    </main>
  );
};

export default page;
