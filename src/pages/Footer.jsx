import React from "react";
import { Link } from "react-router-dom";
import { About, Contact, HomeIcon, Privacy} from '../Components/Mode'

function Footer() {
  return (
   <>
   <footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
      <div className="mb-1">
        <h3 className="text-xl font-semibold mb-4">About Us</h3>
        <p className="text-sm">
          We are committed to delivering accurate, reliable, and engaging content that empowers our readers to make informed decisions and stay ahead of the curve. Join us on this journey as we navigate the ever-changing landscape of news and information, bringing you the stories that matter most.
        </p>
      </div>
      <div className="mb-2">
        <h3 className="text-xl font-semibold mb-4">Categories</h3>
        <ul className="text-sm flex space-x-4">
          <li>
            <Link to="/general" className="hover:underline">General</Link>
          </li>
          <li>
            <Link to="/business" className="hover:underline">Business</Link>
          </li>
          <li>
            <Link to="/entertainment" className="hover:underline">Entertainment</Link>
          </li>
          <li>
            <Link to="/health" className="hover:underline">Health</Link>
          </li>
          <li>
            <Link to="/health" className="hover:underline">Science</Link>
          </li>
          <li>
            <Link to="/sports" className="hover:underline">Sports</Link>
          </li>
          <li>
            <Link to="/technology" className="hover:underline">Technology</Link>
          </li>
        </ul>
      </div>
    </div>

    <div className="mb-2">
        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
        <ul className="text-sm flex space-x-8 justify-center">
          <li>
            <Link to="/" className="hover:underline ">
             <HomeIcon/>
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline"><About/></Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline"><Contact/></Link>
          </li>
          <li>
            <Link to="/privacy" className="hover:underline"><Privacy/></Link>
          </li>
        </ul>
      </div>

    <div className="mt-8 md:flex md:justify-center">
      <h3 className="text-xl md:mr-4 font-semibold">
        Subscribe to Newsletter
      </h3>
      <form className="flex flex-col md:flex-row items-center">
        <input
          type="email"
          placeholder="Your Email"
          className="bg-gray-800 text-white border border-gray-700 px-4 py-1 rounded-lg mb-2 md:mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-xl px-4 py-1 mb-2"
        >
          Subscribe
        </button>
      </form>
    </div>
    <hr className="border-t border-gray-800 my-8" />
    <p className="text-center text-sm">
      &copy; {new Date().getFullYear()} Current Wishpers. All Rights Reserved.
    </p>
  </div>
</footer>
   </>
  );
}

export default Footer;
