import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../context/useCurrentUser";
import { fetchRentals } from "../../helpers/ApiCalls";
import PlaceholderRental from "./components/PlaceholderRental";
import Rental from "./components/Rental";

function Rentals() {
  const { authToken, user } = useCurrentUser();
  const [rentalList, setRentalList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const setRentals = async () => {
      const rentals = await fetchRentals(authToken);
      if (rentals.rentals) {
        setRentalList(rentals.rentals);
        setIsLoading(false);
      }
    };
    if (authToken) {
      setRentals();
    }
  }, [authToken]);

  useEffect(() => {
    console.log(rentalList);
  }, [rentalList]);

  return (
    <main>
      <section className="py-8">
        <h1 className="text-center text-xl text-primary-400 font-bold">
          My Rentals
        </h1>
        <p>{errors}</p>
        <div className="grid auto-rows-auto grid-cols-[1] sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {isLoading && (
            <>
              <PlaceholderRental />
              <PlaceholderRental />
              <PlaceholderRental />
              <PlaceholderRental />
              <PlaceholderRental />
              <PlaceholderRental />
            </>
          )}
          {rentalList.map((rental, index) => (
            <Rental key={index} rental={rental} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Rentals;
