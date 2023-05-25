import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Properties from "./pages/properties/Properties";
import Explore from "./pages/Explore/Explore";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </>
  );
}

export default Router;
