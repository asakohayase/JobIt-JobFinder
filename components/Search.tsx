import React from "react";
import Image from "next/image";

const Search = () => {
  return (
    <section className="flex w-full pt-6">
      <div className="flex h-16 justify-around rounded-l-xl border-r-2 border-r-natural-8 bg-white dark:bg-darkBG-2 md:w-1/3">
        <Image
          alt="Search Icon - Magnifying Glass"
          src="/img/iconography/search.svg"
          width={28}
          height={28}
        />
        <input
          className="w-full bg-darkBG-2 focus:outline-none"
          id="searchInput"
          placeholder="Job Title, Company, or Keywords"
        />
      </div>
      <div className="flex h-16 justify-around border-r-2 border-r-natural-8 bg-white dark:bg-darkBG-2 md:w-1/3">
        <Image
          alt="Search Icon - Magnifying Glass"
          src="/img/iconography/pin.svg"
          width={28}
          height={28}
        />
        <input
          className="w-full bg-darkBG-2 focus:outline-none"
          id="searchInput"
          placeholder="Job Title, Company, or Keywords"
        />
      </div>
      <div className="flex h-16 justify-around rounded-r-xl bg-white dark:bg-darkBG-2 md:w-1/3">
        <Image
          alt="Search Icon - Magnifying Glass"
          src="/img/iconography/briefcase.svg"
          width={28}
          height={28}
        />
        <input
          className="w-full rounded-r-xl bg-darkBG-2 focus:outline-none"
          id="searchInput"
          placeholder="Job Title, Company, or Keywords"
        />
      </div>
    </section>
  );
};

export default Search;
