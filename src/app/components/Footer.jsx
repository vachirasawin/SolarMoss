"use client";

import React, { useState } from "react";
import Link from "next/link";

function Footer({ home, dashboard, faqs }) {
    const [quickLine, setQuickLink] = useState(false);
    const [information, setInformation] = useState(false);
    const [contactInfo, setContactInfo] = useState(false);

    return (
        <div className = "w-full flex justify-center items-center bg-[#014b49] text-neutral-50 relative bottom-0">
            <div className = "container flex justify-between items-start h-64 max-md:h-max px-4 py-8 max-md:py-4 max-md:flex-col max-md:justify-start gap-4">
                <p className = "text-3xl max-md:text-2xl font-bold">
                    <span className = "text-[#b2bb1e]">Solar</span>
                    <span className = "text-neutral-50">Moss</span>
                </p>
                <div className = "flex max-md:flex-col gap-8 max-md:gap-4 w-max max-md:w-full">
                    <div className = "flex flex-col gap-4 max-md:border-b border-neutral-200 max-md:pb-4">
                        <div onClick = {() => setQuickLink(!quickLine)} className = "w-max max-md:w-full flex justify-between items-center">
                            <p className = "text-neutral-50 font-bold text-sm">Quick Link</p>
                            <div className = {`min-md:hidden ${quickLine && "-rotate-90"} transition-transform duration-200 ease-in-out`}><i className = "fa-solid fa-angle-down"></i></div>
                        </div>
                        <div className = {`flex flex-col gap-2 max-md:${!quickLine && "hidden"}`}>
                            <Link href = "/" className = {`${home ? "text-neutral-50" : "text-gray-400"} text-xs font-medium`}>Home</Link>
                            <Link href = "/#map" className = {`${home ? "text-neutral-50" : "text-gray-400"} text-xs font-medium`}>Map</Link>
                            <Link href = "/dashboard" className = {`${dashboard ? "text-neutral-50" : "text-gray-400"} text-xs font-medium`}>Dashboard</Link>
                        </div>
                    </div>
                    <div className = "flex flex-col gap-4 max-md:border-b border-neutral-200 max-md:pb-4">
                        <div onClick = {() => setInformation(!information)} className = "w-max max-md:w-full flex justify-between items-center">
                            <p className = "text-neutral-50 font-bold text-sm">Information</p>
                            <div className = {`min-md:hidden ${information && "-rotate-90"} transition-transform duration-200 ease-in-out`}><i className = "fa-solid fa-angle-down"></i></div>
                        </div>
                        <div className = {`flex flex-col gap-2 max-md:${!information && "hidden"}`}>
                            <Link href = "/faqs" className = {`${faqs ? "text-neutral-50" : "text-gray-400"} text-xs font-medium`}>FAQs</Link>
                        </div>
                    </div>
                    <div className = "flex flex-col gap-4 max-md:border-b border-neutral-200 max-md:pb-4">
                        <div onClick = {() => setContactInfo(!contactInfo)} className = "w-max max-md:w-full flex justify-between items-center">
                            <p className = "text-neutral-50 font-bold text-sm">Contact Info</p>
                            <div className = {`min-md:hidden ${contactInfo && "-rotate-90"} transition-transform duration-200 ease-in-out`}><i className = "fa-solid fa-angle-down"></i></div>
                        </div>
                        <div className = {`flex flex-col gap-2 max-md:${!contactInfo && "hidden"}`}>
                            <div className = "text-neutral-400 text-xs font-medium">vachirasawin.mah@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
