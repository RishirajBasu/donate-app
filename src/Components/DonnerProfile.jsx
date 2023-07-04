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

const DonnerProfile = () => {
  const sidebarProp = {
    home: false,
    historyDonor: true,
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
        <div className="historyTable">
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
