import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { position, radius, location } = body;

  const url = `https://jsearch.p.rapidapi.com/estimated-salary?job_title=${position
    .split(" ")
    .join(
      "%20"
    )}&location=${location.split(" ")
    .join(
      "%20"
    )}&radius=${radius}`;
  console.log(url);
  const res = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY || "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  });
  
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);


  const jobs = await res.json();

  return NextResponse.json(jobs);
}