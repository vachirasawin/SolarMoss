"use client";

import React from "react";
import dynamic from "next/dynamic";

import Navbar from "../components/Navbar";
const Map = dynamic(() => import("@/app/components/Map"), { ssr: false });
import { useESP32 } from "../hooks/useESP32";
import DashboardComponent from "../components/DashboardComponent";
import Footer from "../components/Footer";

function page() {
  const { data, isConnected, error, reconnect } = useESP32();
  
  const dust = data?.dustDensity !== undefined ? data.dustDensity.toFixed(2) : null;
  const temp = data?.temperature !== undefined ? data.temperature.toFixed(2) : null;
  const humid = data?.humidity !== undefined ? data.humidity.toFixed(2) : null;

  const mapContent = [
    {
      name: "Duct Density",
      icon: "fa-solid fa-smog",
      value: dust,
      unit: "µg/m³"
    }, {
      name: "Temperature",
      icon: "fa-solid fa-temperature-high",
      value: temp,
      unit: "°C"
    }, {
      name: "Humidity",
      icon: "fa-solid fa-droplet",
      value: humid,
      unit: "%"
    }
  ];

  const content = [
    {
      title: "Suankularb Wittayalai Thonburi School",
      icon: "fa-regular fa-map",
      values: mapContent
    }
  ];

  return (
    <div>
      <Navbar dashboard/>
      <Map position = {[13.625949305760146, 100.46904831312136]} dustValue = {dust} tempValue = {temp} humidValue = {humid} title = "Suankularb Wittayalai Thonburi School"/>
      <DashboardComponent contents = {content}/>
      <Footer dashboard/>
    </div>
  )
}

export default page
