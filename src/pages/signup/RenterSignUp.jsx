import React from "react";

function RenterSignUp() {
  const inputFieldStyle =
    "border-b-2 border-primary-400/20 p-2 text-xl font-semibold";

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <main className="grid place-items-center h-screen py-16">
      <section>
        <h1 className="text-center text-xl font-bold text-primary-400 mb-8">
          Sign Up
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <input
            type="text"
            placeholder="First Name"
            className={inputFieldStyle}
          />
          <input
            type="text"
            placeholder="Last Name"
            className={inputFieldStyle}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className={inputFieldStyle}
          />
          <input type="text" placeholder="Email" className={inputFieldStyle} />
          <input
            type="password"
            placeholder="Password"
            className={inputFieldStyle}
          />
          <input
            type="password"
            placeholder="Password Confirmation"
            className={inputFieldStyle}
          />
          <button type="submit" className="blue-button | text-sm px-8 my-12">
            Done
          </button>
        </form>
      </section>
    </main>
  );
}

export default RenterSignUp;
