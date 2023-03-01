import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  selectFeaturedLodgeList,
  selectLodgeList,
  selectNormalLodgeList,
  setLodges,
} from "./features/slices/lodgeSlice";
import { Home, Details, ViewAll, LikedPage, SignUp, SuggestProperty, VerifyProperty } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const listOfLodge = useSelector(selectLodgeList);
  const listOfFeatured = useSelector(selectFeaturedLodgeList);
  const listOfNormal = useSelector(selectNormalLodgeList);

  // when application reloads persit liked-lodge-state
  const data = JSON.parse(window.localStorage.getItem("lodgeList")) || [];
  const featuredLodgedata =
    JSON.parse(window.localStorage.getItem("featuredLodgeList")) || [];
  const normalLodgedata =
    JSON.parse(window.localStorage.getItem("normalLodgeList")) || [];
  useEffect(() => {
    dispatch(setLodges({ data, featuredLodgedata, normalLodgedata }));
  }, []);

  // when lodgeList in redux state changes save directly to localstorage
  useEffect(() => {
    window.localStorage.setItem("lodgeList", JSON.stringify(listOfLodge));
    window.localStorage.setItem(
      "featuredLodgeList",
      JSON.stringify(listOfFeatured)
    );
    window.localStorage.setItem(
      "normalLodgeList",
      JSON.stringify(listOfNormal)
    );
  }, [listOfLodge, listOfFeatured, listOfNormal]);

  return (
    <>
      <ToastContainer theme="colored" pauseOnHover={false} autoClose={3000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/view-all" element={<ViewAll />} />
        <Route path="/liked-lodges" element={<LikedPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/suggest" element={<SuggestProperty />} />
        <Route path="/verify-property" element={<VerifyProperty />} />
      </Routes>
    </>
  );
}

export default App;
