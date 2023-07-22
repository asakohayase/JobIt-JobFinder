type EmployerReviews = {
  publisher: String;
  employer_name: String;
  score: Number;
  num_stars: Number;
  review_count: Number;
  max_score: Number;
  reviews_link: String;
};

type JobRequiredExperience = {
  no_experienc_required: Boolean;
  required_experience_in_months: Number;
  experience_mentioned: Boolean;
  experience_preferred: Boolean;
};

type JobRequiredEducation = {
  postgraduate_degree: Boolean;
  professional_certification: Boolean;
  high_school: Boolean;
  associates_degree: Boolean;
  bachelors_degree: Boolean;
  degree_mentioned: Boolean;
  degree_preferred: Boolean;
  professional_certification_mentioned: Boolean;
};

type JobEstimatedSaleries = {
  location: String;
  job_title: String;
  publisher_name: String;
  publisher_link: String;
  min_salary: Number;
  max_salary: Number;
  median_salary: Number;
  salary_period: String;
  salary_currency: String;
};

type JobApplyOptions = {
  publisher: String;
  apply_link: String;
  is_direct: Boolean;
};

type JobDetails = {
  employer_name: String;
  employer_logo: String;
  employer_website: String;
  employer_company_type: String;
  employer_company_type: String;
  job_publisher: String;
  job_id: String;
  job_employment_type: String;
  job_title: String;
  job_apply_link: String;
  job_apply_is_direct: Boolean;
  job_apply_quality_score: Number;
  job_description: String;
  job_is_remote: false;
  job_posted_at_timestamp: Number;
  job_posted_at_datetime_utc: String;
  job_city: String;
  job_state: String;
  job_country: String;
  job_latitude: Number;
  job_longitude: Number;
  job_benefits: String[];
  job_google_link: String;
  job_offer_expiration_datetime_utc: String;
  job_offer_expiration_timestamp: String;
  job_required_experience: JobRequiredExperience;
  job_required_skills: String[];
  job_required_education: JobRequiredEducation;
  job_experience_in_place_of_education: Boolean;
  job_min_salary: Number;
  job_max_salary: Number;
  job_salary_currency: String;
  job_salary_period: String;
  job_highlights: {
    Qualifications: String[];
    Responsibilities: String[];
    Benefits: String[];
  };
  job_job_title: String;
  job_posting_language: String;
  job_onet_soc: String;
  job_onet_job_zone: String;
  job_occupational_categories: String[];
  job_naics_code: String;
  job_naics_name: String;
  estimated_salaries: JobEstimatedSaleries[];
  apply_options: JobApplyOptions[];
  employer_reviews: EmployerReviews[];
};

export type JobDetailsResponse = {
  status: String;
  request_id: String;
  parameters: {
    job_id: String;
    extended_publisher_details: Boolean;
  };
  data: JobDetails[];
}
type Job = {
  job_id: number;
  job_title: string;
  job_is_remote: boolean;
  employer_name: string;
  job_city: string;
  job_employment_type: string;
  job_description: string;
  job_posted_at_datetime_utc: string;
  job_min_salary: number;
  job_max_salary: number;
  job_required_skills: string[];
  employer_logo: string;
  job_apply_link: string;
};

type jobResponseParameters = {
  query: string;
  page: number;
  num_pages: number;
};

export type jobResponse = {
  status: string;
  request_id: number;
  parameters: jobResponseParameters;
  data: Job[];
