import React from "react";
import FeaturedCard from "./Cards/FeaturedCard";

const HomepageFeatured = () => {
  return (
    <section className="flex flex-col gap-4">
      {/* Dummy components */}
      <h5 className="headline-5">Featured Companies</h5>
      <div className="flex flex-wrap gap-6 md:gap-6">
        <FeaturedCard
          title="Mailchimp"
          location="California, USA"
          logo="/img/company-logo/mailchimp.svg"
          reviews={{
            publisher: "test",
            employer_name: "test",
            score: 4,
            num_stars: 5,
            max_score: 5,
            review_count: 10000,
            reviews_link: "/",
          }}
        />
        <FeaturedCard
          title="Apple"
          location="California, USA"
          logo="/img/company-logo/apple.svg"
          reviews={{
            publisher: "test",
            employer_name: "test",
            score: 4.5,
            num_stars: 4.5,
            max_score: 5,
            review_count: 10000,
            reviews_link: "/",
          }}
        />
        <FeaturedCard
          title="Google"
          location="California, USA"
          logo="/img/company-logo/google.svg"
          reviews={{
            publisher: "test",
            employer_name: "test",
            score: 4,
            num_stars: 3.5,
            max_score: 5,
            review_count: 10000,
            reviews_link: "/",
          }}
        />
      </div>
    </section>
  );
};

export default HomepageFeatured;
