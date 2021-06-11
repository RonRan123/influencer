import "./App.css";
import React from "react";
import SignUp from "./components/authentication/SignUp";
import LogIn from "./components/authentication/LogIn";
import { AuthProvider } from "./components/authentication/context/AuthContext";
import HomePage from './components/home/HomePage';
import FormProvider from './context/ForumContext';
import CommentProvider from './context/CommentContext';

function App() {
  return (
    <AuthProvider>
      <div>
        {/* <LogIn /> */}
        <FormProvider>
          <CommentProvider>
            <HomePage/>
          </CommentProvider>
        </FormProvider>
      </div>
      );
    </AuthProvider>
  );
}

export default App;
