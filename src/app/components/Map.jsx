"use client";

import React from "react";

import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function Map({ position }) {
    return (
        <div className = "w-full flex justify-center items-center border-b border-gray-200 bg-neutral-50" id = "map">
            <div className = "container flex flex-col px-4 py-16 max-md:py-4 gap-8 max-md:gap-4">
                <div className = "w-full flex flex-col gap-2 justify-center items-center">
                    <p className = "text-4xl max-md:text-3xl font-bold">
                        <span className = "text-[#b2bb1e]">Solar</span>
                        <span className = "text-[#014b49]">Moss</span>
                        <span>&nbsp;Map</span>
                    </p>
                    <p className = "text-base max-md:text-sm text-gray-400">
                        แผนผังเครื่องกรองอากาศ SolarMoss
                    </p>
                </div>
                <MapContainer className = "w-full h-96 max-md:h-72 rounded-xl shadow-md z-10" center = {position} zoom = {16} scrollWheelZoom = {false}>
                    <TileLayer attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position = {position}>
                        <Popup>Suankularb Wittayalai <br/> Thonburi School</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}

export default Map
