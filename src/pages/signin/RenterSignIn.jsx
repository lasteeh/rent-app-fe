import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signinRenter } from "../../helpers/ApiCalls";
import { useCurrentUser } from "../../context/useCurrentUser";
import { setLocalUser } from "../../helpers/StorageFunction";

function RenterSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const { setUser, authToken, setAuthToken } = useCurrentUser();
  const navigate = useNavigate();

  const inputFieldStyle =
    "border-b-2 border-primary-400/20 p-2 text-xl font-semibold";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signinRenter(email, password);
    if (response.errors) {
      setErrors(response.errors);
    } else {
      setEmail("");
      setPassword("");
      setUser(response.renter);
      setAuthToken(response.renter.token);

      // Store the logged-in user in the local storage
      setLocalUser(
        response.renter.token,
        response.renter.id,
        response.renter.email
      );

      setEmail("");
      setPassword("");

      navigate("/properties");
    }
  };

  return (
    <main className="grid place-items-center h-screen py-4">
      <section className="w-full flex justify-end px-12">
        <NavLink to="/signup" className="purple-button | text-right">
          Sign Up
        </NavLink>
      </section>
      <section>
        <p>{errors}</p>
        <h1 className="text-center text-xl font-bold text-primary-400 mb-8">
          Log In
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4"
        >
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className={inputFieldStyle}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
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

export default RenterSignin;
