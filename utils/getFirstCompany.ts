import { JobDetails, JobDetailsResponse } from "@/types";
import { companyInfo } from "./companyInfo";
import { options } from ".";

export async function getFirstCompany(companyId: string) {
  try {
    const company = Object.keys(companyInfo).find(
      (key) =>
        companyInfo[key].id.toLocaleLowerCase() ===
        companyId.toLocaleLowerCase()
    );
    if (!company) {
      throw new Error("Company with the specified job_id not found.");
    }
    const url = "https://jsearch.p.rapidapi.com/search?query=" + company;

    const res = await fetch(url, options);

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
