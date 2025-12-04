import React, { useEffect, useState } from "react";
import useApps from "../hooks/UseApps";
import HomeCards from "../components/HomeCards";
import googlePlay from "../assets/google-play-store-transparent-google-play-icon-11553530990d0xpnylfqx.png";

import Appstore from "../assets/images.jpg";

import BannerImg from "../assets/hero.png";
import { Link, Meta } from "react-router";
import { TrendingUp } from "lucide-react";
import LoadingSpinner from "../components/loadingSpinner";

const Home = () => {
  const { apps, } = useApps();
  const featuredApps = apps.slice(0, 8);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 500); 
  return () => clearTimeout(timer);
}, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="">
    <title>HOME</title>
    <meta name="HOME" content="new, portfolio" />

      <div className="hero bg-base-300 pt-10 pb-0 mb-0 flex flex-col items-center text-center ">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            We Build <span className="text-[#632EE3]">Productive</span> Apps
          </h1>
          <p className="py-6">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex justify-center gap-4">
            <button
              className="btn bg-white hover:bg-primary hover:text-white mb-5 flex items-center gap-2"
              onClick={() =>
                window.open("https://play.google.com/store/games?hl=en")
              }
            >
              <img src={googlePlay} alt="Play Store" className="w-5 h-5" />
              Google Play
            </button>

            <button
              className="btn bg-white hover:bg-primary hover:text-white mb-5 flex items-center gap-2"
              onClick={() => window.open("https://www.apple.com/app-store/")}
            >
              <img src={Appstore} alt="App Store" className="w-5 h-5" />
              App Store
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center mt-6">
          <img
            src={BannerImg}
            alt="Banner"
            className="max-w-[600px] w-full pb-0"
          />
        </div>
        <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full lg:h-[300px] py-9 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-10">
            Trusted by Millions, Built for You
          </h1>
          <div className="lg:flex gap-18">
            <div>
              <p>Total Downloads</p>
              <h1 className="text-5xl my-3 font-extrabold">29.6M</h1>
              <p>21% more than last month</p>
            </div>
            <div>
              <p>Total Reviews</p>
              <h1 className="text-5xl my-3 font-extrabold">906K</h1>
              <p>46% more than last month</p>
            </div>
            <div>
              <p>Active Apps</p>
              <h1 className="text-5xl my-3 font-extrabold">132+</h1>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-16">
        <h1 className="text-[48px] font-semibold flex justify-center items-center">Trending Apps <TrendingUp className="ml-4 text-green-300"/> </h1>
        <p className="text-xl  text-gray-400 mb-3.5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid max-md:grid-cols-1 md:grid-cols-4 gap-3 ">
        {featuredApps.map((app) => (
          <HomeCards key={app.id} apps={app}></HomeCards>
        ))}
      </div>
      <div className="mx-auto text-center py-9 text-white font-semibold ">
          <Link to='/apps' className=" p-3 rounded-xl w-20 text-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">Show All</Link>
        </div>
    </div>
  );
};

export default Home;
