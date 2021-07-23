import React, { useState } from "react";
import { Paper, Grid, TextField, Button } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { useAuth } from "./context/AuthContext";
import { Link } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  async function handleSubmit() {
    try {
      setError("");
      setLoading(true);
      await login(email, password);
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

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
            Log In
          </div>
          {error && <Alert severity="error">{error}</Alert>}
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
                      setPassword(e.target.value);
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
              marginTop: "130px",
            }}
          >
            <div style={{ width: "80%" }}>
              <Button
                fullWidth
                style={{ textAlign: "center", backgroundColor: "#C7D8C6" }}
                onClick={handleSubmit}
                disabled={loading}
              >
                LOG IN
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
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
}
