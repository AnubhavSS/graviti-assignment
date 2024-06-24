import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import { useContext } from "react";
import { LocationContext } from "@/Context";
const createRoutineMachineLayer = (props) => {
  const { source, destination } = useContext(LocationContext);
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(source?.results[0]?.lat, source?.results[0]?.lon),
      L.latLng(destination?.results[0]?.lat, destination?.results[0]?.lon)
    ],
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
