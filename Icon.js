import L from 'leaflet';

export const myIcon = new L.Icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=green&icon=taxi&iconType=awesome&apiKey=1f38da5a4e62418bb4afa3ced3b53c57`,
    iconSize: [31, 46], // size of the icon
    iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

export const destIcon = new L.Icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=black&icon=taxi&iconType=awesome&apiKey=1f38da5a4e62418bb4afa3ced3b53c57`,
    iconSize: [31, 46], // size of the icon
    iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

export const stopIcon = new L.Icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=blue&icon=taxi&iconType=awesome&apiKey=1f38da5a4e62418bb4afa3ced3b53c57`,
    iconSize: [31, 46], // size of the icon
    iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});