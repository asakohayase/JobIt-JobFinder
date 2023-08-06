"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Loader() {
  return (
    <div className="padding-layout mt-96 flex w-full items-center justify-center">
      <div className="rounded-jobit bg-primary px-16 py-10 dark:bg-transparent">
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 495 633"
          className="h-60"
          animate={{
            scale: [0.9, 0.95],
            opacity: [0.8, 0.4],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            // times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <g>
            <defs>
              <linearGradient
                id="idvjzJmsvRcg802009630"
                x1="0.49751243781094523"
                x2="0.5024875621890548"
                y1="0"
                y2="1"
              >
                <stop
                  offset="0"
                  stopColor="rgb(255,255,255)"
                  stopOpacity="1"
                ></stop>
                <stop
                  offset="1"
                  stopColor="rgb(251,252,255)"
                  stopOpacity="1"
                ></stop>
              </linearGradient>
            </defs>
            <motion.path
              d="M 247.5 319.977 C 333.904 319.977 403.953 248.377 403.953 160.047 C 403.953 71.716 333.904 0.116 247.5 0.116 C 161.096 0.116 91.047 71.716 91.047 160.047 C 91.047 248.377 161.096 319.977 247.5 319.977 Z"
              fill="url(#idvjzJmsvRcg802009630)"
            ></motion.path>
          </g>
          <path
            d="M 236.374 629.059 C 140.02 563.752 59.881 474.754 2.737 369.583 C 0.528 365.324 0.054 360.374 1.416 355.773 C 2.708 351.253 5.783 347.453 9.934 345.246 L 121.67 286.989 C 129.485 282.942 138.914 286.016 143.253 294.019 C 199.743 394.609 283.269 474.942 383.093 524.667 C 346.546 563.846 305.773 598.857 261.518 629.059 C 253.912 634.158 243.98 634.158 236.374 629.059 Z"
            fill="rgb(255,255,255)"
          ></path>
          <g>
            <defs>
              <linearGradient
                id="idmxoj_3iE7g-1289235490"
                x1="0.49751243781094523"
                x2="0.5024875621890548"
                y1="0"
                y2="1"
              >
                <stop
                  offset="0"
                  stopColor="rgb(255,255,255)"
                  stopOpacity="1"
                ></stop>
                <stop
                  offset="1"
                  stopColor="rgba(255,255,255,0.62)"
                  stopOpacity="0.62"
                ></stop>
              </linearGradient>
            </defs>
            <path
              d="M 258.619 629.059 C 354.98 563.766 435.119 474.761 492.242 369.583 C 494.46 365.335 494.948 360.394 493.605 355.794 C 492.327 351.274 489.267 347.467 485.129 345.246 L 373.316 286.989 C 365.508 282.942 356.072 286.016 351.74 294.019 C 295.257 394.622 211.724 474.949 111.907 524.667 C 148.427 563.871 189.201 598.884 233.475 629.059 C 241.081 634.158 251.013 634.158 258.619 629.059 Z"
              fill="url(#idmxoj_3iE7g-1289235490)"
            ></path>
          </g>
        </motion.svg>
      </div>
    </div>
  );
}
