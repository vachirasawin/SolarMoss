"use client";

import React from "react";
import dynamic from "next/dynamic";

import Navbar from "./components/Navbar";
import Infomation from "./components/Infomation";
import Title from "./components/Title";
const Map = dynamic(() => import("@/app/components/Map"), { ssr: false });
import Footer from "./components/Footer";

function page() {
  const informationContent = {
    title: `<span class = "text-[#b2bb1e]">Solar</span><span class = "text-[#014b49]">Moss</span><span>&nbsp;Map</span>`,
    description: `เครื่องฟอกอากาศชีวภาพจากมอสส์ด้วยระบบพลังงานแสงอาทิตย์เพื่อความยั่งยืน`,
    content: [
      `<p>Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class aptent.</p>`
    ],
    links: [
      {
        name: `Dashboard`,
        url: `/dashboard`
      }, {
        name: `Map`,
        url: `/#map`
      }
    ]
  }

  const titleContent = {
    title: `เครื่องฟอกอากาศชีวภาพจากมอสส์ด้วยระบบพลังงานแสงอาทิตย์เพื่อความยั่งยืน`,
    url: ``
  }

  return (
    <div>
      <Navbar home/>
      <Title contents = {titleContent}/>
      <Infomation contents = {informationContent}/>
      <Map position = {[13.625949305760146, 100.46904831312136]}/>
      <Footer home/>
    </div>
  )
}

export default page
