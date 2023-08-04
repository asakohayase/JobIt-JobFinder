import { GeoResponse, jobResponse } from "@/types";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { location: string } }
) {
  const loc: GeoResponse = JSON.parse(
    '{"' +
      decodeURI(params.location)
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"')
        .replace(/\s/g, "") +
      '"}'
  );
  const url = `https://jsearch.p.rapidapi.com/search?query=${loc.country},${loc.regionName}&radius=200`;

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
