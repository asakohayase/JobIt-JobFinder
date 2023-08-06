import { jobResponse } from "@/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const input = searchParams.get("input");
  const state = searchParams.get("state");
  const jobType = searchParams.get("jobtype");

  const url = `https://jsearch.p.rapidapi.com/search?query=${input},${state},${jobType}&num_pages=10`;

  const res = await fetch(url, {
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY || "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  });

  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

  const result: jobResponse = await res.json();
  const jobs = result.data;

  return NextResponse.json(jobs);
}
