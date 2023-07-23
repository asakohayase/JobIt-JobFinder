export const averagePayPerHour = (minSalary: number, maxSalary: number) =>
  ((minSalary + maxSalary) / 52 / 40).toString();
