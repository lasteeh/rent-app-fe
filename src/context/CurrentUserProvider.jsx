import React, { useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { getLocalUser } from "../helpers/StorageFunction";

function CurrentUserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const storedUser = getLocalUser();
    if (storedUser) {
      setUser(storedUser);
      setAuthToken(storedUser.token);
    }
  }, []);

  return (
    <UserContext.Provider value={{ authToken, setAuthToken, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default CurrentUserProvider;
