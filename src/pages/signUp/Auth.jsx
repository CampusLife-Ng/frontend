import React, { useEffect } from "react";
import "./SignUp.css";
import { Navbar, NewsLetter, Footer } from "../../components";
import SignUp from "./SignUp";
import Login from "./Login";
import { useSelector } from "react-redux";
import { selectAuth } from "../../features/slices/authSlice";
import { useLocation } from "react-router-dom";



const Auth = () => {
  const accessLogin = useSelector(selectAuth);
  const location = useLocation();

  // console.log(location)

  return (
    <>
      <Navbar />
      <div className="signup__body">
        {accessLogin ? (
          <>
            <Login />
          </>
        ) : (
          <>
            <SignUp />
          </>
        )}
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Auth;
