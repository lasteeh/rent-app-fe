import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import defaultImage from "../../assets/images/defaultroom.jpg";
import { useCurrentUser } from "../../context/useCurrentUser";
import { fetchSingleProperty } from "../../helpers/ApiCalls";

function Property() {
  const { id } = useParams();
  const { authToken, user } = useCurrentUser();
  const [isLoading, setIsLoading] = useState(true);
  const [property, setProperty] = useState(null);

  const imageUrl =
    property && property.image_url ? property.image_url : defaultImage;
  const imageStyle = `mask-image | object-cover w-full max-h-[380px] shadow-md rounded-t-xl my-4 ${
    property && property.image_url ? null : "grayscale"
  }`;

  useEffect(() => {
    const setSingleProperty = async () => {
      const fetchedProperty = await fetchSingleProperty(authToken, id);
      if (fetchedProperty.errors) {
        return console.log(fetchedProperty);
      }
      if (fetchedProperty) {
        setProperty(fetchedProperty.property);
        setIsLoading(false);
        console.log(property);
      }
    };
    if (authToken) {
      setSingleProperty();
    }
  }, [authToken]);

  useEffect(() => {
    console.log(property);
  }, [property]);
  return (
    <main className="px-8">
      <section className="relative py-8 isolate">
        <div className="absolute inset-x-0 top-8 flex flex-wrap justify-between z-[2]">
          <NavLink
            className="text-primary-400 font-bold text-6xl px-2"
            to="/properties"
          >
            &#8249;
          </NavLink>
        </div>
        {isLoading ? (
          <div className={`placeholder-bg | h-screen ${imageStyle}`}></div>
        ) : (
          <img src={imageUrl} className={imageStyle} />
        )}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <span className="purple-button | text-xs">AVAILABLE</span>
          <p className="text-primary-400">
            <span className="text-xs">PHP</span>
            <span className="font-extrabold text-xl">2,000.00</span>
            <span className="text-primary-400/80 text-sm align-top">
              {" "}
              /month
            </span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Property;
