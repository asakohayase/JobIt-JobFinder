import { JobDetailsResponse } from "@/types";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${params.id}&extended_publisher_details=false`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY || "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result: JobDetailsResponse = await response.json();

  return NextResponse.json(result);
}
