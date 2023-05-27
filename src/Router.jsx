import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/outletmanager/Home";
import RenterSignIn from "./pages/signin/RenterSignIn";
import RenterSignUp from "./pages/signup/RenterSignUp";
import MainPages from "./pages/outletmanager/MainPages";
import Properties from "./pages/properties/Properties";
import Explore from "./pages/Explore/Explore";
import LandlordSignIn from "./pages/signin/LandlordSignIn";
import LandlordSignUp from "./pages/signup/LandlordSignUp";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<RenterSignUp />} />
          <Route path="/signin" element={<RenterSignIn />} />
          <Route path="/landlord">
            <Route path="signin" element={<LandlordSignIn />} />
            <Route path="signup" element={<LandlordSignUp />} />
          </Route>
          <Route element={<MainPages />}>
            <Route path="/explore" element={<Explore />} />
            <Route path="/properties" element={<Properties />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
