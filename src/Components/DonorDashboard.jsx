import React, { useEffect, useState } from "react";
import "./DonorDashboard.css";
import Sidebar from "./UI/Sidebar";
import Header from "./UI/Header";
import { LinearProgress } from "@mui/material";
import axios from "axios";

const DonorDashboard = () => {
  const sidebarProp = {
    home: false,
    historyReciever: false,
    rewards: false,
    donor: true,
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

  const URL = "http://127.0.0.1:8000";
  const [response, setResponse] = useState(null);

  const fetchPendingRequests = async (donor_id) => {
    try {
      let { data } = await axios.post(
        `${URL}/donation/pending-request-list/`,
        {
          donor_id: donor_id,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setResponse(data);
      console.log("Data", data);
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };

  useEffect(() => {
    // const donor_id = localStorage.getItem("user_id");
    const donor_id = 6;
    fetchPendingRequests(donor_id);
  }, []);

  return (
    <div className="donorPageConatiner">
      <div className="donorPageConatinerLeft">
        <Sidebar {...sidebarProp} />
      </div>
      <div className="donorPageConatinerRight">
        <div className="donorHeader">
          <Header />
        </div>
        <div className="donorBody">
          <div className="donor-body-top">
            <div className="pending-requests">
              <h3>Donation Requests</h3>
              <div className="requests-box">
                {response && response.length !== 0 ? (
                  response.map((item) => (
                    <div className="donation-card" key={item.request_id}>
                      <div className="d-card-content">
                        <h5>
                          {item.requested_by.first_name +
                            " " +
                            item.requested_by.last_name}
                        </h5>
                        <h5>{item.phone_number}</h5>
                        <h5>{item.blood_group}</h5>
                        <h5>{item.units_required} Units</h5>
                        <h5>1.3km away</h5>
                        <h5 className="tag">{item.required_on}</h5>
                        <h5>{item.place_of_donation}</h5>
                      </div>
                      <div className="d-card-button">
                        <button>Accept</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <h1>No pending requests</h1>
                )}
              </div>
            </div>
            <div className="level-card">
              <h3>Profile Level</h3>
              <div className="level-card-box">
                <h5>Level</h5>
                <h1>2</h1>
                <p>3 more donations to next level</p>
                <LinearProgress variant="determinate" value={50} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
