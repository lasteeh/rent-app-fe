import React from "react";
import defaultRoom from "../../../assets/images/defaultroom.jpg";

function Property({ info }) {
  const { name, description, image_url, address, city, province, zip_code } =
    info;

  const imageUrl = image_url ? image_url : defaultRoom;
  const imageStyle = `object-cover h-40 shadow-md rounded-xl ${
    image_url ? nil : "grayscale"
  }`;

  return (
    <div className="flex flex-col items-stretch justify-start gap-2">
      <img src={imageUrl} alt="" className={imageStyle} />
      <div className="grid grid-cols-[1fr_auto] grid-rows-[auto_auto] gap-2">
        <div className="flex flex-wrap items-baseline gap-2">
          <span className="font-bold text-lg text-accent-400 leading-none">
            IDK
          </span>
          <span className="text-xs leading-none">{address}</span>
        </div>
        <p className="row-span-2 text-primary-400">
          <span className="text-xs">PHP</span>
          <span className="font-extrabold text-xl">2,000.00</span>
          <span className="text-primary-400/80 text-sm align-top"> /month</span>
        </p>
        <p className="text-lg text-primary-400 capitalize font-bold">{name}</p>
      </div>
    </div>
  );
}

export default Property;
