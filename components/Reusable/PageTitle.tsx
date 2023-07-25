import React from "react";

const PageTitle = ({ title = "Let's find your dream job" }) => {
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <h1 className="headline-2 tracking-wide">{title}</h1>
      {/* Current Date */}
      <p className="body-8 tracking-wide text-natural-6">
        {new Date().toLocaleString("en-us", {
          weekday: "long",
          month: "short",
          day: "2-digit",
          year: "numeric",
        })}
      </p>
    </div>
  );
};

export default PageTitle;
