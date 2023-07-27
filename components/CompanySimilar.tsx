import React from "react";
import { CompanyPageProps } from "@types";
import SimilarCompanies from "@components/InlineCompanies";

const CompanypageRecommended = async ({ jobDetails }: CompanyPageProps) => {
  // Need to create algo for recommended
  return (
    <div>
      <section className="flex w-[23rem] shrink-0 flex-col gap-4">
        <div className="flex items-center">
          <h5 className="headline-5">Similar Companies</h5>
        </div>
        <section className="flex w-full flex-col items-start gap-5 rounded-jobit">
          {jobDetails.slice(0, 8).map((jobDetails) => (
            <React.Fragment key={jobDetails.job_id}>
              <SimilarCompanies data={jobDetails} />
            </React.Fragment>
          ))}
        </section>
      </section>
    </div>
  );
};

export default CompanypageRecommended;
