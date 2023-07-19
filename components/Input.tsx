import React, { HTMLInputTypeAttribute } from "react";

type Props = {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
};

const Input = ({ type, placeholder }: Props) => {
  return (
    <div>
      <input
        className="body-14 border-natural-5 bg-natural-2 text-natural-8 placeholder:text-natural-6 focus:border-primary dark:border-natural-8 dark:bg-darkBG-2 dark:text-natural-6 w-full rounded-xl border-[1px] px-5 py-3 outline-none dark:focus:border-natural-6"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
