export const baseApiUrl = "https://rent-app-i7o7.onrender.com";

export const loginUser = async (email, password) => {
  return fetch(`${baseApiUrl}/api/v1/auth/renter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((data) => data.json);
};
