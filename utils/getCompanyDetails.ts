import { Job, jobResponse } from "@types";

export async function getCompanyDetails(companyId: string, query: string) {
  try {
    let url = "https://jsearch.p.rapidapi.com/search?";
    url += query ? `query=${query}` : "query=job";
    url += `&employer=${companyId}`;

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
  } catch (error) {
    if (error instanceof Error) {
      console.error(`An error occurred: ${error.message}`);
    }
    return null;
  }
}
