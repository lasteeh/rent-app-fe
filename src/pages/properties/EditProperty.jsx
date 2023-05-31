import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../context/useCurrentUser";
import { fetchEditProperty, fetchSingleProperty } from "../../helpers/ApiCalls";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import MapBox from "./components/MapBox";

function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, authToken } = useCurrentUser();
  const [propertyName, setPropertyName] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [propertyCity, setPropertyCity] = useState("");
  const [propertyProvince, setPropertyProvince] = useState("");
  const [propertyZipCode, setPropertyZipCode] = useState("");
  const [propertyUnits, setPropertyUnits] = useState(1);
  const [propertyRentPerMonth, setPropertyRentPerMonth] = useState("");
  const [errors, setErrors] = useState("");
  const [landlordID, setLandlordID] = useState("");
  const [property, setProperty] = useState(null);

  const inputFieldStyle =
    "border-b-2 border-primary-400/20 p-2 text-xl font-semibold";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetchEditProperty(
      authToken,
      propertyName,
      propertyDescription,
      propertyAddress,
      propertyCity,
      propertyProvince,
      propertyZipCode,
      propertyUnits,
      propertyRentPerMonth,
      landlordID,
      id
    );
    // await setPropertyName("");
    // await setPropertyDescription("");
    // await setPropertyAddress("");
    // await setPropertyCity("");
    // await setPropertyProvince("");
    // await setPropertyZipCode("");
    // await setPropertyUnits("");

    if (response.errors) {
      setErrors(response.errors);
    } else {
      navigate("/properties");
    }
  };

  useEffect(() => {
    if (user) {
      setLandlordID(user.id);
    }
  }, [user]);

  useEffect(() => {
    const setSingleProperty = async () => {
      const fetchedProperty = await fetchSingleProperty(authToken, id);
      if (fetchedProperty.errors) {
        return console.log(fetchedProperty);
      }
      if (fetchedProperty) {
        setProperty(fetchedProperty.property);
        console.log(property);
      }
    };
    if (authToken) {
      setSingleProperty();
    }
  }, [authToken]);

  useEffect(() => {
    if (property) {
      setPropertyName(property.name);
      setPropertyDescription(property.description);
      setPropertyAddress(property.address);
      setPropertyCity(property.city);
      setPropertyProvince(property.province);
      setPropertyZipCode(property.zip_code);
      setPropertyUnits(property.units);
      setPropertyRentPerMonth(property.rent_per_month);
      setLandlordID(property.landlord_id);
    }
  }, [property]);
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
      <section className="py-16">
        <p>{errors}</p>
        <h1 className="text-center text-xl font-bold text-primary-400 mb-8">
          Add New Property
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <input type="text" hidden value={landlordID} readOnly />
          <input
            type="text"
            value={propertyName}
            onChange={(e) => setPropertyName(e.target.value)}
            placeholder="Property Name"
            className={inputFieldStyle}
          />
          <input
            type="text"
            value={propertyDescription}
            onChange={(e) => setPropertyDescription(e.target.value)}
            placeholder="Property Description"
            className={inputFieldStyle}
          />
          <input
            type="text"
            value={propertyAddress}
            onChange={(e) => setPropertyAddress(e.target.value)}
            placeholder="Address"
            className={inputFieldStyle}
          />
          <input
            type="text"
            value={propertyCity}
            onChange={(e) => setPropertyCity(e.target.value)}
            placeholder="City"
            className={inputFieldStyle}
          />
          <input
            type="text"
            value={propertyProvince}
            onChange={(e) => setPropertyProvince(e.target.value)}
            placeholder="Province"
            className={inputFieldStyle}
          />
          <input
            type="text"
            value={propertyZipCode}
            onChange={(e) => setPropertyZipCode(e.target.value)}
            placeholder="Zip Code"
            className={inputFieldStyle}
          />
          <input
            type="number"
            value={propertyUnits}
            onChange={(e) => setPropertyUnits(e.target.value)}
            placeholder="Units"
            className={inputFieldStyle}
          />
          <input
            type="number"
            value={propertyRentPerMonth}
            onChange={(e) => setPropertyRentPerMonth(e.target.value)}
            placeholder="Rent Per Month"
            className={inputFieldStyle}
          />
          <button type="submit" className="purple-button">
            Submit
          </button>
        </form>
      </section>
      <section>
        <div className="p-8">
          <MapBox
            currentAddress={`${propertyAddress}, ${propertyCity}, ${propertyProvince} ${propertyZipCode}`}
          />
        </div>
      </section>
    </main>
  );
}

export default EditProperty;
