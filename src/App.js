import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  selectIdLodgeList,
  selectLodgeList,
  setIdOfLodges,
  setLodges,
} from "./features/slices/lodgeSlice";
import { Home } from "./pages";

function App() {
  const dispatch = useDispatch();
  const listOfLodge = useSelector(selectLodgeList);

  // when application reloads persit liked-lodge-state
  const data = JSON.parse(window.localStorage.getItem("lodgeList")) || [];
  useEffect(() => {
    dispatch(setLodges(data));
  }, []);

  // when lodgeList in redux state changes save directly to localstorage
  useEffect(() => {
    window.localStorage.setItem("lodgeList", JSON.stringify(listOfLodge));
  }, [listOfLodge]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
