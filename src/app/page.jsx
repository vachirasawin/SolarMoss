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
      `
        <p>บริเวณจุดจอดรถโดยสารประจำทางเป็นพื้นที่ ที่มีความหนาแน่นของมลพิษทางอากาศจากยานพาหนะสูงเป็นพิเศษ และมีอุณหภูมิสูง ซึ่งส่งผลกระทบในระยะยาวที่อาจก่อให้เกิดอันตรายร้ายแรงต่อผู้โดยสารที่พักคอยเป็นประจำ แม้ในปัจจุบันจะมีการติดตั้งพัดลมพ่นไอน้ำในบางพื้นที่ แต่ส่วนใหญ่มักมีข้อจำกัดด้านการใช้พลังงานไฟฟ้าที่สิ้นเปลือง และมีประสิทธิภาพในการดักจับฝุ่นละอองได้น้อย</p>
        <p>พวกเราจึงเล็งเห็นในความสำคัญของการนำมอสส์มาใช้เป็นตัวกรองอากาศชีวภาพ ซึ่งสามารถย่อยสลายได้เอง และมีการติดตั้งระบบโซลาร์เซลล์ จึงได้เป็นนวัตกรรมเครื่องฟอกอากาศชีวภาพจากมอสส์ด้วยระบบพลังงานแสงอาทิตย์เพื่อความยั่งยืน</p>
      `
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
