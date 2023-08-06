"use client";
import { JobDetails, jobResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
  data: {
    title: string;
    list: string[];
  };
  jobs: JobDetails[];
  setJobs: React.Dispatch<React.SetStateAction<JobDetails[]>>;
};

const Filter = ({ data: { list, title }, setJobs, jobs }: Props) => {
  const [clicked, setClicked] = useState(true);

  const handleClick = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    key: string
  ) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/filter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ key }),
      });

      const { data }: jobResponse = await res.json();
      setJobs(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="hidden shrink-0 lg:block lg:max-w-[250px]">
      <Link
        href={"#!"}
        scroll={false}
        className="flex items-center justify-between pr-3"
        onClick={() => {
          setClicked((prev) => !prev);
        }}
      >
        <h2 className="body-2">{title}</h2>
        <Image
          src={"/img/icons/cheveron.svg"}
          width={20}
          height={20}
          className={`${clicked === true ? "rotate-90" : "-rotate-90"
            } object-cover`}
          alt="Icon"
        />
      </Link>

      <section
        className={`flex ${clicked === true && "mt-5  pr-3"
          } flex-col gap-3 overflow-hidden overflow-y-auto lg:max-h-[240px]`}
      >
        {clicked === true &&
          Object.entries(list)?.map(([key, value], i: number) => {
            return (
              <div key={i} className="flex flex-col gap-5">
                <ul className="flex flex-col gap-y-3">
                  <li className="flex h-[24px] items-center justify-between">
                    <div
                      className="flex items-center space-x-[14px]"
                      onClick={(e) => {
                        handleClick(e, key);
                      }}
                    >
                      <input
                        value={key}
                        type="checkbox"
                        id={`check${i}`}
                        className="relative h-[18px] w-[18px] shrink-0 cursor-pointer appearance-none rounded-[5px] border-[1px] border-natural-6 after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[length:10px] after:bg-center after:bg-no-repeat after:content-[''] checked:border-transparent checked:bg-primary after:checked:bg-[url('/img/icons/check.svg')] focus:outline-none dark:border-natural-8 dark:checked:border-transparent"
                      />
                      <label
                        htmlFor={`check${i}`}
                        className="body-15 cursor-pointer capitalize text-natural-8 dark:text-natural-5"
                      >
                        {value}
                      </label>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
      </section>
    </section>
  );
};

export default Filter;
