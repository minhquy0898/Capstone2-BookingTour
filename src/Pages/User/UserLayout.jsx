import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../../Components/Banner/Banner";
import TourList from "./TourList";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import withBaseComponent from "../../hocs/withBaseComponent";

const UserLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
