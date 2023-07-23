/**
 * All Jobs
 * Used in getAllJobs
 */

export type Job = {
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
};

/**
 * Job Details
 * used in fetchJob
 */

export interface EmployerReviews {
  publisher: string;
  employer_name: string;
  score: number;
  num_stars: number;
  review_count: number;
  max_score: number;
  reviews_link: string;
}

type JobRequiredExperience = {
  no_experienc_required: boolean;
  required_experience_in_months: number;
  experience_mentioned: boolean;
  experience_preferred: boolean;
};

type JobRequiredEducation = {
  postgraduate_degree: boolean;
  professional_certification: boolean;
  high_school: boolean;
  associates_degree: boolean;
  bachelors_degree: boolean;
  degree_mentioned: boolean;
  degree_preferred: boolean;
  professional_certification_mentioned: boolean;
};

type JobEstimatedSaleries = {
  location: string;
  job_title: string;
  publisher_name: string;
  publisher_link: string;
  min_salary: number;
  max_salary: number;
  median_salary: number;
  salary_period: string;
  salary_currency: string;
};

type JobApplyOptions = {
  publisher: string;
  apply_link: string;
  is_direct: boolean;
};

type JobDetails = {
  employer_name: string;
  employer_logo: string;
  employer_website: string;
  employer_company_type: string;
  job_publisher: string;
  job_id: string;
  job_employment_type: string;
  job_title: string;
  job_apply_link: string;
  job_apply_is_direct: boolean;
  job_apply_quality_score: number;
  job_description: string;
  job_is_remote: false;
  job_posted_at_timestamp: number;
  job_posted_at_datetime_utc: string;
  job_city: string;
  job_state: string;
  job_country: string;
  job_latitude: number;
  job_longitude: number;
  job_benefits: string[];
  job_google_link: string;
  job_offer_expiration_datetime_utc: string;
  job_offer_expiration_timestamp: string;
  job_required_experience: JobRequiredExperience;
  job_required_skills: string[];
  job_required_education: JobRequiredEducation;
  job_experience_in_place_of_education: boolean;
  job_min_salary: number;
  job_max_salary: number;
  job_salary_currency: string;
  job_salary_period: string;
  job_highlights: {
    Qualifications: string[];
    Responsibilities: string[];
    Benefits: string[];
  };
  job_job_title: string;
  job_posting_language: string;
  job_onet_soc: string;
  job_onet_job_zone: string;
  job_occupational_categories: string[];
  job_naics_code: string;
  job_naics_name: string;
  estimated_salaries: JobEstimatedSaleries[];
  apply_options: JobApplyOptions[];
  employer_reviews: EmployerReviews[];
};

export type JobDetailsResponse = {
  status: string;
  request_id: string;
  parameters: {
    job_id: string;
    extended_publisher_details: boolean;
  };
  data: JobDetails[];
};

/**
 * Homepage Card Component Props
 */

export interface HomepageCardProps {
  jobListings: Job[];
}
