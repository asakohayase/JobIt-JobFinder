import { JobDetails, JobDetailsResponse } from "@types";
import { companyInfo } from "./companyInfo";

export async function getFirstCompany(company_id: string) {
  try {
    const company = Object.keys(companyInfo).find(
      (key) => companyInfo[key].id === company_id
    );
    if (!company) {
      throw new Error("Company with the specified job_id not found.");
    }
    const url = "https://jsearch.p.rapidapi.com/search?query=" + company;

    const res = await fetch(url, {
      headers: {
        "X-RapidAPI-Key": process.env.API_KEY || "",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const result: JobDetailsResponse = await res.json();
    const companies = result.data;
    const firstCompany = companies[0];

    return firstCompany as JobDetails;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`An error occurred: ${error.message}`);
    }
    return null;
  }
}
