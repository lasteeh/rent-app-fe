import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../context/useCurrentUser";
import { fetchNewProperty } from "../../helpers/ApiCalls";
import { useNavigate } from "react-router-dom";

function NewProperty() {
  const navigate = useNavigate();
  const { user, authToken } = useCurrentUser();
  const [propertyName, setPropertyName] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [propertyCity, setPropertyCity] = useState("");
  const [propertyProvince, setPropertyProvince] = useState("");
  const [propertyZipCode, setPropertyZipCode] = useState("");
  const [propertyUnits, setPropertyUnits] = useState(1);
  const [errors, setErrors] = useState("");
  const [landlordID, setLandlordID] = useState("");

  const inputFieldStyle =
    "border-b-2 border-primary-400/20 p-2 text-xl font-semibold";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetchNewProperty(
      authToken,
      propertyName,
      propertyDescription,
      propertyAddress,
      propertyCity,
      propertyProvince,
      propertyZipCode,
      propertyUnits,
      landlordID
    );
    await setPropertyName("");
    await setPropertyDescription("");
    await setPropertyAddress("");
    await setPropertyCity("");
    await setPropertyProvince("");
    await setPropertyZipCode("");
    await setPropertyUnits("");

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
  return (
    <main>
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
          <button type="submit" className="purple-button">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

export default NewProperty;
