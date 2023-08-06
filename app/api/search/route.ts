import { NextResponse, NextRequest } from "next/server";
import { EstimatedSalaryResponse } from "@/types";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const input = searchParams.get('query');
  const selectedJobType = searchParams.get('jobType');
  const selectedLocation = searchParams.get('location');

  const url = `https://jsearch.p.rapidapi.com/search?query=${input?.split(" ")
    .join(
      "%20"
    )}${selectedLocation?.split(" ")
    .join(
      "%20"
    )}&page=1&employment_types=${selectedJobType}`;

  const res = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY || "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  });

  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

  const result: EstimatedSalaryResponse = await res.json();
  const data = result.data;

  return NextResponse.json(data);
}