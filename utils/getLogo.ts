import { generateSync } from "text-to-image";

import { companyInfo } from "./companyInfo";

function generateLogo(name: string) {
  const firstLetters = name
    .split(" ", 2)
    .map((substring) => substring.charAt(0));

  const joinedLetters = firstLetters.join("");

  const uri = generateSync(joinedLetters, {
    bgColor: "#0BAB7C",
    textColor: "rgba(0,0,0,1)",
    fontSize: 20,
    fontFamily: "sans-serif",
    maxWidth: 45,
    verticalAlign: "center",
    textAlign: "center",
  });

  return uri;
}

export const getLogo = (name: string) => {
  const company = Object.keys(companyInfo).filter((key) =>
    key.toLowerCase().includes(name.toLowerCase())
  );

  const logo =
    companyInfo[<keyof typeof companyInfo>company[0]]?.logo ??
    generateLogo(name);

  return logo;
};
