export const baseApiUrl = "https://rent-app-i7o7.onrender.com";

export const signinRenter = async (email, password) => {
  return fetch(`${baseApiUrl}/api/v1/auth/renter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      authentication: { email: email, password: password },
    }),
  }).then((data) => data.json());
};

export const signinLandlord = async (email, password) => {
  return fetch(`${baseApiUrl}/api/v1/auth/landlord`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      authentication: { email: email, password: password },
    }),
  }).then((data) => data.json());
};

export const signupRenter = async (
  first_name,
  last_name,
  email,
  phone_number,
  password,
  password_confirmation
) => {
  return fetch(`${baseApiUrl}/api/v1/renters/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      renter: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
        password: password,
        password_confirmation: password_confirmation,
      },
    }),
  }).then((data) => data.json());
};

export const signupLandlord = async (
  first_name,
  last_name,
  email,
  phone_number,
  password,
  password_confirmation
) => {
  return fetch(`${baseApiUrl}/api/v1/landlords/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      landlord: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
        password: password,
        password_confirmation: password_confirmation,
      },
    }),
  }).then((data) => data.json());
};

export const fetchProperties = async (token) => {
  return fetch(`${baseApiUrl}/api/v1/properties`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => data.json());
};

export const fetchNewProperty = async (
  token,
  propertyName,
  propertyDescription,
  propertyAddress,
  propertyCity,
  propertyProvince,
  propertyZipCode,
  propertyUnits,
  propertyRentPerMonth,
  landlordID
) => {
  return fetch(`${baseApiUrl}/api/v1/properties`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      property: {
        name: propertyName,
        description: propertyDescription,
        address: propertyAddress,
        city: propertyCity,
        province: propertyProvince,
        zip_code: propertyZipCode,
        units: propertyUnits,
        rent_per_month: propertyRentPerMonth,
        landlord_id: landlordID,
      },
    }),
  }).then((data) => data.json());
};

export const fetchSingleProperty = async (token, propertyID) => {
  return fetch(`${baseApiUrl}/api/v1/properties/${propertyID}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => data.json());
};

export const fetchEditProperty = async (
  token,
  propertyName,
  propertyDescription,
  propertyAddress,
  propertyCity,
  propertyProvince,
  propertyZipCode,
  propertyUnits,
  propertyRentPerMonth,
  landlordID,
  propertyID
) => {
  return fetch(`${baseApiUrl}/api/v1/properties/${propertyID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      property: {
        name: propertyName,
        description: propertyDescription,
        address: propertyAddress,
        city: propertyCity,
        province: propertyProvince,
        zip_code: propertyZipCode,
        units: propertyUnits,
        rent_per_month: propertyRentPerMonth,
        landlord_id: landlordID,
      },
    }),
  }).then((data) => data.json());
};

export const fetchDeleteProperty = async (token, propertyID) => {
  return fetch(`${baseApiUrl}/api/v1/properties/${propertyID}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((data) => data.json());
};

export const fetchNewRental = async (
  token,
  propertyID,
  renterID,
  rentPerMonth,
  startDate,
  durationMonths
) => {
  return fetch(`${baseApiUrl}/api/v1/rentals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      rental: {
        property_id: propertyID,
        renter_id: renterID,
        rent_per_month: rentPerMonth,
        start_date: startDate,
        duration_months: parseFloat(durationMonths),
      },
    }),
  }).then((data) => data.json());
};
