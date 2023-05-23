import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="bg-primary-400">test app</h1>
      <h1 className="bg-primary-300">test app</h1>
      <h1 className="bg-secondary-400">test app</h1>
      <h1 className="bg-secondary-200">test app</h1>
      <h1 className="bg-accent-400">test app</h1>
    </div>
  );
}

export default App;
