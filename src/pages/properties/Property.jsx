import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import defaultImage from "../../assets/images/defaultroom.jpg";
import { useCurrentUser } from "../../context/useCurrentUser";
import {
  fetchDeleteProperty,
  fetchSingleProperty,
} from "../../helpers/ApiCalls";
import MapBox from "./components/MapBox";
import { getLocalUser } from "../../helpers/StorageFunction";

function Property() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { authToken, user } = useCurrentUser();
  const [isLoading, setIsLoading] = useState(true);
  const [property, setProperty] = useState(null);
  const [currentAddress, setCurrentAddress] = useState("");
  const [showForLandlord, setShowForLandlord] = useState(false);

  const imageUrl =
    property && property.image_url ? property.image_url : defaultImage;
  const imageStyle = `mask-image | object-cover w-full max-h-[380px] shadow-md rounded-t-xl my-4 ${
    property && property.image_url ? null : "grayscale"
  }`;

  const formatRent = (price) => {
    const parsedPrice = parseFloat(price);
    return parsedPrice.toFixed(2);
  };

  const handleDelete = async () => {
    fetchDeleteProperty(authToken, id);
    navigate("/properties");
  };

  useEffect(() => {
    const setSingleProperty = async () => {
      const fetchedProperty = await fetchSingleProperty(authToken, id);
      if (fetchedProperty.errors) {
        return console.log(fetchedProperty);
      }
      if (fetchedProperty) {
        setProperty(fetchedProperty.property);
        setIsLoading(false);
      }

      const user = await getLocalUser();
      if (user.type === "landlord") {
        setShowForLandlord(true);
      }
    };
    if (authToken) {
      setSingleProperty();
    }
  }, [authToken]);

  useEffect(() => {
    if (property) {
      setCurrentAddress(
        `${property.address}, ${property.city}, ${property.province} ${property.zip_code}`
      );
    }
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
          {isLoading ? (
            <p className="placeholder-bg | text-transparent">placeholder</p>
          ) : (
            <span className="purple-button | text-xs">AVAILABLE</span>
          )}
          {isLoading ? (
            <p className="placeholder-bg | text-transparent">placeholder</p>
          ) : (
            <p className="text-primary-400">
              <span className="text-xs">PHP</span>
              <span className="font-extrabold text-xl">
                {formatRent(property.rent_per_month)}
              </span>
              <span className="text-primary-400/80 text-sm align-top">
                {" "}
                /month
              </span>
            </p>
          )}
        </div>
        {isLoading ? (
          <>
            <p className="placeholder-bg | w-full text-transparent my-2">
              placeholder
            </p>
            <p className="placeholder-bg | w-full text-transparent my-2">
              placeholder
            </p>
          </>
        ) : (
          <div className="py-2 grid gap-2">
            <p className="text-xl text-primary-400 capitalize font-bold">
              {property.name}
            </p>
            <p className="text-sm text-neutral-900/50 flex flex-wrap justify-between items-baseline gap-2">
              <span>{`${property.address}, ${property.city}, ${property.province} ${property.zip_code}`}</span>
            </p>
            <p className="text-sm">{property.description}</p>
          </div>
        )}
      </section>
      <div className="fixed bottom-[2rem] right-[2rem] z-[3] flex flex-wrap gap-2">
        {showForLandlord ? (
          <>
            <NavLink
              className="blue-button | text-xl"
              to={`/property/edit/${property && property.id}`}
            >
              Edit
            </NavLink>
            <button
              onClick={handleDelete}
              type="button"
              className="blue-button | text-xl"
            >
              Delete
            </button>
          </>
        ) : (
          <NavLink
            className="blue-button | text-xl"
            to={`/rental/new/${property && property.id}`}
          >
            Rent
          </NavLink>
        )}
      </div>
      <section>
        <div className="py-8">
          <MapBox currentAddress={currentAddress} />
        </div>
      </section>
    </main>
  );
}

export default Property;
