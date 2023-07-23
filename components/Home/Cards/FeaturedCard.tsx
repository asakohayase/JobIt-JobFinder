import React from "react";
import Image from "next/image";
import Button from "../../Reusable/Button";
import { EmployerReviews } from "@types";

interface Props {
  title: string;
  location: string;
  logo: string;
  reviews: EmployerReviews;
}

const displayStars = (numStars: number) => {
  const stars = [];

  for (let i = 1; i <= Math.floor(numStars); i++) {
    stars.push(
      <Image
        alt={"filled star"}
        width={24}
        height={24}
        src={"/img/iconography/star-filled.svg"}
      />
    );
  }

  if (stars.length % 1 < 0.5 && stars.length < 5 && stars.length !== 0) {
    stars.push(
      <Image
        alt={"filled star"}
        width={24}
        height={24}
        src={"/img/iconography/star-half.svg"}
      />
    );
  }

  if (stars.length < 5)
    for (let i = stars.length; i < 5; i++) {
      stars.push(
        <Image
          alt={"empty star"}
          width={24}
          height={24}
          src={"/img/iconography/star-empty.svg"}
        />
      );
    }

  return stars;
};

const FeaturedCard = ({ title, location, logo, reviews }: Props) => {
  return (
    <div className="flex w-full flex-col gap-2 rounded-jobit bg-white p-6 dark:bg-darkBG-2 md:w-64">
      {/* Company Logo & Name */}
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 ">
          <Image
            src={logo}
            alt={`${reviews.employer_name} logo`}
            fill
            priority
            className="object-contain"
          />
        </div>
        <p className="body-6">{title}</p>
      </div>
      {/* Company Location & Vacancy */}
      <div className="body-15 flex gap-4 text-natural-6 md:flex-col md:gap-2">
        <div className="flex gap-2">
          {/* Review */}
          <div className="flex">{displayStars(reviews.num_stars)}</div>
        </div>
        {/* Location */}
        <div className="flex gap-2">
          <div className="relative w-5">
            <Image
              src={"/img/iconography/pin.svg"}
              alt={"Location Pin"}
              fill
              priority
              className="object-contain"
            />
          </div>
          <p>{location}</p>
        </div>
      </div>
      {/* See All Button */}
      <Button
        title={"See All"}
        style="flex justify-center align-center p-2 dark:bg-darkBG-3 rounded-jobit text-natural-6 body-11 bg-natural-4 hover:bg-natural-5 hover:dark:bg-darkBG-3/60"
        href="/"
        icon=""
      />
    </div>
  );
};

export default FeaturedCard;
