const mapboxgl = require("mapbox-gl");

const buildMarker = (markerType, coordinates) => {
    // markerType = string, coordinates = array
    const marker = document.createElement('div');
    marker.style.width = "32px";
    marker.style.height = "39px";

    if (markerType === 'restaurant') {
        marker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";    
    }
    else if (markerType === 'hotel') {
        marker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    } else {
        marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }

    return new mapboxgl.Marker(marker).setLngLat(coordinates);
}

module.exports = buildMarker;