import React, {useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/UseApps";
import { ArrowDownToLine, Star, ThumbsUp } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AppDetails = () => {
  const { apps } = useApps();
  const { id } = useParams();
  const app = apps.find((a) => String(a.id) === id) || {};
  const { image, title, downloads, ratingAvg, reviews, size, description } =
    app;

  const [installed, setInstalled] = useState(false);
  const handleAddToInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem("installation"));
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === app.id);
      if (isDuplicate) return;
      updatedList = [...existingList, app];
    } else {
      updatedList.push(app);
    }
    localStorage.setItem("installation", JSON.stringify(updatedList));
    setInstalled(true);
    toast.success(`${title} installed successfully!`);
  };
  

  return (
    <div className="">
      <div className="flex justify-start items-start px-5 py-10 container mx-auto ">
        <div className="flex flex-col lg:flex-row gap-8 p-8 max-w-4xl w-full">
          <div className="flex justify-center items-center w-full lg:w-1/2">
            <img
              src={image}
              alt={title}
              className="rounded-xl w-[150px] h-[150px] object-cover shadow-sm"
            />
          </div>
          <div className="flex flex-col justify-center gap-4 w-full lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <p className="text-gray-600 text-2xl">
              Developed by{" "}
              <span className="font-semibold text-sm text-blue-600">
                {app.companyName}
              </span>
            </p>
            <div className="flex gap-x-6">
              <div>
                <ArrowDownToLine className="text-[#00D390]" />
                <p>Downloads</p>
                <h1 className="text-xl font-bold">{downloads}M</h1>
              </div>
              <div>
                <Star className="text-[#FF8811]" />
                <p>Average Ratings</p>
                <h1 className="text-xl font-bold">{ratingAvg}</h1>
              </div>
              <div>
                <ThumbsUp className="text-blue-600" />
                <p>Total Reviews</p>
                <h1 className="text-xl font-bold">{reviews}</h1>
              </div>
            </div>
            <button
              onClick={handleAddToInstallation}
              className="btn shadow-xl hover:shadow-2xl btn-xl max-md:w-50 max-md:h-16 skeleton bg-success btn-success text-white"
            >
              {installed ? "Installed" : `Install Now (${size})`}
            </button>
          </div>
        </div>

        <ToastContainer position="top-center" autoClose={2000} />

      </div>

      <div className="lg:w-1/2 mt-10 lg:mt-0 flex-1 container mx-auto">
        {app?.ratings && app.ratings.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={app.ratings}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" barSize={30} fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-center text-gray-500">No ratings data available</p>
        )}
      </div>

      <div className="mt-2 mb-4">
        <h2 className="text-2xl font-bold text-start mb-5">Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
