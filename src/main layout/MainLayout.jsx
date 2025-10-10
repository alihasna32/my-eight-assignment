import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import LoadingSpinner from "../components/loadingSpinner";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {navigation.state === "loading" ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="flex-1 px-2.5 bg-[#e4e4e4]">
          <Outlet />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
