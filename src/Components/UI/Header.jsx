import React from "react";
import "./Header.css";
import profileimage from "../Assets/profile.png";
import { useState } from "react";
import UpdateIcon from "@mui/icons-material/Update";
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { Update } from "@mui/icons-material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = ({ user_id }) => {
  // dummy data
  const profileInfo = {
    fname: "Shirsha",
    lname: "Basu",
    created_at: "12/03/2023 at 11:30",
  };
  // get request to udpateprofile api
  const [response, setResponse] = useState(null);
  console.log(user_id);
  const url = `http://127.0.0.1:8000/accounts/profile/${user_id}`;
  useEffect(() => {
    const fetchdata = async () => {
      try {
        let data = await axios.get(`${url}`);
        setResponse(data);
        console.log(data);
      } catch (error) {
        if (error.response.status === 400) {
          toast.error(error.response.data.message);
        } else {
          toast.error("something went wrong.Kindly re-enter the form");
        }
      }
    };
    fetchdata();
    console.log("data called");
  }, []);
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
    console.log("geo location");
    if (!geolocationAPI) {
      // alert("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          const url = "http://127.0.0.1:8000/accounts/location/";
          try {
            axios.post(
              `${url}`,
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
          } catch (error) {
            // alert("error occured");
            console.log(error);
            if (error.response.status === 400) {
              toast.error(error.response.data.message);
            } else {
              toast.error("something went wrong.Kindly re-enter the form");
            }
          }
        },
        (error) => {
          // console.log(error);
          toast.error(error.message);
        }
      );
    }
  };

  useEffect(() => {
    getUserCoordinates();
  }, []);

  return (
    <div className="headerContainer">
      <div className="profile">
        <img src={profileimage} alt="profile image" className="profileImage" />
        <div className="profileContent">
          <h2 className="name">
            {response && response.data.first_name && response.data.last_name
              ? response.data.first_name + " " + response.data.last_name
              : profileInfo.fname + " " + profileInfo.lname}
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
          </div>
          <div className="data">
            <div className="updateDate">{response ? update() : "12:30am "}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
