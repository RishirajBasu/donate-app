import React from "react";
import "./Error.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
const Error = () => {
  const navigate = useNavigate();
  const goto_home = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <div className="lock"> </div>
      <div className="message">
        <h1 className="errortype">404</h1>
        <p className="errormsg">Opps! Some Error Occurred.</p>
      </div>
      <div className="button">
        <Button variant="contained" color="error" onClick={goto_home()}>
          Home
        </Button>
      </div>
    </div>
  );
};

export default Error;
