"use client";

import Image from "next/image";
import React, { useState } from "react";
import states from "states-us";

import Button from "./Reusable/Button";

const Search = () => {
  const [input, setInput] = useState("");

  return (
    <form className="mt-6 flex w-full flex-col gap-2 rounded-xl bg-white dark:bg-darkBG-2 md:flex-row md:gap-0">
      <div className="mx-4 flex h-16 items-center justify-around gap-4 border-b pl-6 text-natural-6 dark:border-b-2 dark:border-[#44444F] md:mx-0 md:w-1/3 md:border-b-0 md:border-r-2 dark:md:border-b-0">
        <Image
          alt="Search Icon - Magnifying Glass"
          src="/img/iconography/search.svg"
          width={28}
          height={28}
        />
        <input
          className="body-6 md:body-14 h-full w-full rounded-tr-xl bg-white text-natural-6 placeholder:text-natural-6 focus:outline-none dark:bg-darkBG-2 md:rounded-none md:pr-6"
          id="searchInput"
          placeholder="Job Title, Company, or Keywords"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>
      <div className="mx-4 flex h-16 items-center justify-around gap-4 border-b pl-6 dark:border-b-2 dark:border-[#44444F] md:mx-0 md:w-1/3 md:border-b-0 md:border-r-2 dark:md:border-b-0">
        <Image
          alt="Location Pin Icon"
          src="/img/iconography/pin.svg"
          width={28}
          height={28}
        />
        <select
          aria-labelledby="location"
          id="searchLocation"
          className="body-6 md:body-14 mr-6 h-full w-full rounded-r-xl bg-white text-natural-6 focus:outline-none  dark:bg-darkBG-2"
        >
          <option value="" hidden disabled selected>
            Location
          </option>
          <option value="REMOTE">Remote</option>
          {states.map((state) => (
            <option key={state.abbreviation} value={state.abbreviation}>
              {state.name}
            </option>
          ))}
          {/* <option value="FULLTIME">California</option>
          <option value="REMOTE">Maryland</option> */}
        </select>
      </div>
      <div className="mx-4 flex h-16 items-center justify-around gap-4 border-b pl-6 dark:border-b-2 dark:border-[#44444F] md:mx-0 md:w-1/3 md:border-b-0 md:pr-6 dark:md:border-b-0">
        <Image
          alt="Briefcase Icon"
          src="/img/iconography/briefcase.svg"
          width={28}
          height={28}
        />
        <select
          aria-labelledby="jobType"
          id="jobType"
          className="body-6 md:body-14 mr-6 h-full w-full rounded-r-xl bg-white text-natural-6 focus:outline-none dark:bg-darkBG-2"
        >
          <option value="" hidden disabled selected>
            Job Type
          </option>
          <option value="INTERN">Intern</option>
          <option value="CONTRACTOR">Contract</option>
          <option value="PARTTIME">Part Time</option>
          <option value="FULLTIME">Full Time</option>
        </select>
      </div>
      <div className="mx-4 my-6 md:relative md:right-6 md:top-2 md:m-0">
        <Button
          title={"Find Jobs"}
          style="flex items-center justify-center bg-primary w-full h-14 md:h-12 rounded-lg px-3 mr-6 body-6 text-white"
          href=""
        />
      </div>
    </form>
  );
};

export default Search;
