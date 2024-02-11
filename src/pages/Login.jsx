import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { setUser } from "../Redux/Authentication";
import { account } from "../Appwrite/Authentication";
import { ID } from "appwrite";

function Login() {
  const { user } = useSelector((state) => state.Auth);

  const dispatch = useDispatch();
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleuserSubmit = async (e, credential) => {
    e.preventDefault();
    try {
      const response = await account.createEmailSession(
        credential.email,
        credential.password
      );

      console.log("Login :: ", response);
      const accountDetails = await account.get();
      dispatch(setUser(accountDetails));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center border-4 border-pink-900 rounded-xl translate-x-96 my-4 bg-gray-900 bg-opacity-35  max-w-md sm:max-w-lg py-12 p-4 sm:p-8 md:p-12 custom-form">
        <form
          className="justify-center space-y-6 sm:space-y-8 custom-form"
          onSubmit={(e) => handleuserSubmit(e, credential)}
        >
          <p className="font-bold text-3xl text-pink-900">
            Login to Current-Wishpers
          </p>

          <div className="text-pink-900 text-xl text-left">
            <label className="text-left" htmlFor="email">
              Email:
            </label>
            <br />
            <input
              className="rounded-lg px-4 py-2 mt-2 text-pink-600 bg-slate-950 outline-double outline-pink-900 w-full"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={credential.email}
              onChange={handleInput}
              required
              name="email"
            />
          </div>

          <div className="text-xl text-pink-900 text-left">
            <label className="text-left" htmlFor="password">
              Password:
            </label>
            <br />
            <input
              className="rounded-lg px-4 py-2 mt-2 text-pink-600 bg-slate-950 outline-double outline-pink-900 w-full"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={credential.password}
              onChange={handleInput}
              required
              name="password"
            />
          </div>

          <div className="bg-pink-900 hover:scale-105 rounded-xl my-4 text-xl py-2">
            <input
              type="submit"
              value="Login"
              className="text-white px-6 py-2"
            />
          </div>

          <div className="font-semibold py-2 text-white">
            <p>
              Don't have an account? <br />
              <Link to="/register" className="hover:text-pink-700">
                Sign Up here
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
