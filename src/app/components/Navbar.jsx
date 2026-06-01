"use client";

import React, { useState } from "react";
import Link from "next/link";

function Navbar({ home, dashboard, faqs }) {
    const [menu, setMenu] = useState(false);

    return (
        <div>
            <div className = "w-full flex justify-center border-b bg-neutral-50 border-gray-200 relative z-50">
                <div className = "container flex justify-between items-center h-24 relative z-50 px-4">
                    <p className = "text-3xl max-md:text-2xl font-bold">
                        <span className = "text-[#b2bb1e]">Solar</span>
                        <span className = "text-[#014b49]">Moss</span>
                    </p>
                    <div className = "flex justify-center items-center w-max gap-8 font-medium text-sm max-md:hidden">
                        <Link href = "/" className = {`${home ? "text-neutral-900 hover:underline hover:underline-offset-4" : "text-gray-400"} flex justify-center items-center h-10 px-4 rounded-xl hover:bg-neutral-900 hover:text-neutral-50 hover:shadow-md duration-200`}>Home</Link>
                        <Link href = "/dashboard" className = {`${dashboard ? "text-neutral-900 hover:underline hover:underline-offset-4" : "text-gray-400"} flex justify-center items-center h-10 px-4 rounded-xl hover:bg-neutral-900 hover:text-neutral-50 hover:shadow-md duration-200`}>Dashboard</Link>
                        <Link href = "/faqs" className = {`${faqs ? "text-neutral-900 hover:underline hover:underline-offset-4" : "text-gray-400"} flex justify-center items-center h-10 px-4 rounded-xl hover:bg-neutral-900 hover:text-neutral-50 hover:shadow-md duration-200`}>FAQs</Link>
                    </div>
                    <Link href = "/#map" className = "flex justify-center items-center px-6 h-10 gap-2 bg-[#014b49] text-base text-neutral-50 font-semibold rounded-xl shadow-md border-2 border-[#014b49] hover:bg-neutral-50 hover:text-[#014b49] duration-200 max-md:hidden">
                        <i className = "fa-regular fa-map"></i>
                        <p>Map</p>
                    </Link>
                    <div onClick = {() => setMenu(!menu)} className = {`flex justify-center items-center w-10 h-10 text-base font-semibold rounded-xl shadow-md border-2 border-[#014b49] hover:bg-neutral-50 hover:text-[#014b49] duration-200 md:hidden ${menu ? "bg-neutral-50 text-[#014b49]" : "bg-[#014b49] text-neutral-50"}`}>
                        <i className = {`fa-solid ${menu ? "fa-xmark" : "fa-bars"}`}></i>
                    </div>
                </div>
            </div>
            
            <div className = {`absolute ${menu ? "translate-y-24" : "-translate-y-full"} left-0 top-0 bg-neutral-50 w-screen h-[calc(100vh-6rem)] border-t border-gray-200 flex justify-center transition-transform duration-800 ease-in-out z-40 md:hidden`}>
                <div className = "container px-4 py-4 flex flex-col gap-4">
                    <div className = "flex flex-col items-start gap-2 font-medium text-xs w-full">
                        <Link href = "/" className = {`${home ? "text-neutral-900 hover:underline hover:underline-offset-4" : "text-gray-400"} flex justify-start items-center h-10 w-full px-4 rounded-xl hover:bg-neutral-900 hover:text-neutral-50 hover:shadow-md duration-200`}>Home</Link>
                        <Link href = "/dashboard" className = {`${dashboard ? "text-neutral-900 hover:underline hover:underline-offset-4" : "text-gray-400"} flex justify-start items-center h-10 w-full px-4 rounded-xl hover:bg-neutral-900 hover:text-neutral-50 hover:shadow-md duration-200`}>Dashboard</Link>
                        <Link href = "/faqs" className = {`${faqs ? "text-neutral-900 hover:underline hover:underline-offset-4" : "text-gray-400"} flex justify-start items-center h-10 w-full px-4 rounded-xl hover:bg-neutral-900 hover:text-neutral-50 hover:shadow-md duration-200`}>FAQs</Link>
                    </div>
                    <Link href = "/#map" className = "flex justify-center items-center px-6 h-10 gap-2 bg-[#014b49] text-sm text-neutral-50 font-semibold rounded-xl shadow-md border-2 border-[#014b49] hover:bg-neutral-50 hover:text-[#014b49] duration-200">
                        <i className = "fa-regular fa-map"></i>
                        <p>Map</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
