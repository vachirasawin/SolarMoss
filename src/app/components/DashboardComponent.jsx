import React from "react";

function DashboardComponent({ contents }) {
    return (
        <div className = "w-full flex justify-center items-center border-b border-gray-200 bg-neutral-50">
            <div className = "container flex flex-wrap justify-center gap-4 p-4">
                {contents.map((content, index) => (
                    <div className = "flex flex-col h-96 w-[20rem] max-sm:w-full border border-gray-200 rounded-xl shadow-md relative" key = {`${content.title} - ${index}`}>
                        <div className = "absolute inset-0 flex flex-col justify-center items-center text-neutral-200 gap-2 pointer-events-none select-none z-0">
                            <i className = {`text-7xl ${content.icon}`}></i>
                            <p className = "font-bold text-xl uppercase">{content.title} </p>
                        </div>
                        <div className = "p-8 pr-6 max-sm:p-4 max-sm:pr-2 flex flex-col gap-4 w-full h-full relative z-10">
                            <p className = "font-bold text-[#171717] text-xl">{content.title}</p>
                            <div className = "flex flex-col gap-2 overflow-y-auto styleScrollbar pr-2 w-full h-full">
                                {content.values && content.values.map((item, index) => (
                                    <div key = {`${item.name} - ${index}`} className = "border border-gray-200 bg-neutral-50 backdrop-blur-[2px] rounded-xl w-full h-max">
                                        <div className = "pr-[11px] flex justify-start items-center gap-4">
                                            <div className = {`border-r border-gray-200 w-16 h-16 min-w-16 min-h-16 flex justify-center items-center rounded-l-xl aspect-square text-xl ${item.color}`}>
                                                <i className = {item.icon}></i>
                                            </div>
                                            <div>
                                                <h1 className = "text-xl font-bold">{item.name}</h1>
                                                <div className = "flex gap-2 items-center">
                                                    <p className = "text-[#9497a1] text-xs font-medium">{item.value}</p>
                                                    <p className = "text-[#9497a1] text-xs font-medium">{item.unit}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DashboardComponent
