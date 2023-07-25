/* eslint-disable camelcase */
import {
  inlineJobCardData,
  largeJobCardData,
  smallJobCardData,
  JD_inlineJobCardData,
  JD_largeJobCardData,
} from "@data";
import React from "react";
import Button from "./Reusable/Button";
import InlineJobCard from "./Home/Cards/InlineJobCard";
import JobCard from "./Home/Cards/JobCard";
import JobCardLarge from "./Home/Cards/JobCardLarge";
import TestValidation from "./TestValidation";
import JD_inlineJobCard from "./JD_inlineJobCard";
import JD_JobCardLarge from "./JD_jobCardLarge";

const ExampleComponents = () => {
  return (
    <div className="flex flex-col gap-4">
      <InlineJobCard data={inlineJobCardData} />
      <JobCardLarge data={largeJobCardData} />
      <JobCard data={smallJobCardData} />
      <JD_inlineJobCard data={JD_inlineJobCardData} />
      <JD_JobCardLarge data={JD_largeJobCardData} />

      <TestValidation />

      <div className="flex flex-row gap-5">
        <Button
          title={"Submit"}
          href={"/"}
          style={"px-[14px] py-2 lg:py-3 btn-primary"}
        />
        <Button
          title={"Submit"}
          href={"/"}
          style={"px-[14px] py-2 lg:py-3 btn-natural"}
        />
        <Button
          title={"Submit"}
          href={"/"}
          style={"px-[14px] py-2 lg:py-3 btn-outline"}
        />
      </div>
      <div className="flex flex-row gap-5">
        <Button title={"Submit"} href={"/"} style={"btn-tag"} />
        <Button
          title={"Submit"}
          href={"/"}
          style={"btn-tag-icon"}
          icon={"/img/iconography/briefcase.svg"}
        />
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="headline-1 text-black">
          This is the headline-1 custom class
        </h1>
        <h1 className="headline-2 text-black">
          This is the headline-2 custom class
        </h1>
        <h1 className="headline-3 text-black">
          This is the headline-3 custom class
        </h1>
        <h1 className="headline-4 text-black">
          This is the headline-4 custom class
        </h1>
        <h1 className="headline-5 text-black">
          This is the headline-5 custom class
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        <p className="body-1">This is the body-1 custom class</p>
        <p className="body-2">This is the body-2 custom class</p>
        <p className="body-3">This is the body-3 custom class</p>
        <p className="body-4">This is the body-4 custom class</p>
        <p className="body-5">This is the body-5 custom class</p>
        <p className="body-6">This is the body-6 custom class</p>
        <p className="body-7">This is the body-7 custom class</p>
        <p className="body-8">This is the body-8 custom class</p>
        <p className="body-9">This is the body-9 custom class</p>
        <p className="body-10">This is the body-10 custom class</p>
        <p className="body-11">This is the body-11 custom class</p>
        <p className="body-12">This is the body-12 custom class</p>
        <p className="body-13">This is the body-13 custom class</p>
        <p className="body-14">This is the body-14 custom class</p>
        <p className="body-15">This is the body-15 custom class</p>
        <p className="body-16">This is the body-16 custom class</p>
        <p className="body-17">This is the body-17 custom class</p>
        <p className="body-18">This is the body-18 custom class</p>
        <p className="body-19">This is the body-19 custom class</p>
        <p className="body-20">This is the body-20 custom class</p>
      </div>
    </div>
  );
};

export default ExampleComponents;
