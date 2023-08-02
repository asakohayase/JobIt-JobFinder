import SidebarFilter from "@/components/SidebarFilter";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  return (
    <div className="padding-layout">
      <SidebarFilter />
    </div>
  );
};

export default page;
