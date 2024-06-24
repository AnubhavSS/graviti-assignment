"use client"

import { createContext,useState } from "react";

export const LocationContext=createContext();



const Location = ({children}) => {

    const [source, setsource] = useState(null)
    const [destination, setdestination] = useState(null)
    const [stops, setstops] = useState(null)

  return (
    <LocationContext.Provider value={{source,setsource,destination,setdestination,stops,setstops}}>
        {children}
    </LocationContext.Provider>
  )
}

export default Location