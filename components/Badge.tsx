import Image from "next/image";
import React from "react";

type Props = {
  title: String;
  style: string;
  icon?: string;
};

const Badge = ({ title, style, icon }: Props) => {
  return (
    <div className={style}>
      {icon && <Image src={icon} alt="icon" width={18} height={18} priority />}
      <span>{title}</span>
    </div>
  );
};

export default Badge;
