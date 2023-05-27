import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/outletmanager/Home";
import RenterSignIn from "./pages/signin/RenterSignIn";
import RenterSignUp from "./pages/signup/RenterSignUp";
import MainPages from "./pages/outletmanager/MainPages";
import Properties from "./pages/properties/Properties";
import Explore from "./pages/Explore/Explore";

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<RenterSignUp />} />
        <Route path="/signin" element={<RenterSignIn />} />
        <Route element={<MainPages />}>
          <Route path="/explore" element={<Explore />} />
          <Route path="/properties" element={<Properties />} />
        </Route>
      </Routes>
    </>
  );
}

export default Router;
