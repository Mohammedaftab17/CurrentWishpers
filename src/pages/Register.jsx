import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setUser } from "../Redux/Authentication";
import { account } from "../Appwrite/Authentication";
import { ID } from "appwrite";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register() {
  const { user } = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleuserRegister = async (e, credential) => {
    e.preventDefault();
    if (credential.password1 !== credential.password2) {
      alert("Password Do Not Match");
      return;
    }

    try {
      let response = await account.create(
        ID.unique(),
        credential.email,
        credential.password1,
        credential.name
      );
      console.log("User registered!", response);

      await account.createEmailSession(credential.email, credential.password1);
      let accountDetails = await account.get();
      dispatch(setUser(accountDetails))
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
  };
  return (
    <>
      <div className="flex justify-center border-4 border-pink-900 rounded-xl translate-x-96 bg-gray-900 bg-opacity-35 my-4 max-w-lg py-10">
        <form
          className="justify-center mt-16 space-y-6"
          onSubmit={(e) => handleuserRegister(e, credential)}
        >
          <p className="font-bold text-3xl text-pink-900">
            Register Current-Wishpers
          </p>

          <div className="text-pink-800 text-xl m-3 text-left">
            <label htmlFor="name">Full Name:</label>
            <br />
            <input
              className="mt-2 rounded-lg px-4 py-2 w-full bg-slate-950 text-pink-600 outline-double outline-pink-900"
              type="text"
              id="name"
              placeholder="Enter your name"
              value={credential.name}
              onChange={handleInput}
              required
              name="name"
            />
          </div>

          <div className="text-pink-800 text-xl m-3 text-left">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              className="mt-2 rounded-lg px-4 py-2 w-full bg-slate-950 text-pink-600 outline-double outline-pink-900"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={credential.email}
              onChange={handleInput}
              required
              name="email"
            />
          </div>

          <div className="text-pink-800 text-xl m-3 text-left">
            <label htmlFor="password1">Password:</label>
            <br />
            <input
              className="mt-2 rounded-lg px-4 py-2 w-full bg-slate-950 text-pink-600 outline-double outline-pink-900"
              type="password"
              id="password1"
              placeholder="Enter your password"
              value={credential.password1}
              onChange={handleInput}
              required
              name="password1"
            />
          </div>

          <div className="text-pink-800 text-xl m-3 text-left">
            <label htmlFor="password2">Confirm Password:</label>
            <br />
            <input
              className="mt-2 rounded-lg px-4 py-2 w-full bg-slate-950 text-pink-600 outline-double outline-pink-900"
              type="password"
              id="password2"
              placeholder="Confirm your password"
              value={credential.password2}
              onChange={handleInput}
              required
              name="password2"
            />
          </div>

          <div className="bg-pink-900 rounded-xl my-4 text-xl py-2 hover:scale-105">
            <input
              type="submit"
              value="Register"
              className="text-white px-6 py-2 "
            />
          </div>

          <div className="font-semibold py-2 text-white">
            <p>
              Already have an account? <br />
              <Link to="/login" className="hover:text-pink-800">
                Login here
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;
