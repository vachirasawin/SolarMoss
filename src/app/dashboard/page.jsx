import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardComponent from "../components/DashboardComponent";

function page() {
  const mapContent = [
    {
      name: "SKT",
      icon: "fa-solid fa-location-dot",
      value: "XX.XX",
      unit: "µg/m³"
    },
    {
      name: "SKT",
      icon: "fa-solid fa-location-dot",
      value: "XX.XX",
      unit: "µg/m³"
    },
    {
      name: "SKT",
      icon: "fa-solid fa-location-dot",
      value: "XX.XX",
      unit: "µg/m³"
    },
    {
      name: "SKT",
      icon: "fa-solid fa-location-dot",
      value: "XX.XX",
      unit: "µg/m³"
    },
    {
      name: "SKT",
      icon: "fa-solid fa-location-dot",
      value: "XX.XX",
      unit: "µg/m³"
    }
  ];

  const content = [
    {
      title: "SolarMoss Map",
      icon: "fa-regular fa-map",
      values: mapContent
    },
    {
      title: "SolarMoss Map",
      icon: "fa-regular fa-map",
      values: mapContent
    },
    {
      title: "SolarMoss Map",
      icon: "fa-regular fa-map",
      values: mapContent
    },
    {
      title: "SolarMoss Map",
      icon: "fa-regular fa-map",
      values: mapContent
    },
    {
      title: "SolarMoss Map",
      icon: "fa-regular fa-map",
      values: mapContent
    }
  ];

  return (
    <div>
      <Navbar dashboard/>
      <DashboardComponent contents = {content}/>
      <Footer dashboard/>
    </div>
  )
}

export default page
