const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1Ijoicmlzb3R0b2pzIiwiYSI6ImNrMzRud3U4NjE3N3MzZGszYWN5NDdydmIifQ.vuMW-gxw7j_wQJuJnMjJFw';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
