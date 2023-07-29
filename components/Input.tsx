import React from "react";

const Input = () => {
  return (
    <form className="flex h-full flex-col justify-center ">
      <label htmlFor="first" className="body-10 mb-3 text-natural-6">
        Job Title
      </label>
      <input
        type="text"
        id="first"
        name="Job"
        placeholder="Senior User Experience Designer"
        className="w-[577px] rounded-xl border border-input bg-natural-2 py-3 pl-5 placeholder:text-natural-8"
      />

      <div className="flex flex-row justify-between">
        <div className="mt-6 flex flex-col">
          <label htmlFor="first" className="body-10 mb-3 text-natural-6">
            Location
          </label>
          <input
            type="text"
            id="first"
            name="Job"
            placeholder="New-York, NY, USA"
            className="w-[258px] rounded-xl border border-input bg-natural-2 px-5 py-3 placeholder:text-natural-8"
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
            className="w-[258px] rounded-xl border border-input bg-natural-2 px-5 py-3 placeholder:text-natural-8"
          />
        </div>
      </div>
    </form>
  );
};

export default Input;
