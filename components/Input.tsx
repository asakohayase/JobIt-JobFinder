import { EstimatedSalaryData } from "@/types";
import { options } from "@/utils";
import React, { useEffect, useState } from "react";

type Props = {
  setEstimatedSalaries: React.Dispatch<React.SetStateAction<EstimatedSalaryData>>
}

const initialValues = {
  position: "",
  location: "",
  radius: "",
}
const Input = ({setEstimatedSalaries}: Props) => {

  const [values, setValues] = useState(initialValues)


const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const {name, value} = e.target
  setValues({
    ...values, [name]: value,
  });
}

const handleKeyPress = (e: React.KeyboardEvent<HTMLFormElement>) => {
  if (e.key === "Enter") {
    fetchData();
  }
};

const fetchData = async () => {
  const { position, location, radius } = values;
  if (!location || !position || !radius) return "No information provided";
  const response = await fetch(
    `/api/estimatedsalaries?position=${position}&location=${location}&radius=${radius}`,
    options
  );
  const data = await response.json();
  setEstimatedSalaries(data);
};

useEffect(() => {
  fetchData();
}, [values]);

  return (
    <form className="flex h-full flex-col justify-center" onKeyPress={handleKeyPress} >
      <label htmlFor="job" className="body-10 text-natural-6 mb-3">
        Job Title
      </label>
      <input
      value={values.position}
      onChange={handleInputChange}
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
            onChange={handleInputChange}
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
          onChange={handleInputChange}
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
