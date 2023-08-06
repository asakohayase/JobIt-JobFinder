import { JobDetails } from "@/types";
import React from "react";

interface Props {
  jobs: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  pageSize: number;
}

const Pagination = ({ jobs, currentPage, onPageChange, pageSize }: Props) => {
  const pagesCount = Math.ceil(jobs / pageSize);

  if (pagesCount === 1) return null;
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <section className="mt-4">
      <ul className={"flex items-center justify-center gap-1"}>
        {pages.map((page) => (
          <li
            key={page}
            className={`${
              page === currentPage
                ? "bg-primary text-white"
                : "hover:text-black hover:dark:text-white"
            } m-2 cursor-pointer rounded-xl border border-natural-8 px-4 py-2 text-natural-6`}
            onClick={() => onPageChange(page)}
          >
            <a className={""}>{page}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Pagination;

export const paginate = (
  items: JobDetails[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize);
};
