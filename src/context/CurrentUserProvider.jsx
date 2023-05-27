import React, { useState } from "react";
import UserContext from "./UserContext";

function CurrentUserProvider({ children }) {
  const [user, setUser] = useState({
    type: "",
    id: "",
    email: "",
    token: "",
  });
  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
}

export default CurrentUserProvider;
