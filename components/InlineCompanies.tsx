import React from "react";
import Image from "next/image";

import { getLogo } from "@/utils/getLogo";
import { Job } from "@/types";
import Button from "./Reusable/Button";

type Props = {
  data: Job;
};

const SimilarCompanies = ({ data }: Props) => {
  const { employer_name } = data;
  const logo = getLogo(employer_name);

  return (
    <section className="lg:body-16 flex w-full items-center justify-between rounded-[10px] bg-white  p-5 shadow-sm dark:bg-darkBG-3 dark:text-natural-6 lg:max-w-[360px]">
      <div className="flex">
        <Image
          src={logo}
          priority
          alt="Logo"
          className="object-cover"
          width={48}
          height={48}
        />
        <div className="pl-5">
          <h2 className="body-1 text-black  dark:text-white">
            {employer_name}
          </h2>
          <p className=" text-natural-6">{employer_name}</p>
        </div>
      </div>

      <div>
        <Button
          title={"View"}
          href={"#"}
          style={
            "px-2.5 py-1.5 btn-outline-green hover:bg-primary hover:text-white"
          }
        />
      </div>
    </section>
  );
};

export default SimilarCompanies;
