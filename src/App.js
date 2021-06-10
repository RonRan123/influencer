import "./App.css";
import React from "react";
import SignUp from "./components/authentication/SignUp";
import LogIn from "./components/authentication/LogIn";
import { AuthProvider } from "./components/authentication/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div>
        <LogIn />
      </div>
      );
    </AuthProvider>
  );
}

export default App;
