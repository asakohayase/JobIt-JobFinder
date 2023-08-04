import { JobDetails, JobDetailsResponse, jobResponse } from "@/types";
import { removeDuplicatesByName } from "@/utils";
import { companyInfo } from "@/utils/companyInfo";
import console from "console";
import { NextResponse } from "next/server";

export async function GET() {
  let url = "https://jsearch.p.rapidapi.com/search?query=developer&employer=";

  Object.values(companyInfo).forEach(({ id }) => {
    url += `${id},`;
  });

  const res = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY || "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const result: jobResponse = await res.json();
  const jobs = result.data;

  if (!jobs)
    return NextResponse.json({ status: "failed", reason: "No jobs found" });

  const jobObjs = jobs.map((job) => ({
    id: job.job_id,
    company: job.employer_name,
  }));

  const filteredJobs = jobObjs.filter((obj, index, self) => {
    return index === self.findIndex((o) => o.company === obj.company);
  });

  const filteredData: JobDetails[] = [];

  for (const { id } of filteredJobs) {
    const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${id}&extended_publisher_details=false`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY || "",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const result: JobDetailsResponse = await response.json();
    const { data } = result;
    if (!data)
      return NextResponse.json({ status: "failed", reason: "No data" });
    const [job] = data;
    filteredData.push(job);
  }

  // Randomly shuffle the filteredData array
  for (let i = filteredData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredData[i], filteredData[j]] = [filteredData[j], filteredData[i]];
  }

  // Slice up to 3 elements from the shuffled array
  const slicedData = filteredData.slice(0, 3);

  return NextResponse.json(slicedData);
}
