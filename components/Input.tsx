import { EstimatedSalaryData, EstimatedSalaryResponse } from "@/types";
import React, { useState } from "react";

type Props = {
  setEstimatedSalaries: React.Dispatch<React.SetStateAction<EstimatedSalaryData>>
  estimatedSalaries: EstimatedSalaryData
}

const initialValues = {
  position: "",
  location: "",
  radius: "",
}
const Input = ({setEstimatedSalaries, estimatedSalaries}: Props) => {

  const [values, setValues] = useState(initialValues)


const handleInpuChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const {name, value} = e.target
  setValues({
    ...values, [name]: value,
  });
}

const handleKeyPress = (e: React.KeyboardEvent<HTMLFormElement>) => {
  if (e.key === "Enter") {
    handleSubmit(e);
  }
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log(values)
  try {
    const res = await fetch("/api/estimatedsalaries", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...values}),
    });

    const { data }: EstimatedSalaryResponse = await res.json();
    setEstimatedSalaries(data);

  } catch (error) {
    console.log(error);
  }

}

  return (
    <form className="flex h-full flex-col justify-center" onKeyPress={handleKeyPress}>
      <label htmlFor="job" className="body-10 text-natural-6 mb-3">
        Job Title
      </label>
      <input
      value={values.postion}
      onChange={handleInpuChange}
        type="text"
        id="job"
        name="position"
        placeholder="Senior User Experience Designer"
        className="border-input bg-natural-2 placeholder:text-natural-8 dark:border-natural-8 dark:bg-darkBG-2 dark:placeholder:text-natural-6 rounded-xl border py-3 pl-5 md:w-[577px]"
      />

      <div className="flex flex-col justify-between md:flex-row">
        <div className="mt-6 flex flex-col">
          <label htmlFor="loc" className="body-10 text-natural-6 mb-3">
            Location
          </label>
          <input
            value={values.location}
            onChange={handleInpuChange}
            type="text"
            id="loc"
            name="location"
            placeholder="New-York, NY, USA"
            className="border-input bg-natural-2 placeholder:text-natural-8 dark:border-natural-8 dark:bg-darkBG-2 dark:placeholder:text-natural-6 rounded-xl border px-5 py-3 md:w-[258px]"
          />
        </div>
        <div className="mt-6 flex flex-col">
          <label htmlFor="rad" className="body-10 text-natural-6 mb-3">
            Radius
          </label>
          <input
          value={values.radius}
          onChange={handleInpuChange}
            type="text"
            id="rad"
            name="radius"
            placeholder="100"
            className="border-input bg-natural-2 placeholder:text-natural-8 dark:border-natural-8 dark:bg-darkBG-2 dark:placeholder:text-natural-6 rounded-xl border px-5 py-3 md:w-[258px]"
          />
        </div>
      </div>
    </form>
  );
};

export default Input;
