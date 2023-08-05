import { JobDetailsResponse } from "@/types";
import { options } from "@/utils";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const url = `https://jsearch.p.rapidapi.com/job-details?job_id=${params.id}&extended_publisher_details=false`;

  const response = await fetch(url, options);
  const result: JobDetailsResponse = await response.json();

  return NextResponse.json(result);
}
