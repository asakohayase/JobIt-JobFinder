import Filter from "@/components/Filter";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const data = [
    "Fulltime",
    "parttime",
    "contractor",
    "BlaBlaBla",
    "BlaBlaBla",
    "BlaBlaBla",
    "BlaBlaBla",
    "BlaBlaBla",
    "BlaBlaBla",
    "BlaBlaBla",
  ];

  return (
    <div className="padding-layout">
      <div className="grid gap-[30px] py-10">
        <Filter data={data} title={"Type Of Employment"} length={10} />
        <Filter data={data} title={"Experience Level"} length={10} />
        <Filter data={data} title={"Salary Range"} length={10} />
        <Filter data={data} title={"Location"} length={10} />
        <Filter data={data} title={"Language"} length={10} />
        <Filter data={data} title={"Facility"} length={10} />
      </div>
    </div>
  );
};

export default page;
