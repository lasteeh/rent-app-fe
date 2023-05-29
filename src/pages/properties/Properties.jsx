import React, { useEffect, useState } from "react";
import Property from "./components/Property";
import PlaceholderProperty from "./components/PlaceholderProperty";
import { fetchProperties } from "../../helpers/ApiCalls";
import { useCurrentUser } from "../../context/useCurrentUser";
import { SAMPLE_PROPERTIES } from "../../assets/sampledata";

function Properties() {
  const { authToken } = useCurrentUser();
  const [propertyList, setPropertyList] = useState([]);

  useEffect(() => {
    console.log(authToken);
    setPropertyList(SAMPLE_PROPERTIES);
    console.log(fetchProperties(authToken));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <main>
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
          {propertyList &&
            propertyList.map((property, index) => (
              <Property info={property} key={index} />
            ))}
        </div>
      </section>
    </main>
  );
}

export default Properties;
