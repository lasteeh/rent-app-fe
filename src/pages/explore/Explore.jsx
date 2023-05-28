import React, { useState } from "react";

function Explore() {
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const inputFieldStyle = "border-b-2 border-primary-400/20 p-2 font-semibold";

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <main>
      <section className="py-16">
        <div className="text-center text-primary-400 mb-8">
          <h1 className="text-xl font-bold mb-4">Where To Stay?</h1>
          <p>Not sure about the locality?</p>
          <p>Know everything and be sure</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 items-center"
        >
          <input
            type="text"
            className={inputFieldStyle}
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            className={inputFieldStyle}
            placeholder="Province"
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          />
          <button
            type="submit"
            className="purple-button | text-xs px-8 py-2 my-8"
          >
            Explore
          </button>
        </form>
      </section>
    </main>
  );
}

export default Explore;
