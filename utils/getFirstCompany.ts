import { JobDetails, JobDetailsResponse } from "@types";

export async function getFirstCompany(company: string) {
  try {
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
  } catch (error: any) {
    console.error(`An error occurred: ${error.message}`);
    return null;
  }
}
