"use client";

import React from "react";
import dynamic from "next/dynamic";

import Navbar from "./components/Navbar";
import Infomation from "./components/Infomation";
import Title from "./components/Title";
const Map = dynamic(() => import("@/app/components/Map"), { ssr: false });
import { useESP32 } from "./hooks/useESP32";
import FAQsComponents from "./components/FAQsComponents";
import Footer from "./components/Footer";

function page() {
  const { data, isConnected, error, reconnect } = useESP32();

  const dust = data?.dustDensity !== undefined ? data.dustDensity.toFixed(2) : null;
  const temp = data?.temperature !== undefined ? data.temperature.toFixed(2) : null;
  const humid = data?.humidity !== undefined ? data.humidity.toFixed(2) : null;

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

  const faqsContent = [
    {
      question: "Lorem ipsum dolor sit amet.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus."
    }, 
    {
      question: "Lorem ipsum dolor sit amet.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus."
    }, 
    {
      question: "Lorem ipsum dolor sit amet.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus."
    }, 
    {
      question: "Lorem ipsum dolor sit amet.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus."
    }, 
    {
      question: "Lorem ipsum dolor sit amet.",
      answer: "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus."
    }
  ]

  return (
    <div>
      <Navbar home/>
      <Title contents = {titleContent}/>
      <Infomation contents = {informationContent}/>
      <Map position = {[13.625949305760146, 100.46904831312136]} dustValue = {dust} tempValue = {temp} humidValue = {humid} title = "Suankularb Wittayalai Thonburi School"/>
      <FAQsComponents contents = {faqsContent}/>
      <Footer home/>
    </div>
  )
}

export default page
