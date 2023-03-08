import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  selectFeaturedLodgeList,
  selectLodgeList,
  selectNormalLodgeList,
  setLodges,
} from "./features/slices/lodgeSlice";
import {
  Home,
  Details,
  ViewAll,
  LikedPage,
  SuggestProperty,
  VerifyProperty,
  Auth,
  CreateLodge,
  MissingPage,
  UpdateLodge,
  AboutUs,
  Unauthorized,
} from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "react-scroll-to-top";
import { Layout, RequireAuth } from "./components";
import { selectUser, setUser } from "./features/slices/userSlice";


const ROLES = {
  ADMIN: "admin",
  USER: "user",
}

function App() {
  const dispatch = useDispatch();
  const listOfLodge = useSelector(selectLodgeList);
  const listOfFeatured = useSelector(selectFeaturedLodgeList);
  const listOfNormal = useSelector(selectNormalLodgeList);
  const userDataObj = useSelector(selectUser)

  // console.log(userDataObj)

  // when application reloads persit liked-lodge-state
  const userData = JSON.parse(window.localStorage.getItem("userData")) || {};
  const data = JSON.parse(window.localStorage.getItem("lodgeList")) || [];
  const featuredLodgedata =
    JSON.parse(window.localStorage.getItem("featuredLodgeList")) || [];
  const normalLodgedata =
    JSON.parse(window.localStorage.getItem("normalLodgeList")) || [];


  useEffect(() => {
    dispatch(setLodges({ data, featuredLodgedata, normalLodgedata }));
    dispatch(setUser(userData))
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

    window.localStorage.setItem(
      "userData",
      JSON.stringify(userDataObj)
    );
  }, [listOfLodge, listOfFeatured, listOfNormal, userDataObj]);

  return (
    <>
      <ToastContainer theme="colored" pauseOnHover={false} autoClose={3000} />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* PUBLIC ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/our-team" element={<AboutUs />}/>

          {/* PROTECTED ROUTES */}
          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN, ROLES.USER]}/>}>
            <Route path="/view-all" element={<ViewAll />} />
            <Route path="/details" element={<Details />} />
            <Route path="/liked-lodges" element={<LikedPage />} />
            <Route path="/suggest" element={<SuggestProperty />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]}/>}>
            <Route path="/verify-property" element={<VerifyProperty />} />
            <Route path="/create-lodge" element={<CreateLodge />} />
            <Route path="/update-lodge" element={<UpdateLodge />}/>
          </Route>

          {/* CATCH NON-EXISTING ROUTES */}
          <Route path="*" element={<MissingPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Route>
      </Routes>
      <ScrollToTop
        smooth
        color="white"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--text-primary)",
        }}
      />
    </>
  );
}

export default App;
