import { inlineJobCardData } from "@data";
import React from "react";
import Button from "./Button";
import InlineJobCard from "./InlineJobCard";

const HomepageRecommended = () => {
  return (
    <div>
      <section className="flex w-[23rem] shrink-0 flex-col gap-4">
        <div className="flex items-center justify-between">
          <h5 className="headline-5">Recommended For You</h5>
          <Button
            style="body-11 border border-natural-2 dark:border-darkBG-2 px-2 py-1 rounded-jobit text-natural-6"
            title={"See All"}
            href=""
          />
        </div>
        <div className="flex flex-col items-center gap-2 rounded-jobit bg-white p-4 dark:bg-darkBG-2">
          <InlineJobCard data={inlineJobCardData} />
          <InlineJobCard data={inlineJobCardData} />
          <InlineJobCard data={inlineJobCardData} />
          <InlineJobCard data={inlineJobCardData} />
          <InlineJobCard data={inlineJobCardData} />
        </div>
      </section>
    </div>
  );
};

export default HomepageRecommended;
