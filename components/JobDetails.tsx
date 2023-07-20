import React from "react";
import Image from "next/image";

const JobDetails = () => {
  return (
    <section className="">
      <div>
        <Image
          src="/img/widgets/header.png"
          width={820}
          height={192}
          className="rounded-t-3xl"
          alt="Placeholder Image"
        />
        <div className="relative bottom-8 left-8 flex h-16 w-16 items-center justify-center rounded-lg bg-natural-3 dark:bg-natural-8">
          <img
            src="https://firstteeaustin.org/wp-content/uploads/sites/64/2016/11/spurs-sports-and-entertainment-LOGO.jpg"
            alt=""
            className="rounded-lg p-1"
          />
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
