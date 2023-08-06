/* eslint-disable camelcase */
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
  const logo = getLogo(employer_name ?? "");

  return (
    <section className="lg:body-16 flex w-full items-center justify-between rounded-[10px] bg-white p-5 shadow-sm dark:bg-darkBG-3 dark:text-natural-6 md:gap-1">
      <div className="flex">
        <Image
          src={logo}
          priority
          alt="Logo"
          className="object-contain"
          width={48}
          height={48}
        />
        <div className="pl-5">
          <h2 className="body-1 line-clamp-1  text-black dark:text-white">
            {employer_name ?? "N/A"}
          </h2>
          <p className=" line-clamp-1 text-natural-6">
            {employer_name ?? "N/A"}
          </p>
        </div>
      </div>

      <div>
        <Button
          title={"View"}
          href={data.employer_name ? `/company/${data.employer_name}` : "/"}
          style={
            "px-2.5 py-1.5 btn-outline-green hover:bg-primary hover:text-white"
          }
        />
      </div>
    </section>
  );
};

export default SimilarCompanies;
