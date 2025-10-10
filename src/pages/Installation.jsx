import { ArrowDownToLine, Box, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import LoadingSpinner from "../components/loadingSpinner";

const Installation = () => {
  const [install, setInstall] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");
 const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installation"));
    if (savedList) setInstall(savedList);
    const timer = setTimeout(() => setLoading(false), 500); // 0.5s spinner
  return () => clearTimeout(timer);
  }, []);
 if (loading) {
    return <LoadingSpinner />;
  }
  const sortedItem = (() => {
    if (sortOrder === "download-asc") {
      return [...install].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "download-desc") {
      return [...install].sort((a, b) => b.downloads - a.downloads);
    } else {
      return install;
    }
  })();
 

  const handleremove = (id, title) => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];
    const updatedList = existingList.filter((a) => a.id !== id);
    setInstall(updatedList);
    localStorage.setItem("installation", JSON.stringify(updatedList));
    toast.success(`${title} uninstalled successfully!`);
  };


  return (
    <div>
    <div className="mt-6">
      <h2 className="text-4xl font-bold text-center flex justify-center gap-3 items-center text-gray-600">Your Installed Apps <Box className="text-blue-500"></Box> </h2>
      <p className="text-gray-500 text-center mt-2">Explore All Trending Apps on the Market developed by us</p>
    </div>
      <div className="mt-9 flex justify-between">
        <h1 className="text-2xl font-medium underline">
          ({sortedItem.length}) app found
        </h1>

        <label className="form-control max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by download</option>
            <option value="download-asc">Low-&gt;High</option>
            <option value="download-desc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      {sortedItem.map((p) => (
        <div key={p.id}>
          <div className="flex flex-col md:flex-row md:justify-between items-center mt-6 bg-white p-3 rounded-2xl shadow-md gap-4">
            {/* Left section */}
            <div className="flex gap-3 w-full md:w-auto">
              <img
                className="w-[80px] h-[80px] md:w-[100px] md:h-[90px] rounded-2xl object-cover"
                src={p.image}
                alt={p.title}
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-lg md:text-2xl font-bold">{p.title}</h1>

                <div className="flex flex-wrap gap-3 mt-1">
                  <div className="flex items-center gap-1">
                    <ArrowDownToLine className="text-[#00D390] w-4 md:w-5" />
                    <h1 className="text-sm md:text-xl text-gray-500 font-semibold">
                      {p.downloads}M
                    </h1>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="text-[#FF8811] w-4 md:w-5" />
                    <h1 className="text-sm md:text-xl font-semibold text-gray-500">
                      {p.ratingAvg}
                    </h1>
                  </div>

                  <p className="font-semibold text-sm md:text-xl text-gray-500">
                    {p.size}
                  </p>
                </div>
              </div>
            </div>

            {/* Right section (button) */}
            <button
              onClick={() => handleremove(p.id, p.title)}
              className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-xl text-sm md:text-base font-semibold w-full md:w-auto text-center"
            >
              Uninstall
            </button>
          </div>
        </div>
      ))}

      {/* ✅ Keep ToastContainer only once (outside map) */}
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Installation;
