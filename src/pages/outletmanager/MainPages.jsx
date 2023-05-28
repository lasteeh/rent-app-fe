import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getLocalUser } from "../../helpers/StorageFunction";

function MainPages() {
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = getLocalUser();

    if (currentUser === null) {
      navigate("/signin");
    }
  }, []);

  return <Outlet />;
}

export default MainPages;
