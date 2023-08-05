import { jobResponse, Job } from "@/types";
import { companyInfo } from "./companyInfo";
import { options } from ".";

export async function getFeatured() {
  try {
    let url = "https://jsearch.p.rapidapi.com/search?query=developer&employer=";

    Object.values(companyInfo).forEach(({ id }) => {
      url += `${id},`;
    });

    const res = await fetch(url, options);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const result: jobResponse = await res.json();
    const jobs = result.data;

    return jobs as Job[];
  } catch (error) {
    if (error instanceof Error) {
      console.error(`An error occurred: ${error.message}`);
    }
    return null;
  }
}
