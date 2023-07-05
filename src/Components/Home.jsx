import React from "react";
import "./Home.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./UI/Header";
import Sidebar from "./UI/Sidebar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LoopIcon from "@mui/icons-material/Loop";
import LoadingButton from "./UI/LoadingButton";
import { RadioButtonUncheckedSharp } from "@mui/icons-material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const sidebarProp = {
    home: true,
    historyReciever: false,
    rewards: false,
    donor: false,
    active: {
      padding: "20px",
      border: "none",
      textAlign: "center",
      color: "white",
      borderRadius: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.383)",
      cursor: "pointer",
    },
  };
  const location = useLocation();
  const [value, setValue] = useState("1");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const url = `http://127.0.0.1:8000`;
  const token = localStorage.getItem("access");
  const user_id = localStorage.getItem("user_id");

  const access = async () => {
    if (token !== null) {
      console.log(`Access Token ${token}`);
      try {
        await axios.post(
          `${url}/accounts/token/verify/`,
          {
            token: token,
          },
          {
            headers: {
              "Content-type": "application/json",
            },
          }
        );
      } catch (error) {
        if (error.response.status === 401) {
          toast.error("Please login again!");
          navigate("/login");
        }
      }
    } else {
      toast.error("Please login first!");
      navigate("/login");
    }
  };

  const fetchNearbyDonorData = async (user_id) => {
    try {
      const { data } = await axios.get(`${url}/donor/nearby/${user_id}`, {
        headers: { "Content-Type": "application/json" },
      });
      setData(data);
      console.log("Data", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user_id === null) {
      navigate("/login", {replace: true});
      toast.error("Please login first!");
      return;
    }
    fetchNearbyDonorData(user_id);
    access();
  }, []);

  return (
    <div className="homeContainer">
      <div className="homeLeft">
        <div className="sidebarComponent">
          <Sidebar {...sidebarProp} />
        </div>
      </div>
      <div className="homeRight">
        <div className="headerComponent">
          {/* */}
          <Header />
        </div>
        <div className="donor">
          <div className="submitRequest">
            <LoadingButton text={"Submit Request"} loading={loading} />
          </div>
          <div className="donorList">
            {/* MUI Multi Tab code */}
            <Box
              sx={{
                width: "95%",
                typography: "body1",
              }}
              className="tabBox"
            >
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab label="Nearby Donors" value="1" />
                    <Tab label="Blood-Banks" value="2" />
                    <button className="refreshButton">
                      <LoopIcon className="loop" fontSize="large" />
                    </button>
                  </TabList>
                </Box>

                <TabPanel value="1">
                  {data && data.length !== 0 ? (
                    data?.map((data) => (
                      <div className="donorContainer" key={data.donor_id}>
                        <div className="detailbox">
                          <div className="donorDetails">
                            <div className="donorName">
                              <h2>{data?.name}</h2>
                            </div>
                            <div className="donorAddress">
                              <h4>Blood Group - {data.blood_group}</h4>
                              <h4>{data.count} donations made till now</h4>
                            </div>
                          </div>
                          <div className="donorDistance">
                            <LocationOnIcon />
                            <p>{data.distance} Kms away</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p>No data</p>
                  )}
                </TabPanel>
                <TabPanel value="2">No nearby Blood Banks found</TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
