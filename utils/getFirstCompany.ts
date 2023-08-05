import { JobDetails, JobDetailsResponse } from "@/types";
import { options } from ".";

export async function getFirstCompany(companyId: string) {
  try {
    const url = "https://jsearch.p.rapidapi.com/search?query=" + companyId;

    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const result: JobDetailsResponse = await res.json();
    const companies = result.data;
    if (!companies) return;
    const firstCompany = companies[0];

    return firstCompany as JobDetails;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`An error occurred: ${error.message}`);
    }
    return null;
  }
}
