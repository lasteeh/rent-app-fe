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
import NewProperty from "./pages/properties/NewProperty";
import Property from "./pages/properties/Property";
import EditProperty from "./pages/properties/EditProperty";
import NewRental from "./pages/rentals/NewRental";
import Rentals from "./pages/rentals/Rentals";

function Router() {
  return (
    <>
      <BrowserRouter basename="/rent-app-fe/dist/">
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
            <Route path="/property/new" element={<NewProperty />} />
            <Route path="/property/edit/:id" element={<EditProperty />} />
            <Route path="/property/:id" element={<Property />} />
            <Route path="/rental/new/:id" element={<NewRental />} />
            <Route path="/rentals" element={<Rentals />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
