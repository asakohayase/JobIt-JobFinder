import { companyInfo } from "./companyInfo";

export const getLogo = (name: string) => {
  const company = Object.keys(companyInfo).filter((key) =>
    key.toLowerCase().includes(name.toLowerCase())
  );

  const logo =
    companyInfo[<keyof typeof companyInfo>company[0]]?.logo ||
    "Some default value";

  return logo;
};
