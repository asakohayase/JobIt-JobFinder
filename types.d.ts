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
};
