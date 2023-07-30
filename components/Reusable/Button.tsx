"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  title?: String;
  style: string;
  icon?: string;
  onClick?: () => void;
};

const Button = ({ title, style, href, icon, onClick }: Props) => {
  return (
    <Link onClick={onClick} href={href} className={style}>
      {icon && <Image src={icon} alt="icon" width={18} height={18} priority />}
      <span>{title}</span>
    </Link>
  );
};

export default Button;
