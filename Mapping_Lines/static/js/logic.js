// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. (2 Ways to do this)
// First Way
let map = L.map('mapid').setView([40.7, -94.5], 4);
// Second Way
// Useful when we need to add multiple tile layers, or a background image of our map(s)
//let map = L.map("mapid", {
    //center: [
      //40.7, -94.5
    //],
    //zoom: 4
  //});

// Coordinates for each point to be used in the polyline.
let line = [
  // San Francisco - SFO
  [37.6213, -122.3790],
  // Denver - DEN (Bonus)
  [39.7392, -104.9903],
  // Austin - AUS
  [30.2672, -97.7431],
  // Toronto - YYZ
  [43.6532, -79.3832],
  // New York - JFK
  [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line black.
L.polyline(line, {
  color: "blue",
  weight: '4',
  opacity: '0.5',
  dashArray: '8, 8', 
  dashOffset: '0'
}).addTo(map);

// Get data from cities.js
let cityData = cities;

// We create the tile layer that will be the background of our map.
// Using satellite map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then add our 'graymap' tile layer to the map.
streets.addTo(map);