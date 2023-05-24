import { useState } from "react";
import Login from "./pages/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative min-h-screen min-h-[100dvh] isolate">
      <Login />
    </div>
  );
}

export default App;
