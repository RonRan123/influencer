import React, { createContext, useContext, useState } from "react";
import { auth } from "../../../../server/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    // auth.creatUserWithEmailAndPassword(email, password);

    auth.create;
  }

  const value = {
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
