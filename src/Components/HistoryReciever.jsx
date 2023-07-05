import React from "react";
import Sidebar from "./UI/Sidebar";
import Header from "./UI/Header";
import "./HistoryReciever.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const HistoryReciever = () => {
  const [data, setData] = useState([]);
  const sidebarProp = {
    home: false,
    historyReciever: true,
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
  const example = [
    {
      request_id: "ede6ec69-e627-4af9-a867-cff3195f76a3",
      donor_id: {
        id: 6,
        user: {
          id: 7,
          coordinates: {
            latitude: "22.4473",
            longitude: "88.3920",
            last_updated: "2023-07-02T11:41:27.899638Z",
          },
          email: "sayaksaha.107@gmail.com",
          first_name: "Sayak",
          last_name: "Saha",
          phone: "1234567875",
          address: "abc",
          date_of_birth: "2020-01-01",
          is_verified: true,
          is_donar: false,
          adhaar_number: "123456789020",
          created_at: "2023-06-22T15:46:08.390060Z",
          updated_at: "2023-07-02T07:57:24.750804Z",
          donor_application_status: "VR",
        },
        donor_since: "2023-06-27",
        blood_group: "A+",
        last_donated_on: null,
        is_available: true,
        is_verified: true,
        updated_at: "2023-07-02T13:40:58.258074Z",
        level: 1,
        donation_count: 0,
        donation_required_to_reach_next_level: 0,
        active_donation_request: null,
      },
      phone_number: "9477035368",
      blood_group: "O-",
      required_on: "2023-07-01T11:11:00Z",
      place_of_donation: "Jadavpur",
      units_required: 5,
      reason: null,
      type_of_donation: "blood",
      is_urgent: true,
      is_fullfiled: true,
      current_status: "fullfilled",
      requested_by: 14,
      coordinates: 5,
    },
  ];
  // reciever window
  const fetchRecieverHistory = async (user_id) => {
    try {
      let { data } = await axios.post(
        "http://127.0.0.1:8000/donation/receiver-history/",
        {
          requested_by: user_id,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setData(data);
      console.log("Data", data);
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    }
  };
  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    fetchRecieverHistory(user_id);
  }, []);
  return (
    <div className="historyContainer">
      <div className="historyLeft">
        <Sidebar {...sidebarProp} />
      </div>
      <div className="historyRight">
        <div className="headerBox">
          <Header />
        </div>
        <div className="historyTable">
          <TableContainer component={Paper} sx={{ borderRadius: "20px" }}>
            <Table
              sx={{ minWidth: 650 }}
              size="Large"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ fontSize: 16, fontWeight: 700 }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontSize: 16, fontWeight: 700 }}
                  >
                    Blood Group
                  </TableCell>
                  <TableCell
                    align="left"
                    className="tableHead"
                    sx={{ fontSize: 16, fontWeight: 700 }}
                  >
                    Status
                  </TableCell>
                  <TableCell
                    align="left"
                    className="tableHead"
                    sx={{ fontSize: 16, fontWeight: 700 }}
                  >
                    Units
                  </TableCell>
                  <TableCell
                    align="left"
                    className="tableHead"
                    sx={{ fontSize: 16, fontWeight: 700 }}
                  >
                    Payment Status
                  </TableCell>
                  <TableCell
                    align="left"
                    className="tableHead"
                    sx={{ fontSize: 16, fontWeight: 700 }}
                  >
                    Date of Donation
                  </TableCell>
                  <TableCell
                    align="left"
                    className="tableHead"
                    sx={{ fontSize: 16, fontWeight: 700 }}
                  >
                    Date of request
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data && data.length !== 0 ? (
                  data.map((data) => (
                    <TableRow
                      key={data.donor_id.user.id}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                        },
                      }}
                      className="coloredBg"
                    >
                      <TableCell component="th" scope="row">
                        {data.donor_id.user.first_name +
                          " " +
                          data.donor_id.user.last_name}
                      </TableCell>
                      <TableCell align="left">
                        {data.donor_id.user.blood_group}
                      </TableCell>
                      <TableCell align="left">{data.status}</TableCell>
                      <TableCell align="left">{data.units}</TableCell>
                      <TableCell align="left">{data.paymentStatus}</TableCell>
                      <TableCell align="left">{data.dateofDonation}</TableCell>
                      <TableCell align="left">{data.dateofRequest}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                    className="coloredBg"
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontWeight: 700 }}
                      align="right"
                    >
                      No history found at the moment!
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default HistoryReciever;
