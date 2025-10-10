import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router";
import AppErrorP from "../assets/App-Error.png"; 

const AppsErrorPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center text-center min-h-[70vh] bg-gray-50 px-4">
        <img
          src={AppErrorP}
          alt="App Error"
          className="w-[250px] md:w-[400px] mb-6"
        />
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">
          App Load Failed
        </h1>
        <p className="text-gray-600 mb-4">
          Something went wrong while loading the app data.
        </p>
        <NavLink
          to="/apps"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded-lg shadow mb-9"
        >
          Back to Apps
        </NavLink>
      </div>
      <Footer />
    </>
  );
};

export default AppsErrorPage;
