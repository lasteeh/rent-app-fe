import React, { useState } from "react";
import { UserContext } from "./UserContext";

function CurrentUserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  return (
    <UserContext.Provider value={{ authToken, setAuthToken, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default CurrentUserProvider;
