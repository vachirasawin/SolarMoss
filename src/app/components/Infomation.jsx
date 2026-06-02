import React from "react";
import Link from "next/link";
import Image from "next/image";

function Infomation({ contents }) {
    return (
        <div className = "w-full flex justify-center items-center border-b border-gray-200 bg-neutral-50">
            <div className = "container flex flex-wrap-reverse justify-between items-center px-4 py-16 max-md:py-4 gap-8 max-md:gap-4">
                <div className = "flex flex-col gap-6 max-md:gap-4 w-md max-xl:w-md max-lg:w-full">
                    <div className = "flex flex-col gap-2 justify-start">
                        <p className = "text-4xl max-md:text-3xl font-bold" dangerouslySetInnerHTML = {{ __html: contents.title }}></p>
                        <p className = "text-base max-md:text-sm" dangerouslySetInnerHTML = {{ __html: contents.description }}></p>
                        <div className = "w-36 border-2 border-[#014b49] rounded-md mt-2"></div>
                    </div>
                    <div className = "text-gray-400" dangerouslySetInnerHTML = {{ __html: contents.content }}></div>
                    {contents.links && (
                        <div className = "w-full flex gap-4 max-md:gap-2 max-lg:flex-col">
                            {contents.links.map((link, index) => (
                                <Link href = {link.url} key = {`${link.name} - ${index}`} className = {`${contents.links.length == 1 ? `w-full bg-[#014b49] text-neutral-50 hover:bg-neutral-50 hover:text-[#014b49]` : `w-1/2 max-lg:w-full ${index == 0 ? `bg-[#014b49] text-neutral-50 hover:bg-neutral-50 hover:text-[#014b49]` : `bg-neutral-50 text-[#014b49] hover:bg-[#014b49] hover:text-neutral-50`}`} border-2 border-[#014b49] rounded-xl shadow-md py-2 flex justify-center items-center text-sm font-medium duration-200`}>{link.name}</Link>
                            ))}
                        </div>
                    )}
                </div>
                <div className = "w-xl h-84 rounded-xl shadow-md max-xl:w-md max-lg:w-full"></div>
            </div>
        </div>
    )
}

export default Infomation
