import "./App.css";
import React from "react";
import SignUp from "./Components/authentication/SignUp";
import { AuthProvider } from "./Components/authentication/context/AuthContext";
import HomePage from './Components/home/HomePage';
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
