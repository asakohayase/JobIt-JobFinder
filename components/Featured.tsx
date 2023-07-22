import React from "react";
import Image from "next/image";
import Button from "./Button";

const Featured = () => {
  return (
    <div className="flex w-full flex-col gap-4 rounded-jobit bg-white p-6 dark:bg-darkBG-2 md:w-64">
      {/* Company Logo & Name */}
      <div className="flex items-center gap-4">
        <Image
          src={"/img/company-logo/mailchimp.svg"}
          alt={"MailChimp logo"}
          width={48}
          height={48}
        />
        <p className="body-6">MailChimp</p>
      </div>
      {/* Company Location & Vacancy */}
      <div className="body-15 flex gap-4 text-natural-6 md:flex-col md:gap-2">
        {/* Location */}
        <div className="flex gap-2">
          <Image
            src={"/img/iconography/pin.svg"}
            alt={"Location Pin"}
            width={20}
            height={20}
          />
          <p>San Francisco, USA</p>
        </div>
        <div className="flex gap-2">
          <Image
            src={"/img/iconography/briefcase.svg"}
            alt={"Location Pin"}
            width={20}
            height={20}
          />
          <p>12 Job Vacancy</p>
        </div>
        {/* Vacancy */}
      </div>
      <Button
        title={"See All"}
        style="flex justify-center align-center p-2 dark:bg-darkBG-3 rounded-jobit text-natural-6 body-11 bg-natural-4"
        href="/"
        icon=""
      />
      {/* See All Button */}
    </div>
  );
};

export default Featured;
