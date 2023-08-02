import React from "react";
import Filter from "./Filter";

type Props = {};

const SidebarFilter = (props: Props) => {
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
    <div>
      <Filter data={data} title={"Type Of Employment"} length={10} />
      <Filter data={data} title={"Experience Level"} length={10} />
      <Filter data={data} title={"Salary Range"} length={10} />
      <Filter data={data} title={"Location"} length={10} />
      <Filter data={data} title={"Language"} length={10} />
      <Filter data={data} title={"Facility"} length={10} />
    </div>
  );
};

export default SidebarFilter;
