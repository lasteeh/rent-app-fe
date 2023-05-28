export const setLocalUser = (userToken, userType = "renter") => {
  sessionStorage.setItem(
    "user",
    JSON.stringify({ token: userToken, type: userType })
  );
};

export const getLocalUser = () => {
  const tokenString = sessionStorage.getItem("user");
  const userData = JSON.parse(tokenString);
  if (userData !== null) {
    return {
      token: userData.token,
      type: userData.type,
    };
  } else return null;
};

export const setLocality = (userID, city, province) => {
  localStorage.setItem(
    `${userID}`,
    JSON.stringify({ locality: { city: city, province: province } })
  );
};

export const getLocality = (userID) => {
  const tokenString = localStorage.getItem(`${userID}`);
  const userData = JSON.parse(tokenString);

  if (userData !== null) {
    return {
      city: userData.locality.city,
      province: userData.locality.province,
    };
  } else return null;
};
