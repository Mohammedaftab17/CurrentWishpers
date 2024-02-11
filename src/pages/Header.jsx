import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../Redux/Config";
import { DarkBtn, LightBtn, Logo, LogoutBtn } from "../Components/Mode";
import { account } from "../Appwrite/Authentication";
import { setUser } from "../Redux/Authentication";

function Header() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const handleuserlogout = async () => {
    await account.deleteSession("current");
    dispatch(setUser(null));
  };

  const toggleMode = () => {
    dispatch(toggleDarkMode());
    const body = document.querySelector("body");
    if (darkMode) {
      body.style.setProperty("--bg-color", "white");
      body.style.setProperty("--text-color", "black");
    } else {
      body.style.setProperty("--bg-color", "black");
      body.style.setProperty("--text-color", "white");
    }
  };

  return (
    <>
      <nav
        className={`bg-${darkMode ? "black" : "white"} text-${
          darkMode ? "white" : "black"
        } py-4 px-6 flex justify-between items-center`}
      >
        <div className="flex items-center">
          <Link className="text-xl font-bold " to="#">
            <b className="flex">
              <Logo /> &nbsp; CurrentWishpers
            </b>
          </Link>
          <button
            className="ml-4 sm:hidden block focus:outline-none"
            onClick={toggleMode}
          >
            <svg
              className={`w-6 h-6 text-${darkMode ? "white" : "black"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`hidden sm:flex items-center  ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          <ul className="flex space-x-4">
            <li className="nav-item">
              <Link className="nav-link" to="/general">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/business">
                Business
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">
                Health
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">
                Science
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </li>
          </ul>
          <button
            className={`btn btn-outline flex items-center text-${
              darkMode ? "white" : "black"
            }`}
            onClick={toggleMode}
          >
            {darkMode ? (
              <>
                <LightBtn /> <span className="mr-1">&nbsp;Light</span>
              </>
            ) : (
              <>
                <DarkBtn /> <span className="mr-1">&nbsp;Dark</span>
              </>
            )}
            <span>&nbsp;Mode</span>
          </button>
          <button onClick={handleuserlogout}>
            <LogoutBtn />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
