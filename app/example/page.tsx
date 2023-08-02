import SidebarFilter from "@/components/SidebarFilter";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  return (
    <div className="padding-layout">
      <div className="grid gap-[30px] py-10">
        <SidebarFilter />
      </div>
    </div>
  );
};

export default page;
