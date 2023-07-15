"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  href: string;
  title: String;
  style: string;
  icon?: string;
};

const Button = ({ title, style, href, icon }: Props) => {
  const notify = () => toast("Submitted!");
  // const error = () => toast.error("Error!");

  return (
    <>
      <Link href={href} className={style} onClick={notify}>
        {icon && (
          <Image src={icon} alt="icon" width={18} height={18} priority />
        )}
        <span>{title}</span>s
      </Link>
      <ToastContainer />
    </>
  );
};

export default Button;
