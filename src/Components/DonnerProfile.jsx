import React from "react";
import Sidebar from "./UI/Sidebar";
import Header from "./UI/Header";
import "./DonnerProfile.css";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const DonnerProfile = () => {
  const sidebarProp = {
    home: false,
    historyDonor: false,
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

  const rows = [
    {
      name: "Rishiraj Basu",
      bloodGroup: "B+",
      status: "active",
      units: 2,
      paymentStatus: "Pending",
      dateofDonation: "12/08/23",
      dateofRequest: "15/08/23",
    },
    {
      name: "Rishiraj Basu",
      bloodGroup: "B+",
      status: "active",
      units: 2,
      paymentStatus: "Pending",
      dateofDonation: "12/08/23",
      dateofRequest: "15/08/23",
    },
    {
      name: "Rishiraj Basu",
      bloodGroup: "B+",
      status: "active",
      units: 2,
      paymentStatus: "Pending",
      dateofDonation: "12/08/23",
      dateofRequest: "15/08/23",
    },
    {
      name: "Rishiraj Basu",
      bloodGroup: "B+",
      status: "active",
      units: 2,
      paymentStatus: "Pending",
      dateofDonation: "12/08/23",
      dateofRequest: "15/08/23",
    },
  ];
  // reciever window

  return (
    <div className="historyContainer">
      <div className="historyLeft">
        <Sidebar {...sidebarProp} />
      </div>
      <div className="historyRight">
        <div className="headerBox">
          <Header />
        </div>
        <div className="donorProfileInfo">
          <div className="requestName">
            Donner Requests
            <div className="nameBox">
              <TableContainer component={Paper}>
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
                        Sayak Ghosh
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ fontSize: 16, fontWeight: 700 }}
                      >
                        88888-999999
                      </TableCell>
                      <TableCell
                        align="left"
                        className="tableHead"
                        sx={{ fontSize: 16, fontWeight: 700 }}
                      >
                        2 Units
                      </TableCell>
                      <TableCell
                        align="left"
                        className="tableHead"
                        sx={{ fontSize: 16, fontWeight: 700 }}
                      >
                        1.3km Away
                      </TableCell>
                      <button className="accept-button">Accept</button>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
              <TableContainer component={Paper}>
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
                        Deep Ghosh
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ fontSize: 16, fontWeight: 700 }}
                      >
                        88888-999999
                      </TableCell>
                      <TableCell
                        align="left"
                        className="tableHead"
                        sx={{ fontSize: 16, fontWeight: 700 }}
                      >
                        3 Units
                      </TableCell>
                      <TableCell
                        align="left"
                        className="tableHead"
                        sx={{ fontSize: 16, fontWeight: 700 }}
                      >
                        4km Away
                      </TableCell>
                      <button className="accept-button">Accept</button>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
            </div>
          </div>
          <div className="side-box">
            <div className="level-text">LEVEL</div>
            <div className="level-details">2</div>
            <div className="progress-bar">
              <div className="progress-bar-fill"></div>
            </div>
          </div>
        </div>

        <div className="historyTable">
          <h4>See whom you have donated till now!</h4>
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
                {rows?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{
                      "&:last-child td, &:last-child th": {
                        border: 0,
                      },
                    }}
                    className="coloredBg"
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.bloodGroup}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                    <TableCell align="left">{row.units}</TableCell>
                    <TableCell align="left">{row.paymentStatus}</TableCell>
                    <TableCell align="left">{row.dateofDonation}</TableCell>
                    <TableCell align="left">{row.dateofRequest}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default DonnerProfile;
