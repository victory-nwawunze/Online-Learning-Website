/** @format */
import React from "react";
import "./App.css";
import Contact from "./components/ContactUsPage/Contact";
import Footer from "./components/Footer";
import Guest from "./components/GuestPage/Guest";
import Navbar from "./components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import NotFoundSorry from "./components/NotFound/NotFoundSorry";
import SubscriptionPage from "./components/SubscriptionPage/SubscriptionPage";
import CommunityPage from "./components/CommunityPage/CommunityPage";
import AboutUs from "./components/AboutUs/AboutUs";
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"moneyAfrica/Guest"} />} />
        <Route path={"moneyAfrica/Guest"} element={<Guest />} />
        <Route path={"moneyAfrica/Contact"} element={<Contact />} />
        <Route path={"moneyAfrica/Community"} element={<CommunityPage />} />
        <Route path={"moneyAfrica/AboutUs"} element={<AboutUs />} />
        <Route
          path={"moneyAfrica/SubscribePage"}
          element={<SubscriptionPage />}
        />
        <Route path="*" element={<NotFoundSorry />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
