import React, { HTMLInputTypeAttribute } from "react";

type Props = {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
};

const Input = ({ type, placeholder }: Props) => {
  return (
    <div>
      <input
        className="body-14 w-full rounded-xl border-[1px] border-natural-5 bg-natural-2 text-natural-8 outline-none placeholder:text-natural-6 focus:border-primary dark:border-natural-8 dark:bg-darkBG-2 dark:text-natural-6 lg:px-5 lg:py-3"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
