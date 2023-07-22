import React from "react";
import FeaturedCard from "./Cards/FeaturedCard";

const HomepageFeatured = () => {
  return (
    <section className="flex flex-col gap-4">
      {/* Dummy components until Home Page Integration gets implemented */}
      <h5 className="headline-5">Featured Companies</h5>
      <div className="flex flex-wrap gap-6 md:gap-6">
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </div>
    </section>
  );
};

export default HomepageFeatured;
