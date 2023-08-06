import { EstimatedSalaryData, InitialValuesType } from "@/types";
import { options } from "@/utils";
import React, { useCallback, useEffect } from "react";

type Props = {
  values: InitialValuesType;
  setValues: React.Dispatch<React.SetStateAction<InitialValuesType>>;
  setEstimatedSalaries: React.Dispatch<
    React.SetStateAction<EstimatedSalaryData[]>
  >;
};

const Input = ({ values, setValues, setEstimatedSalaries }: Props) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      fetchData();
    }
  };

  const fetchData = useCallback(async () => {
    const { position, location, radius } = values;
    if (!location || !position || !radius) return "No information provided";
    const response = await fetch(
      `/api/estimatedsalaries?position=${position}&location=${location}&radius=${radius}`,
      options
    );
    const data: EstimatedSalaryData[] = await response.json();
    setEstimatedSalaries(data);
  }, [values, setEstimatedSalaries]);

  useEffect(() => {
    fetchData();
  }, [values, fetchData]);

  return (
    <form
      className="flex h-full flex-col justify-center"
      onKeyPress={handleKeyPress}
    >
      <label htmlFor="job" className="body-10 mb-3 text-natural-6">
        Job Title
      </label>
      <input
        value={values.position}
        onChange={handleInputChange}
        type="text"
        id="job"
        name="position"
        placeholder="Senior User Experience Designer"
        className="rounded-xl border border-input bg-natural-2 py-3 pl-5 placeholder:text-natural-8 dark:border-natural-8 dark:bg-darkBG-2 dark:placeholder:text-natural-6 md:w-[577px]"
      />

      <div className="flex flex-col justify-between md:flex-row">
        <div className="mt-6 flex flex-col">
          <label htmlFor="loc" className="body-10 mb-3 text-natural-6">
            Location
          </label>
          <input
            value={values.location}
            onChange={handleInputChange}
            type="text"
            id="loc"
            name="location"
            placeholder="New-York, NY, USA"
            className="rounded-xl border border-input bg-natural-2 px-5 py-3 placeholder:text-natural-8 dark:border-natural-8 dark:bg-darkBG-2 dark:placeholder:text-natural-6 md:w-[258px]"
          />
        </div>
        <div className="mt-6 flex flex-col">
          <label htmlFor="rad" className="body-10 mb-3 text-natural-6">
            Radius
          </label>
          <input
            value={values.radius}
            onChange={handleInputChange}
            type="text"
            id="rad"
            name="radius"
            placeholder="100"
            className="rounded-xl border border-input bg-natural-2 px-5 py-3 placeholder:text-natural-8 dark:border-natural-8 dark:bg-darkBG-2 dark:placeholder:text-natural-6 md:w-[258px]"
          />
        </div>
      </div>
    </form>
  );
};

export default Input;
