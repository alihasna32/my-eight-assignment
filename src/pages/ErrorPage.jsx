import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router";
import AppError from "../assets/error-404.png"; 
const ErrorPage = () => {

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center min-h-[70vh] bg-gray-50 px-4">
        {/* Error Image */}
        <img
          src={AppError}
          alt="Error illustration"
          className="w-[250px] md:w-[400px] mb-6"
        />


        {/* Go Home Button */}
        <NavLink
          to="/"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg shadow mb-9"
        >
          Go Back Home
        </NavLink>


      </div>

      <Footer />
    </>
  );
};

export default ErrorPage;
