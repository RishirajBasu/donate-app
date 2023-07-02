import React from "react";
import "./Header.css";
import profileimage from "../Assets/profile.png";
import { useState } from "react";
import UpdateIcon from "@mui/icons-material/Update";
import axios from "axios";
import { useEffect } from "react";
import { Update } from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  // get request to udpateprofile api
  const [response, setResponse] = useState(null);

  const url = `http://127.0.0.1:8000`;

  const fetchdata = async (user_id) => {
    try {
      let data = await axios.get(`${url}/accounts/profile/${user_id}`);
      setResponse(data);
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  const jsdate = () => {
    const isodate = new Date(response.data.created_at);
    return isodate.toString().slice(0, 25) + "Hrs";
  };
  const update = () => {
    const isotime = new Date(response.data.coordinates.last_updated);
    return isotime.toString().slice(0, 25) + "Hrs";
  };

  // geoLocation
  const geolocationAPI = navigator.geolocation;
  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      toast.error("Geolocation API is not available in your browser!");
      return;
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          try {
            let { data } = axios.post(
              `${url}/accounts/location/`,
              {
                email: response.data.email ? response.data.email : "",
                longitude: coords.longitude,
                latitude: coords.latitude,
              },
              {
                headers: {
                  "Content-type": "application/json",
                },
              }
            );
            toast.success("Location updated successfully");
          } catch (error) {
            if (error.response.status === 400) {
              toast.error(error.response.data.message);
            } else {
              toast.error("Something went wrong!");
            }
          }
        },
        (error) => {
          toast.error(error.message);
        }
      );
    }
  };

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    if (user_id === null) return;
    fetchdata(user_id);
  }, []);

  useEffect(() => {
    if (response === null) return;
    if (response.data.coordinates === null) {
      getUserCoordinates();
    }
  }, [response]);

  return (
    <div className="headerContainer">
      <div className="profile">
        <img src={profileimage} alt="profile image" className="profileImage" />
        <div className="profileContent">
          <h2 className="name">
            {response && response.data.first_name && response.data.last_name
              ? response.data.first_name + " " + response.data.last_name
              : "" + " " + ""}
          </h2>
          <h4 className="date">
            Joined on : {response ? jsdate() : `Saturday, 12th june 2023`}
          </h4>
          <button className="editbutton">Edit Profile</button>
        </div>
      </div>
      <div className="lastUpdate">
        <div className="updateBox">
          <div className="updateText">
            <button className="refresh" onClick={getUserCoordinates}>
              <UpdateIcon className="updateIcon" />
            </button>
            <h4>Location Last Updated:</h4>
            <div className="data">{response ? update() : "12:30am "}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
