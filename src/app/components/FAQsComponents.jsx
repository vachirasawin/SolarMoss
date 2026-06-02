import React from "react";

function FAQsComponents({ contents }) {
    return (
        <div className = "w-full flex justify-center items-center border-b border-gray-200 bg-neutral-50" id = "faqs">
            <div className = "container flex flex-col px-4 py-16 max-md:py-4 gap-8 max-md:gap-4">
                <div className = "w-full flex flex-col gap-2 justify-center items-center">
                    <p className = "text-4xl max-md:text-3xl font-bold">
                        <span className = "text-[#b2bb1e]">Solar</span>
                        <span className = "text-[#014b49]">Moss</span>
                        <span>&nbsp;FAQs</span>
                    </p>
                    <p className = "text-base max-md:text-sm text-gray-400">
                        คำถามที่พบบ่อยเกี่ยวกับ SolarMoss
                    </p>
                </div>
                <div className = "w-full h-56 max-md:h-52 flex gap-4 overflow-x-auto styleScrollbar p-2 pb-4">
                    {contents.map((content, index) => (
                        <div key = {index} className = "w-96 max-md:w-72 shrink-0 h-full rounded-xl shadow-md relative">
                            <div className = "absolute inset-0 flex flex-col justify-center items-center text-neutral-200 gap-2 pointer-events-none select-none z-0">
                                <i className = "text-7xl fa-solid fa-question"></i>
                            </div>
                            <div className = "p-8 max-sm:p-4 flex flex-col gap-4 w-full h-full relative z-10">
                                <p className = "font-bold text-[#171717] text-xl">{content.question}</p>
                                <p className = "font-medium text-gray-400 text-base">{content.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQsComponents
