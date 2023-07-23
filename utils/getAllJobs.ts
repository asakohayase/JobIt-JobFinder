import { jobResponse, Job } from "@types";

export async function getAllJobs() {
  try {
    const res = await fetch(
      "https://jsearch.p.rapidapi.com/search?query=developer&employer=L20vMHZsZjpBZG9iZQ==,L20vMDEwcW1zenA6QWlyYm5i,L20vMG1na2c6QW1hem9u,L20vMGs4ejpBcHBsZQ==,L20vMDE4bm0zOkF1dG9kZXNr,L20vMHJuXzIyeTpEcm9wYm94,L2cvMTFmeTFwd3F2cjpGaWdtYQ==,L20vMHJ5cHBtZzpHaXRIdWI=,L2cvMTFmMDFqNnRyMzpHaXRMYWI=,L20vMDQ1YzdiOkdvb2dsZQ==,L2cvMTFoYmx4bnFiazpJblZpc2lvbg==,L20vMGtmeGtkbTpNYWlsY2hpbXA=,L20vMDRzdjQ6TWljcm9zb2Z0,L20vMDE3cmZfOk5ldGZsaXg=,L2cvMTFmaHkyNWtyNzpOb3Rpb24=,L20vMDJudGJ3ODpTaG9waWZ5,L20vMGRkOTducjpTbGFjaw==,L2cvMTFmaHdrczJtMTpTcG90aWZ5,L2cvMTFmeTI2NTkzMzpUaWtUb2s,L20vMGhncGY3aDpUd2l0Y2g=,L2cvMTFkeHBfX3htOTpUd2l0Y2ggSW50ZXJhY3RpdmUsIEluYy4=,L20vMHM4XzE1eDpWaW1lbw==,L20vMDlqY3ZzOllvdVR1YmU,",
      {
        headers: {
          "X-RapidAPI-Key": process.env.API_KEY || "",
          "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const result: jobResponse = await res.json();
    const jobs = result.data;

    return jobs as Job[];
  } catch (error: any) {
    console.error(`An error occurred: ${error.message}`);
    return null;
  }
}
