import tw from "tailwind-styled-components";
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = "pk.eyJ1IjoiZGFyZS1lYmVuIiwiYSI6ImNrdnA2N291dTB3dDIyd3FoZDdzeHNyNmwifQ.4ecRrkm5qpxEOy_8QwiGyQ";

const Map = () => {
  useEffect(() => {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const map = new mapboxgl.Map({
          container: "map",
          style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
          center: [longitude, latitude],
          //   center: [-99.29011, 39.39172],
          zoom: 15,
        });
        map.addControl(new mapboxgl.NavigationControl());
        map.addControl(
          new mapboxgl.GeolocateControl({
            positionOptions: {
              enableHighAccuracy: true,
            },
            trackUserLocation: true,
          })
        );
      });
    }
  });
  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
    flex-1
  `;
