import { Job, jobResponse } from "@/types";
import { options } from ".";

export async function getCompanyDetails(companyId: string, query: string) {
  try {
    let url = "https://jsearch.p.rapidapi.com/search?";
    url += query
      ? `query=${query},%20${companyId}`
      : `query=job,%20${companyId}`;

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
