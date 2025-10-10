import React from "react";
import { Router } from "react-router";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import MainLayout from "../main layout/MainLayout";
import Apps from "../pages/Apps";
import LoadingSpinner from "../components/loadingSpinner";
import AppDetails from "../components/AppDetails";
import Installation from './../pages/Installation';
import AppsErrorPage from "../pages/AppsErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
        errorElement: <AppsErrorPage></AppsErrorPage>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/appDetails/:id",
        element: <AppDetails></AppDetails>,
        errorElement: <ErrorPage></ErrorPage>,
      }
    ],
  },
]);

export default router;
