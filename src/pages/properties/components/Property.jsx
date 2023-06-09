import React from "react";
import defaultRoom from "../../../assets/images/defaultroom.jpg";
import { NavLink } from "react-router-dom";

function Property({ property }) {
  const {
    name,
    description,
    image_url,
    address,
    city,
    province,
    zip_code,
    rent_per_month,
  } = property;

  const imageUrl = image_url ? image_url : defaultRoom;
  const imageStyle = `object-cover h-48 shadow-md rounded-xl ${
    image_url ? null : "grayscale"
  }`;

  const formatRent = (price) => {
    const parsedPrice = parseFloat(price);
    return parsedPrice.toFixed(2);
  };

  return (
    <NavLink
      className="flex flex-col items-stretch justify-start gap-2"
      to={`/property/${property.id}`}
    >
      <img src={imageUrl} alt="" className={imageStyle} />
      <div className="grid grid-cols-[1fr_auto] grid-rows-[auto_auto] gap-[0.0625rem]">
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="font-bold text-lg text-accent-400 leading-none">
            {address}
          </span>
          <span className="text-xs leading-none">
            {city}, {province}
          </span>
        </div>
        <p className="row-span-2 text-primary-400">
          <span className="text-xs">PHP</span>
          <span className="font-extrabold text-xl">
            {formatRent(rent_per_month)}
          </span>
          <span className="text-primary-400/80 text-sm align-top"> /month</span>
        </p>
        <p className="text-lg text-primary-400 capitalize font-bold">{name}</p>
      </div>
    </NavLink>
  );
}

export default Property;
