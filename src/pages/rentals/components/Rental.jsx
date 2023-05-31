import React, { useEffect, useState } from "react";
import defaultImage from "../../../assets/images/defaultroom.jpg";
import { useCurrentUser } from "../../../context/useCurrentUser";
import { fetchSingleProperty } from "../../../helpers/ApiCalls";
import { getNextBillingDate } from "../../../helpers/generalFunction";

function Rental({ rental }) {
  const { authToken, user } = useCurrentUser();
  const {
    duration_months,
    id,
    property_id,
    renter_id,
    start_date,
    rent_per_month,
  } = rental;
  const [property, setProperty] = useState("");
  const [currentAddress, setCurrentAddress] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const placeholderSpan = (
    <span className="placeholder-bg | text-transparent mx-2">placeholder</span>
  );

  const formatRent = (price) => {
    const parsedPrice = parseFloat(price);
    return parsedPrice.toFixed(2);
  };

  const imageUrl =
    property && property.image_url ? property.image_url : defaultImage;
  const imageStyle = `object-cover w-full max-h-20 shadow-md rounded-xl my-4 ${
    property && property.image_url ? null : "grayscale"
  }`;

  const nextBillingDate = getNextBillingDate(start_date, 1);

  useEffect(() => {
    const setSingleRental = async () => {
      const fetchedProperty = await fetchSingleProperty(authToken, property_id);
      if (fetchedProperty.errors) {
        return console.log("error");
      } else {
        setProperty(fetchedProperty.property);
        setIsLoading(false);
      }
    };
    if (authToken) {
      setSingleRental();
    }
  }, [authToken]);

  useEffect(() => {
    console.log(property);

    if (property) {
      setCurrentAddress(
        `${property.address}, ${property.city}, ${property.province} ${property.zip_code}`
      );
    }
  }, [property]);

  return (
    <div>
      <img src={imageUrl} className={imageStyle} />
      {isLoading ? (
        <>
          <p>
            {placeholderSpan}

            {placeholderSpan}
            {placeholderSpan}
          </p>
          <p>
            {placeholderSpan}

            {placeholderSpan}
            {placeholderSpan}
          </p>
        </>
      ) : (
        <>
          <p className="text-xs font-bold text-primary-400">{currentAddress}</p>
          <p>
            <span>PHP </span>
            <span>{formatRent(parseFloat(rent_per_month))}</span>
            <span>/ month</span>
            <span className="text-xs opacity-50">
              {" "}
              ({duration_months}{" "}
              {parseFloat(duration_months) > 1 ? "months" : "month"})
            </span>
          </p>
          <p className="text-sm">
            <span>Next Billing: </span>
            <span className="font-bold text-primary-400">
              {nextBillingDate.toLocaleString()}
            </span>
          </p>
        </>
      )}
    </div>
  );
}

export default Rental;
