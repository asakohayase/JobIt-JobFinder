export const averagePayPerHour = (minSalary: number, maxSalary: number) =>
  ((minSalary + maxSalary) / 52 / 40).toString();


  export const getSincePostedDate = (date: string) => {
    const postedDate = new Date(date);
    const currentDate = new Date();
    const timeDiff = currentDate.getTime() - postedDate.getTime();
    const daysSincePosted = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    return (
      (daysSincePosted === 0 && "Today") ||
      (daysSincePosted === 1 && `${daysSincePosted / 24} Day left`) ||
      (daysSincePosted !== 1 && `${daysSincePosted} Days left`)
    );
  };

  export const getEmployementType = (type: string) => {
      if (!type) {
        return "N/A";
      }
  
      if (type === "fulltime") {
        return "Full Time";
      }
  
      if (type === "parttime") {
        return "Part Time";
      }
    };