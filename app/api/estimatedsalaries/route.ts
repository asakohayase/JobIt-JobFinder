import { EstimatedSalaryResponse } from "@/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');
  const position = searchParams.get('position');
  const radius = searchParams.get('radius');

  const url = `https://jsearch.p.rapidapi.com/estimated-salary?job_title=${position?.split(" ").join("%20")}&location=${location?.split(" ").join("%20")}&radius=${radius}`;

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