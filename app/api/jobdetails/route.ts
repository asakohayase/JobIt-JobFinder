export async function GETJobDetails(jobId: string, ext: boolean) {
  const url = `https://jsearch.p.rapidapi.com/job-details?${jobId}&extended_publisher_details=${ext}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.DB_KEY || "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);

  const result = await response.json();

  return result;
}
