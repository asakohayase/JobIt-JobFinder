"use client";
import { GeoResponse, JobDetails } from "@/types";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { State } from "country-state-city";
import { options } from "@/utils";

type Props = {
  jobs: JobDetails[];
  setJobs: React.Dispatch<React.SetStateAction<JobDetails[]>>;
};

const Search = ({ jobs, setJobs }: Props) => {
  const [input, setInput] = useState("");
  const [location, setLocation] = useState<GeoResponse>();

  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");


  const jobTypeOptions = {
    "": "Job Type",
    INTERN: "Intern",
    CONTRACTOR: "Contract",
    PARTTIME: "Part Time",
    FULLTIME: "Full Time",
  };

  const fetchData = async () => {
    if (!selectedLocation || !input || !selectedJobType) return "No information provided";
    const response = await fetch(
      `/api/search?query=${input}&location=${selectedLocation}&jobType=${selectedJobType}`,
      options
    );
    const data = await response.json();
    setJobs(data);
  };

  useEffect(() => {
    async function fetchLocation() {
      const url = "http://ip-api.com/json/";

      const response = await fetch(url, {
        method: "GET",
      });
      const result = await response.json();
      setLocation(result);
    }
    fetchLocation();
  }, []);

  useEffect(() => {
    fetchData();
  }, [selectedJobType, selectedLocation, input]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData()
  }

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch("/api/search", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ input, selectedJobType, selectedLocation }),
  //     });

  //     const { data }: jobResponse = await res.json();
  //     setJobs(data);
  //     setInput("");
  //     setSelectedLocation("");
  //     setSelectedJobType("");
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleJobTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedJobType(event.target.value.trim());
  };

  const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLocation(event.target.value.trim());
  };



  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex w-full flex-col gap-2 rounded-xl bg-white dark:bg-darkBG-2 md:flex-row md:items-center md:gap-0"
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
          onChange={handleInputSearch}
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
          onChange={handleLocationChange}
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
          onChange={handleJobTypeChange}
          aria-labelledby="jobType"
          id="jobType"
          className="body-6 md:body-14 mr-6 h-full w-full rounded-r-xl bg-white text-natural-6 focus:outline-none dark:bg-darkBG-2"
        >
          {Object.entries(jobTypeOptions).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex h-12 w-[105px] items-center justify-center md:mr-[25px]">
        <button className="btn-primary shrink-0 px-[19px] py-3" type="submit">
          Find Jobs
        </button>
      </div>
    </form>
  );
};

export default Search;
