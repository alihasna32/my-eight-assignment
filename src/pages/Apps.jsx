import React, {  useState } from "react";
import AppsCards from "../components/appsCards";
import useApps from "../hooks/UseApps";
import { AppWindow } from "lucide-react";
import LoadingSpinner from "../components/loadingSpinner";

const Apps = () => {
  const { apps,loading, error  } = useApps();
  const [ search, setSearch ] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term)) 
    : apps;


  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
    <title>Apps</title>
    <meta name="Apps"
      content="all apps, new apps"
    />
      <div className="py-16">
        <div className="flex justify-center items-center gap-3.5">
          <h2 className="text-4xl font-bold text-center  flex justify-center gap-3 text-gray-600">
            Our All Applications
          </h2>
            <AppWindow className="text-blue-500"></AppWindow>
        </div>
        <p className="text-center text-gray-400 mt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center mb-9">
        <h1 className="underline">
          <span className="font-bold">{searchedApps.length}</span> Apps Found
        </h1>

        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search"
          />
        </label>
      </div>
       {searchedApps.length === 0 ? (
        <p className="text-center text-gray-500 mt-10 text-xl py-18">
          No App Found🫤
        </p>
      ) : (
        <div className="grid md:grid-cols-4 gap-3">
          {searchedApps.map((app) => (
            <AppsCards key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
