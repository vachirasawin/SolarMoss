import React from "react";

function Title({ contents }) {
    return (
        <div className = {`w-full flex justify-center items-center border-b border-gray-200 h-48 ${contents.url ? "bg-neutral-900" : "bg-gray-200"}`}>
            <div className = {`container flex justify-center items-center p-4 font-bold text-3xl ${contents.url ? "text-neutral-50" : "text-[#014b49]"}`}>{contents.title}</div>
        </div>
    )
}

export default Title
