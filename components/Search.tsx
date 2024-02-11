"use client";

import Image from "next/image";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { State } from "country-state-city";

import { GeoResponse } from "@/types";

interface SearchProps {
  input: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  selectedLocation: string;
  onLocationChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectedJobType: string;
  onJobTypeChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  handleSubmit: (event: FormEvent) => void;
}

const Search: React.FC<SearchProps> = ({
  input,
  onInputChange,
  selectedLocation,
  onLocationChange,
  selectedJobType,
  onJobTypeChange,
  handleSubmit,
}) => {
  const [location, setLocation] = useState<GeoResponse>();

  useEffect(() => {
    async function fetchLocation() {
      const url = "https://ip-api.com/json/";

      const response = await fetch(url, {
        method: "GET",
      });
      const result = await response.json();
      setLocation(result);
    }
    fetchLocation();
  }, []);

  return (
    <form
      className="mt-6 flex w-full flex-col gap-2 rounded-xl bg-white dark:bg-darkBG-2 md:flex-row md:gap-0"
      onSubmit={handleSubmit}
    >
      <div className="mx-4 flex h-20 items-center justify-around gap-4 border-b pl-6 text-natural-6 dark:border-b-2 dark:border-[#44444F] md:mx-0 md:w-1/3 md:border-b-0 md:border-r-2 dark:md:border-b-0">
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
          onChange={onInputChange}
        />
      </div>
      <div className="mx-4 flex h-20 items-center justify-around gap-4 border-b pl-6 dark:border-b-2 dark:border-[#44444F] md:mx-0 md:w-1/3 md:border-b-0 md:border-r-2 dark:md:border-b-0">
        <Image
          alt="Location Pin Icon"
          src="/img/iconography/pin.svg"
          width={28}
          height={28}
        />
        <select
          value={selectedLocation}
          onChange={onLocationChange}
          aria-labelledby="location"
          id="searchLocation"
          className="body-6 md:body-14 mr-6 h-full w-full rounded-r-xl bg-white text-natural-6 focus:outline-none  dark:bg-darkBG-2"
        >
          <option value="" hidden disabled>
            Location
          </option>
          <option value="REMOTE">Remote</option>
          {State.getStatesOfCountry(location?.countryCode).map((state) => (
            <option key={state.name} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mx-4 flex h-20 items-center justify-around gap-4 border-b pl-6 dark:border-b-2 dark:border-[#44444F] md:mx-0 md:w-1/3 md:border-b-0 md:pr-6 dark:md:border-b-0">
        <Image
          alt="Briefcase Icon"
          src="/img/iconography/briefcase.svg"
          width={28}
          height={28}
        />
        <select
          value={selectedJobType}
          onChange={onJobTypeChange}
          aria-labelledby="jobType"
          id="jobType"
          className="body-6 md:body-14 mr-6 h-full w-full rounded-r-xl bg-white text-natural-6 focus:outline-none dark:bg-darkBG-2"
        >
          <option value="" hidden disabled>
            Job Type
          </option>
          <option value="INTERN">Intern</option>
          <option value="CONTRACTOR">Contract</option>
          <option value="PARTTIME">Part Time</option>
          <option value="FULLTIME">Full Time</option>
        </select>
      </div>
      <div className="mx-4 my-6 md:relative md:right-6 md:top-4 md:m-0">
        <button className="body-6 mr-6 flex h-14 w-full items-center justify-center rounded-lg bg-primary px-3 text-white md:h-12">
          Find Jobs
        </button>
      </div>
    </form>
  );
};

export default Search;
