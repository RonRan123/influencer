import "./App.css";
import React from "react";
import SignUp from "./components/authentication/SignUp";
import { AuthProvider } from "./components/authentication/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div>
        <SignUp />
      </div>
      );
    </AuthProvider>
  );
}

export default App;
