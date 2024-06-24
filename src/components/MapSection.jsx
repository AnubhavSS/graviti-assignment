"use client";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import { LocationContext } from "@/Context";
import React, { useContext } from "react";
import "leaflet/dist/leaflet.css";
import { destIcon, myIcon, stopIcon } from "../../Icon";
import RoutingMachine from "./RouteMachine";
const MapSection = () => {
  const { source, destination,stops } = useContext(LocationContext);

  const sourceInfo = {
    lat: source?.results[0]?.lat,
    lon: source?.results[0]?.lon,
  };
  const destinationInfo = {
    lat: destination?.results[0]?.lat,
    lon: destination?.results[0]?.lon,
  };
  const stopInfo={
    lat: stops?.results[0]?.lat,
    lon: stops?.results[0]?.lon,
  }

  return (
    <div className="xs:mt-10 md:mt-0">
      <MapContainer
        center={[ sourceInfo?.lat ? sourceInfo.lat : 26.4609135,
            sourceInfo?.lon ? sourceInfo.lon :80.3217588,]}
        zoom={5}
        style={{ height: "511px", width: "560px" }}
        className="map-container"
      >
        <TileLayer
          url="https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=1f38da5a4e62418bb4afa3ced3b53c57"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Source */}
        <Marker
          position={[
            sourceInfo?.lat ? sourceInfo.lat : 51.505,
            sourceInfo?.lon ? sourceInfo.lon : -0.09,
          ]}
          icon={myIcon}
        >
        </Marker>
{/* Destination */}
        <Marker
          position={[
            destinationInfo?.lat ? destinationInfo.lat : 51.505,
            destinationInfo?.lon ? destinationInfo.lon : -0.09,
          ]}
          icon={destIcon}
        >

          {/* Stop */}
        <Marker
          position={[
           stopInfo?.lat ? stopInfo.lat : 51.505,
            stopInfo?.lon ? stopInfo.lon : -0.09,
          ]}
          icon={stopIcon}
        ></Marker>
        </Marker>
        <RoutingMachine/>
      </MapContainer>
    </div>
  );
};

export default MapSection;
