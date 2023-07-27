import { Job, jobResponse } from "@types";
import { companyInfo } from "./companyInfo";

export async function getCompanyDetails(company: string, query: string) {
  let id: string | null = null;
  try {
    const companyData = companyInfo[company];
    if (companyData) {
      id = companyData.id;
    } else {
      console.log("Company not found.");
      return null;
    }

    const url =
      "https://jsearch.p.rapidapi.com/search?query=" +
      query +
      "&employers=" +
      id;

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

    return jobs as Job[];
  } catch (error: any) {
    console.error(`An error occurred: ${error.message}`);
    return null;
  }
}
