export async function fetchJobs() {
  const headers = {
    "X-RapidAPI-Key": process.env.DB_APIKEY || "",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  };

  const response = await fetch(
    "https://jsearch.p.rapidapi.com/search?query=developer",
    {
      headers,
    }
  );

  const result = await response.json();

  return result;
}
