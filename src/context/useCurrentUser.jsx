import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useCurrentUser = () => {
  const { user, setUser, authToken, setAuthToken } = useContext(UserContext);

  return { user, authToken, setUser, setAuthToken };
};
