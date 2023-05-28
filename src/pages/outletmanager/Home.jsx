import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalUser } from "../../helpers/StorageFunction";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const currentUser = getLocalUser();

    if (currentUser === null) {
      navigate("/signin");
    } else {
      navigate("/properties");
    }
  }, []);
  return <></>;
}

export default Home;
