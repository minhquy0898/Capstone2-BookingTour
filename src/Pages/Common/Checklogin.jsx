import React from "react";
import { pathUser } from "../../Untils/path";

import TourList from "../User/TourList";

import Home from "../User/Home";
import DetailTour from "../User/DetailTour";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import { Outlet, Route, Routes } from "react-router-dom";
const Checklogin = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Checklogin;
