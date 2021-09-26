// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. (2 Ways to do this)
// First Way
// let map = L.map('mapid').setView([40.7, -94.5], 4);
// Second Way
// Useful when we need to add multiple tile layers, or a background image of our map(s)
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);
// Make the marker a circle
//L.circle([34.0522, -118.2437], {
    //radius: 100,
    //color: "black",
    //fillColor: '#ffffa1'
 //}).addTo(map);
 // Do the same using cirlceMarker() function
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
}).addTo(map);

// We create the tile layer that will be the background of our map.
// Dark style map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then add our 'graymap' tile layer to the map.
streets.addTo(map);