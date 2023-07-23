"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./Reusable/Button";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const TestValidation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        defaultValue="test"
        {...register("example")}
        className="body-14 mb-5 w-full rounded-xl border-[1px] border-natural-5 bg-natural-2 px-5 py-3 text-natural-8 outline-none placeholder:text-natural-6 focus:border-primary dark:border-natural-8 dark:bg-darkBG-2 dark:text-natural-6 dark:focus:border-natural-6"
      />
      <input
        {...register("exampleRequired", { required: true })}
        className="body-14 mb-5 w-full rounded-xl border-[1px] border-natural-5 bg-natural-2 px-5 py-3 text-natural-8 outline-none placeholder:text-natural-6 focus:border-primary dark:border-natural-8 dark:bg-darkBG-2 dark:text-natural-6 dark:focus:border-natural-6"
      />
      {errors.exampleRequired && <span>This field is required</span>}

      <Button
        title={"Submit"}
        href={"/"}
        style={"px-[14px] py-2 lg:py-3 btn-primary"}
      />
    </form>
  );
};

export default TestValidation;
