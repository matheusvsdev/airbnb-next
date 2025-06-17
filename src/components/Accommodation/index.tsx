import { IconHeartFilled, IconStarFilled } from "@/assets/icons";
import React from "react";

interface AccommodationProps {
  children: React.ReactNode;
  location: string
  host: string
  date: string
  price: number
  evaluation: number
  badge: boolean
}

export default function Accommodation({
  children, location, host, date, price, evaluation, badge
}: AccommodationProps) {
  return (
    <figure className="relative">
      <div className="p-2 absolute w-full flex flex-row justify-between items-center">
        <span className="text-sm bg-white rounded-full px-4 py-1 font-semibold shadow-lg shadow-gray-600">
          Preferido dos hóspedes
        </span>
        <IconHeartFilled
          className="stroke-white opacity-80 cursor-pointer hover:text-red-500"
          aria-label="Favoritos"
          size={25}
        />
      </div>
      {children}
      <figcaption className="pt-2">
        <div className="flex flex-row justify-between">
          <span className="font-normal">{location}</span>
          <div className="flex flex-row items-center gap-1">
            <IconStarFilled aria-label="Avaliações" size={15} />
            <span className="font-normal">{evaluation}</span>
          </div>
        </div>
        <div>Anfitriã(o): {host}</div>
        <div>{date}</div>
        <div className="font-semibold">R${price}</div>
      </figcaption>
    </figure>
  );
}
