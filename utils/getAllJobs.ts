import { jobResponse, Job } from "@types";

export async function getAllJobs() {
  try {
    const res = await fetch(
      "https://jsearch.p.rapidapi.com/search?query=developer",
      {
        headers: {
          "X-RapidAPI-Key": process.env.API_KEY || "",
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      }
    );

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
