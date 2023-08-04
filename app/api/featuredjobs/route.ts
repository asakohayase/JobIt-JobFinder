import { jobResponse } from "@/types";
import { companyInfo } from "@/utils/companyInfo";
import { fetchJob } from "@/utils/fetchJob";
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

  const jobIds = jobs.map((job) => job.job_id);
  const filteredIds = jobIds
    .filter((id, index) => jobIds.indexOf(id) === index)
    .slice(0, 3);

  return NextResponse.json(filteredIds);
}
