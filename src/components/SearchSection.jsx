"use client";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import React, { useState, useContext } from "react";
import { LocationContext } from "@/Context";
import Image from "next/image";
import add from '../../public/add.png'
const SearchSection = () => {

  const { setsource, setdestination,source,destination,setstops } = useContext(LocationContext);
  const [value, setValue] = useState(null);
  const [sourceInfo, setsourceInfo] = useState(null);
  const [destInfo, setdestInfo] = useState(null);
 const [distance, setdistance] = useState(0)

  async function sendGeocoderRequest(value) {
    // console.log(value); // The search term
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&format=json&apiKey=1f38da5a4e62418bb4afa3ced3b53c57`
      );
      const data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // setting source info
  const sendSourceRequest = async (value) => {
    const source = await sendGeocoderRequest(value);
    console.log(source)
    setsourceInfo({
      lat: source?.results[0]?.lat,
      lon: source?.results[0]?.lon,
    });
    setsource(source);
  };

  //setting destination info
  const sendDestinationRequest = async (value) => {
    const destination = await sendGeocoderRequest(value);
    setdestInfo({
      lat: destination?.results[0]?.lat,
      lon: destination?.results[0]?.lon,
    });
    setdestination(destination);
  };

   //setting stop info
   const sendStopRequest = async (value) => {
    const stop = await sendGeocoderRequest(value);
    setstops(stop);
  };

  const calcDistance = async () => {
    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
   let lon1 = (sourceInfo.lon * Math.PI) / 180;
  let  lon2 = (destInfo.lon * Math.PI) / 180;
   let lat1 = (sourceInfo.lat * Math.PI) / 180;
    let lat2 = (destInfo.lat * Math.PI) / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a =
      Math.pow(Math.sin(dlat / 2), 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371;

    // calculate the result
    setdistance(Math.ceil(c * r));
  };

  return (
    <div>
    <div className="flex flex-col md:flex-row justify-center items-center">
        <div>
          <GeoapifyContext apiKey="1f38da5a4e62418bb4afa3ced3b53c57">
            {/* Source */}
            <div className="w-[250px] h-[70px]">
              <p className="font-ibm-sans leading-4 text-[14px] font-normal text-black my-2">
                Origin
              </p>
              <GeoapifyGeocoderAutocomplete
                placeholder="Enter source address here"
                value={value}
                sendGeocoderRequestFunc={sendSourceRequest}
              />
            </div>

            {/* Stop */}
            <div className="my-10 w-[250px] h-[99px]">
            <div className=" h-[70px] ">
              <p className="font-ibm-sans leading-4 text-[14px] font-normal text-black my-2">
               Stop
              </p>
              <GeoapifyGeocoderAutocomplete
                placeholder="Enter source address here"
                value={value}
                sendGeocoderRequestFunc={sendStopRequest}
              />
            </div>
            <div className="flex items-center justify-center ml-5 gap-2 ">
              <Image src={add} alt="add" width={18} height={18}/>
              <p className="font-normal text-[15px] leading-4 text-center">Add another stop</p>
            </div>
            </div>
            
            {/* Destination */}
            <div className="w-[250px] h-[70px] my-10">
              <p className="font-ibm-sans leading-4 text-[14px] font-normal text-black my-2">
                Destination
              </p>
              <GeoapifyGeocoderAutocomplete
                placeholder="Enter source address here"
                value={value}
                sendGeocoderRequestFunc={sendDestinationRequest}
              />
            </div>
          </GeoapifyContext>
        </div>
        <button
          onClick={calcDistance}
          disabled={sourceInfo===null? true :false}
          className="w-[141px] xs:h-[40px] md:h-[62px] p-2 rounded-[32px] bg-[#1B31A8] font-ibm-sans text-white leading-5 font-semibold text-[18px] items-center md:ml-10"
        >
          Calculate
        </button>
      </div>
      {/* Distance */}
      <div>
        <div className="xs:w-[351px]   md:w-[490px] h-[80px] bg-white flex items-center  md:justify-between justify-around">
          <p className="font-bold leading-5 xs:text-[18px] md:text-[20px] font-ibm-sans text-[#1E2A32] ml-4">
            Distance
          </p>
          <p className="font-bold leading-9 xs:test-[22px] md:text-[30px] font-ibm-sans text-[#0079FF] mr-8">
            {distance} kms
          </p>
        </div>
        <p className="font-bold text-center my-8 leading-3 text-[12px] font-ibm-sans text-[#1E2A32] xs:w-[287px] xs:h-[28px]">
         { `The distance between ${source?.results[0]?.city ?? ""} and ${destination?.results[0]?.city ?? ""} via the seleted route is ${distance}
          kms.`}
        </p>
      </div>
    </div>
  );
};

export default SearchSection;
