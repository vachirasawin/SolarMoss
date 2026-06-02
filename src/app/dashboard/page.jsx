"use client";

import React from "react";
import dynamic from "next/dynamic";

import Navbar from "../components/Navbar";
const Map = dynamic(() => import("@/app/components/Map"), { ssr: false });
import DashboardComponent from "../components/DashboardComponent";
import Footer from "../components/Footer";

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
    }
  ];

  return (
    <div>
      <Navbar dashboard/>
      <Map position = {[13.625949305760146, 100.46904831312136]}/>
      <DashboardComponent contents = {content}/>
      <Footer dashboard/>
    </div>
  )
}

export default page
