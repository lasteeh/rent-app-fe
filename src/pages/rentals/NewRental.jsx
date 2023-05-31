import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useCurrentUser } from "../../context/useCurrentUser";
import { fetchNewRental, fetchSingleProperty } from "../../helpers/ApiCalls";
import { getLocalUser } from "../../helpers/StorageFunction";

function NewRental() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, authToken } = useCurrentUser();
  const [property, setProperty] = useState(null);
  const [startDate, setStartDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [durationInMonths, setDurationInMonths] = useState(1);
  const [rentPerMonth, setRentPerMonth] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState("");

  const placeholderSpan = (
    <span className="placeholder-bg | text-transparent">placeholder</span>
  );

  const formatRent = (price) => {
    const parsedPrice = parseFloat(price);
    return parsedPrice.toFixed(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(authToken, property.id, user.id, startDate, durationInMonths);

    const response = await fetchNewRental(
      authToken,
      property.id,
      user.id,
      rentPerMonth,
      startDate,
      durationInMonths
    );

    if (response.errors) {
      setErrors(response.errors);
    } else {
      console.log(response);
      navigate("/rentals");
    }
  };

  useEffect(() => {
    const setSingleProperty = async () => {
      const fetchedProperty = await fetchSingleProperty(authToken, id);
      if (fetchedProperty.errors) {
        return console.log(fetchedProperty);
      }
      if (fetchedProperty) {
        setProperty(fetchedProperty.property);
        setRentPerMonth(fetchedProperty.property.rent_per_month);
        setIsLoading(false);
      }
    };
    if (authToken) {
      setSingleProperty();
    }
  }, [authToken]);

  useEffect(() => {
    console.log(property);
  }, [property]);

  useEffect(() => {
    console.log(startDate);
  }, [startDate]);

  return (
    <main>
      <div className="absolute inset-x-[2rem] top-8 flex flex-wrap justify-between z-[2]">
        <NavLink
          className="text-primary-400 font-bold text-6xl px-2"
          to="/properties"
        >
          &#8249;
        </NavLink>
      </div>
      <section className="py-4">
        <h1 className="text-center text-primary-400 text-xl font-bold capitalize my-8">
          Rent {isLoading ? placeholderSpan : property.name}
        </h1>
        <p>{errors}</p>
        <form
          className="text-center flex flex-col items-center gap-2 px-8"
          onSubmit={handleSubmit}
        >
          <div>
            <span>Address: </span>
            {isLoading ? (
              placeholderSpan
            ) : (
              <span>{`${property.address}, ${property.city}, ${property.province}, ${property.zip_code}`}</span>
            )}
          </div>
          {/* <input type="text" readOnly hidden value={user && user.id} />
          <input type="text" readOnly hidden value={property && property.id} /> */}

          <div>
            <span>Start Date: </span>
            {isLoading ? (
              placeholderSpan
            ) : (
              <input
                type="date"
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                }}
              />
            )}
          </div>

          <div>
            <span>Rent Per Month: </span>
            {isLoading ? (
              placeholderSpan
            ) : (
              <input readOnly value={`PHP ${formatRent(rentPerMonth)}`}></input>
            )}
          </div>

          <div>
            <span>Duration in months</span>
            {isLoading ? (
              placeholderSpan
            ) : (
              <input
                className="w-[50px] text-center bg-neutral-100 py-[0.25rem] mx-4"
                type="number"
                name=""
                id=""
                value={durationInMonths}
                onChange={(e) => {
                  setDurationInMonths(e.target.value);
                }}
              />
            )}
          </div>
          <button type="submit" className="purple-button">
            Confirm
          </button>
        </form>
      </section>
    </main>
  );
}

export default NewRental;
