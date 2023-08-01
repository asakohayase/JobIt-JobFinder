import React from "react";

const Input = () => {
  return (
    <form className="flex h-full flex-col justify-center">
      <label htmlFor="first" className="body-10 mb-3 text-natural-6">
        Job Title
      </label>
      <input
        type="text"
        id="first"
        name="Job"
        placeholder="Senior User Experience Designer"
        className="rounded-xl border border-input bg-natural-2 py-3 pl-5 placeholder:text-natural-8 dark:border-natural-8 dark:bg-darkBG-2 dark:placeholder:text-natural-6 md:w-[577px]"
      />

      <div className="flex flex-col justify-between md:flex-row">
        <div className="mt-6 flex flex-col">
          <label htmlFor="first" className="body-10 mb-3 text-natural-6">
            Location
          </label>
          <input
            type="text"
            id="first"
            name="Job"
            placeholder="New-York, NY, USA"
            className="rounded-xl border border-input bg-natural-2 px-5 py-3 placeholder:text-natural-8 dark:border-natural-8 dark:bg-darkBG-2 dark:placeholder:text-natural-6 md:w-[258px]"
          />
        </div>
        <div className="mt-6 flex flex-col">
          <label htmlFor="first" className="body-10 mb-3 text-natural-6">
            Radius
          </label>
          <input
            type="text"
            id="first"
            name="Job"
            placeholder="100"
            className="rounded-xl border border-input bg-natural-2 px-5 py-3 placeholder:text-natural-8 dark:border-natural-8 dark:bg-darkBG-2 dark:placeholder:text-natural-6 md:w-[258px]"
          />
        </div>
      </div>
    </form>
  );
};

export default Input;
