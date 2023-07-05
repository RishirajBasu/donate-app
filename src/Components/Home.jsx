// reciever's view

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
  // const fetchdata = async (user_id) => {
  //   try {
  //     let data = await axios.get(`${url}/accounts/profile/${user_id}`);
  //     // console.log(data);
  //     if (!data.data.is_verified) {
  //       toast.error("Please verify your email first!");
  //       navigate("./login");
  //     }
  //   } catch (error) {
  //     if (error.data.status === 400) {
  //       toast.error(error.data.data.message);
  //     } else {
  //       toast.error("Something went wrong!");
  //     }
  //   }
  // };

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
  const dummyNearbyDonor = [
    {
      donor_id: 9,
      name: "Greg Ipe",
      blood_group: "O+",
      distance: 4.44,
      count: 0,
    },
    {
      donor_id: 1,
      name: "Greg Ipe",
      blood_group: "O+",
      distance: 4.44,
      count: 0,
    },
  ];
  const fetchDonorData = async (user_id) => {
    try {
      const { data } = await axios.get(
        `${url}/donor/profile`,
        {
          superuser_id: user_id,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      setData(data);
      console.log("Dataaa", data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDonorData(user_id);
    access();
    console.log("use");
    // fetchdata(user_id);
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
                    <button
                      className="refreshButton"
                      // onClick={fetchDonorData(user_id)}
                    >
                      <LoopIcon className="loop" fontSize="large" />
                    </button>
                  </TabList>
                </Box>
                {/* the value 1 represents the tab in which the content is inserted which is tab 1 */}
                <TabPanel value="1">
                  {data && data.length !== 0
                    ? data.map((data) => (
                        <div
                          className="donorContainer"
                          key={data.data.donor_id}
                        >
                          {/* donor 1 */}
                          <div className="detailbox">
                            <div className="donorDetails">
                              <div className="donorName">
                                <h2>{data.data.name}</h2>
                              </div>
                              <div className="donorAddress">
                                <h4>Blood Group - {data.data.blood_group}</h4>
                                <h4>
                                  {data.data.count} donations made till now
                                </h4>
                              </div>
                            </div>
                            <div className="donorDistance">
                              <LocationOnIcon />
                              <p>{data.data.distance} Kms away</p>
                            </div>
                          </div>
                          {/* donor 2 */}
                          {/* <div className="detailbox">
                        <div className="donorDetails">
                          <div className="donorName">
                            <h2>Adam Smith</h2>
                          </div>
                          <div className="donorAddress">
                            <h4>45/10</h4>
                          </div>
                        </div>
                        <div className="donorDistance">
                          <LocationOnIcon />
                          <p>1.5km</p>
                        </div>
                      </div> */}
                        </div>
                      ))
                    : dummyNearbyDonor.map((dummyNearbyDonor) => (
                        <div
                          className="donorContainer"
                          key={dummyNearbyDonor.donor_id}
                        >
                          {/* donor 1 */}
                          <div className="detailbox">
                            <div className="donorDetails">
                              <div className="donorName">
                                <h2>{dummyNearbyDonor.name}</h2>
                              </div>
                              <div className="donorAddress">
                                <h4>
                                  Blood Group - {dummyNearbyDonor.blood_group}
                                </h4>
                                <h4>
                                  {dummyNearbyDonor.count} donations made till
                                  now
                                </h4>
                              </div>
                            </div>
                            <div className="donorDistance">
                              <LocationOnIcon />
                              <p>{dummyNearbyDonor.distance} Kms away</p>
                            </div>
                          </div>
                          {/* donor 2 */}
                          {/* <div className="detailbox">
                        <div className="donorDetails">
                          <div className="donorName">
                            <h2>Adam Smith</h2>
                          </div>
                          <div className="donorAddress">
                            <h4>45/10</h4>
                          </div>
                        </div>
                        <div className="donorDistance">
                          <LocationOnIcon />
                          <p>1.5km</p>
                        </div>
                      </div> */}
                        </div>
                      ))}
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
