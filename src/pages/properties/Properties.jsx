import React, { useEffect, useState } from "react";
import Property from "./components/Property";
import PlaceholderProperty from "./components/PlaceholderProperty";
import { fetchProperties } from "../../helpers/ApiCalls";
import { useCurrentUser } from "../../context/useCurrentUser";
import { NavLink } from "react-router-dom";
import { getLocalUser } from "../../helpers/StorageFunction";

function Properties() {
  const { authToken, user } = useCurrentUser();
  const [propertyList, setPropertyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForLandlord, setShowForLandlord] = useState(false);

  useEffect(() => {
    const setProperties = async () => {
      const properties = await fetchProperties(authToken);
      if (properties.properties) {
        setPropertyList(properties.properties);
        setIsLoading(false);
        console.log(properties);
      }

      const user = await getLocalUser();
      if (user.type === "landlord") {
        setShowForLandlord(true);
      }
    };
    if (authToken) {
      setProperties();
    }
  }, [authToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <main className="relative">
      <section>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-stretch p-4"
        >
          <p className="text-xs font-semibold">Your Location</p>
          <div className="flex flex-nowrap items-center justify-start gap-2">
            <input
              type="text"
              placeholder="Enter Locality"
              className="grow shrink border-b-2 border-primary-400/20 py-[0.125rem] text-2xl font-semibold"
            />
            <button type="submit" className="text-primary-400 text-2xl">
              <span>&#128269;</span>
            </button>
          </div>
        </form>
      </section>

      <section>
        <div className="grid auto-rows-auto grid-cols-[1] sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {isLoading && (
            <>
              <PlaceholderProperty />
              <PlaceholderProperty />
              <PlaceholderProperty />
              <PlaceholderProperty />
              <PlaceholderProperty />
              <PlaceholderProperty />
            </>
          )}
          {propertyList.map((property, index) => (
            <Property key={index} property={property} user={user} />
          ))}
        </div>
      </section>

      {showForLandlord ? (
        <NavLink
          className="blue-button | text-3xl fixed top-[calc(100vh_-_5rem)] left-[calc(100vw_-_5rem)]"
          to="/property/new"
        >
          +
        </NavLink>
      ) : null}
    </main>
  );
}

export default Properties;
