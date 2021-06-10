import React, { useState } from "react";
import { Paper, Grid, TextField, Button, IconButton } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

export default function SignUp() {
  const [email, setEmail] = useState("");

  const [firstPW, setFirstPW] = useState("");

  const [secondPW, setSecondPW] = useState("");

  const handleSubmit = () => {
    if (firstPW === secondPW) {
      return "need work";
    } else {
      alert("please enter valid password");
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "15vh",
          fontFamily: "'Martel', serif",
        }}
      >
        <Paper elevation="3" style={{ width: "400px", height: "500px" }}>
          <div
            style={{
              textAlign: "center",
              fontSize: "40px",
              marginTop: "40px",
              marginBottom: "10px",
            }}
          >
            Sign Up
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <EmailIcon />
                </Grid>
                <Grid item>
                  <TextField
                    label="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <LockIcon />
                </Grid>
                <Grid item>
                  <TextField
                    label="Password"
                    onChange={(e) => {
                      setFirstPW(e.target.value);
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
              marginBottom: "80px",
            }}
          >
            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                  <LockIcon />
                </Grid>
                <Grid item>
                  <TextField
                    label="Retype Password"
                    onChange={(e) => {
                      setSecondPW(e.target.value);
                    }}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "80%" }}>
              <Button
                fullWidth
                style={{ textAlign: "center", backgroundColor: "#C7D8C6" }}
                onClick={handleSubmit}
              >
                SIGN UP
              </Button>
            </div>
          </div>
        </Paper>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
          fontFamily: "'Martel', serif",
        }}
      >
        Already have an account? Log in
      </div>
    </>
  );
}
