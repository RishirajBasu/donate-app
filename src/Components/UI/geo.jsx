import React, { useEffect, useState } from "react";

function Geo() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const geolocationAPI = navigator.geolocation;
  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      alert("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLong(coords.longitude);
        },
        (error) => {
          // console.log(error);
          alert(error.message);
        }
      );
    }
  };

  useEffect(() => {
    getUserCoordinates();
  }, []);

  return (
    <div className="">
      <p>
        Your coordinates are: {lat}, {long}
      </p>
      <button onClick={getUserCoordinates}>Refresh</button>
    </div>
  );
}

export default Geo;
