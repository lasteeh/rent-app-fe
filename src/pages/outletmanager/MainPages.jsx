import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { getLocalUser, removeLocalUser } from "../../helpers/StorageFunction";
import { useCurrentUser } from "../../context/useCurrentUser";

function MainPages() {
  const navigate = useNavigate();
  const { setAuthToken, setUser } = useCurrentUser();
  const [isMainMenuShowing, setIsMainMenuShowing] = useState(false);

  const handleClick = () => {
    setIsMainMenuShowing((prev) => !prev);
  };

  const handleLogOut = () => {
    setAuthToken(null);
    setUser(null);
    removeLocalUser();
    navigate("/signin");
  };

  useEffect(() => {
    const currentUser = getLocalUser();

    if (currentUser === null) {
      navigate("/signin");
    }
  }, []);

  return (
    <>
      <Outlet />
      {isMainMenuShowing && (
        <div className="fixed z-[3] bottom-[5rem] left-[1rem] w-max shadow-md">
          <button
            className="px-4 py-2 bg-white hover:bg-neutral-100"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      )}
      <button
        type="button"
        className="fixed top-[calc(100%_-_4rem)] right-[calc(100%_-_3rem)] z-[2] rounded-full shadow-md text-xl px-2 py-[0.25rem] grid place-items-center bg-white"
        onClick={handleClick}
      >
        <span>&#9776;</span>
      </button>
    </>
  );
}

export default MainPages;
