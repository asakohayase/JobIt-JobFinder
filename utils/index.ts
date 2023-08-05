export const averagePayPerHour = (minSalary: number, maxSalary: number) =>
  Math.trunc((minSalary + maxSalary) / 52 / 40).toString();

export const getSincePostedDate = (date: string) => {
  const postedDate = new Date(date);
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - postedDate.getTime();
  const daysSincePosted = Math.trunc(timeDiff / (1000 * 60 * 60 * 24));
  return (
    (daysSincePosted === 0 && "Today") ||
    (daysSincePosted === 1 && `${daysSincePosted} Day left`) ||
    (daysSincePosted !== 1 && `${daysSincePosted} Days left`)
  );
};

export const getEmployementType = (type: string) => {
  if (!type) {
    return "";
  }

  if (type === "fulltime") {
    return "Full Time";
  }

  if (type === "parttime") {
    return "Part Time";
  }
  return type;
};

export const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.API_KEY || "",
    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  },
};
