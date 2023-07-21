export async function getAllJobs() {
  const res = await fetch(
    "https://jsearch.p.rapidapi.com/search?query=developer",
    {
      headers: {
        "X-RapidAPI-Key": process.env.DB_APIKEY || "",
        "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
      },
    }
  );
  const result = await res.json();
  const jobs = result.data;
  return jobs;
}
