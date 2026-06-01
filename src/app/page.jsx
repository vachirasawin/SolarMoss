"use client";

import React from "react";
import dynamic from "next/dynamic";

import Navbar from "./components/Navbar";
const Map = dynamic(() => import("@/app/components/Map"), { ssr: false });
import Footer from "./components/Footer";

function page() {
  return (
    <div>
      <Navbar home/>
      <Map position = {[13.625949305760146, 100.46904831312136]}/>
      <Footer home/>
    </div>
  )
}

export default page
