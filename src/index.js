const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker.js")

mapboxgl.accessToken = 'pk.eyJ1Ijoicmlzb3R0b2pzIiwiYSI6ImNrMzRud3U4NjE3N3MzZGszYWN5NDdydmIifQ.vuMW-gxw7j_wQJuJnMjJFw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = document.createElement('div');
marker.style.width = "32px";
marker.style.height = "39px";
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";



new mapboxgl.Marker(marker).setLngLat([-87.6354, 41.8885]).addTo(map);

const newMarker = buildMarker('hotel', [-87.6364, 41.8885]);
newMarker.addTo(map);

const newMarker2 = buildMarker('restaurant', [-87.6344, 41.8895])
newMarker2.addTo(map);