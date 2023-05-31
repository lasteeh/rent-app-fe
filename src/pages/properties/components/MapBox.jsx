import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibGFzdGllaCIsImEiOiJjbGhzbWkzeXgybzU1M25wczZlNmFuN3hsIn0.Tf3lGAwrvrdtOki1yY7r-g";

const getCoordinatesFromAddress = async (address) => {
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=${mapboxgl.accessToken}`
  );
  const data = await response.json();
  if (data.features && data.features.length > 0) {
    return data.features[0].geometry.coordinates;
  } else {
    throw new Error("Address not found");
  }
};

const MapBox = ({ currentAddress }) => {
  const mapContainer = useRef(null);
  const [markerCoordinates, setMarkerCoordinates] = useState([
    120.9836, 14.5826,
  ]);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: markerCoordinates,
      zoom: 12.5,
    });

    map.on("load", () => {
      new mapboxgl.Marker().setLngLat(markerCoordinates).addTo(map);
    });

    return () => map.remove();
  }, [markerCoordinates]);

  useEffect(() => {
    const setMarkerOnMap = async () => {
      console.log(markerCoordinates, "chenji");

      const coordinatura = await getCoordinatesFromAddress(currentAddress);
      setMarkerCoordinates(coordinatura);
    };

    if (currentAddress) {
      setMarkerOnMap();
    }
  }, [currentAddress]);

  return (
    <div ref={mapContainer} className="map-container | w-full h-[500px]" />
  );
};

export default MapBox;
