import { useState } from "react";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import Properties from "./pages/properties/Properties";
import Explore from "./pages/Explore/Explore";

function App() {
  return (
    <div className="relative min-h-screen min-h-[100dvh] isolate">
      {/* <Login /> */}
      <Properties />
      {/* <Register /> */}
      {/* <Explore /> */}
    </div>
  );
}

export default App;
