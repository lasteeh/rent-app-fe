export const baseApiUrl = "https://rent-app-i7o7.onrender.com";

export const signinRenter = async (email, password) => {
  return fetch(`${baseApiUrl}/api/v1/auth/renter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
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
      email: email,
      password: password,
    }),
  }).then((data) => data.json());
};
