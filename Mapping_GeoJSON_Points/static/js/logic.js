// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level. (2 Ways to do this)
// First Way
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);
// Second Way
// Useful when we need to add multiple tile layers, or a background image of our map(s)
//let map = L.map("mapid", {
    //center: [
      //40.7, -94.5
    //],
    //zoom: 4
  //});

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// Grabbing our GeoJSON data.
// Create a popup marker for San Francisco Airport on a night preview navigation map.
// Display the city, state, and the name of the airport on popup
//L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
  //pointToLayer: function(feature, latlng) {
    //console.log(feature);
    //return L.marker(latlng)
    //.bindPopup("<h2>" + feature.properties.name + "</h2><p>" + feature.properties.city + ", " + feature.properties.country + "</p>");
  //}
//}).addTo(map);

// Grabbing our GeoJSON data
// Create a popup marker for the San Francisco Airport on the outdoor map. 
// Display the airport code and name of the airport on popup
L.geoJson(sanFranAirport, {
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>" + "Airport code:" + feature.properties.faa + "</h2><p>" + "Airport Name:" + feature.properties.name + "</p>");
  }
}).addTo(map);

// Create the tile layer that will be the background of our map.
// Navigation preview (Night) style
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v4/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// Navigation preview (Day) style
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-day-v4/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then add our 'graymap' tile layer to the map.
streets.addTo(map);