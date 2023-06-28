import React from "react";
import './geo.css';
import { useState } from 'react';

function App() {
 const [lat, setLat] = useState(null);
 const [long, setLong] = useState(null);
 const geolocationAPI = navigator.geolocation;
 const getUserCoordinates = () => {
    if (!geolocationAPI) {
      setError('Geolocation API is not available in your browser!')
    } else {
      geolocationAPI.getCurrentPosition((position) => {
        const { coords } = position;
        setLat(coords.latitude);
        setLong(coords.longitude);
      }, (error) => {
        setError('Something went wrong getting your position!')
      })
    }
    if (!geolocationAPI) {
        setError('Geolocation API is not available in your browser!')
      }
      else {
        geolocationAPI.getCurrentPosition((position) => {
          const { coords } = position;
          setLat(coords.latitude);
          setLong(coords.longitude);
        },
        (error) => {
            setError('Something went wrong getting your position!')
          })
          
          return (
            <div className="App">
              <p>Your coordinates are: {[lat, long]}</p>
            </div>
          );
          getUserCoordinates();
};

export default geo;