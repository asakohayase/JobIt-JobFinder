export const getSincePostedDate = (date: string) => {
  const postedDate = new Date(date);
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - postedDate.getTime();
  const daysSincePosted = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  return daysSincePosted;
};
