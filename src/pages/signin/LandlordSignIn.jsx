import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signinLandlord } from "../../helpers/ApiCalls";
import { useCurrentUser } from "../../context/useCurrentUser";
import { setLocalUser } from "../../helpers/StorageFunction";

function LandlordSignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const { setUser, authToken, setAuthToken } = useCurrentUser();
  const navigate = useNavigate();

  const inputFieldStyle =
    "border-b-2 border-primary-400/20 p-2 text-xl font-semibold";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signinLandlord(email, password);
    await setEmail("");
    await setPassword("");
    if (response.errors) {
      setErrors(response.errors);
    } else {
      setUser(response.landlord);
      setAuthToken(response.landlord.token);

      // Store the logged-in user in the local storage
      setLocalUser(response.landlord.token);

      setEmail("");
      setPassword("");

      navigate("/properties");
    }
  };

  return (
    <main className="grid place-items-center h-screen py-16">
      <section>
        <p>{errors}</p>
        <h1 className="text-center text-xl font-bold text-primary-400 mb-8">
          Landlord Log In
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

export default LandlordSignIn;
