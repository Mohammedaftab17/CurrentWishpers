import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Cart({ title, source, imgurl, url, description, author, date }) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <div className={`my-2 flex justify-center`}>
        <div
          className={`card flex flex-col ${
            darkMode
              ? "bg-black text-white border-white"
              : "bg-white text-black"
          }`}
          style={{ width: "20rem", height: "100%" }}
        >
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: "1", left: "86%" }}
          >
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img
            src={imgurl}
            className="card-img-top"
            style={{ height: "180px", width: "100%", objectFit: "cover" }}
            alt="..."
          />
          <div className="card-body flex flex-col justify-between">
            <div>
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
            </div>
            <div className="text-body-secondary text-success">
              Author: {author} <br /> On: {date}
            </div>
            <a href={url} target="_blank" className={`btn btn-sm btn-primary ${
            darkMode
              ? "bg-black text-white border-white"
              : "bg-white text-black"
          }`}>
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
