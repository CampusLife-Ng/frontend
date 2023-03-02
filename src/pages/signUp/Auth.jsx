import React, { useEffect } from "react";
import "./SignUp.css";
import { Navbar, NewsLetter, Footer } from "../../components";
import SignUp from "./SignUp";
import Login from "./Login";
import { useSelector } from "react-redux";
import { selectAuth } from "../../features/slices/authSlice";

const Auth = () => {
  const accessLogin = useSelector(selectAuth);

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
