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
import MoneyAfricaKids from "./components/MoneyAfricaKids/MoneyAfricaKids";
import MoneyAfricaAutomatedDigitalAdvisory from "./components/MoneyAfricaAutomatedDigitalAdvisory/MoneyAfricaAutomatedDigitalAdvisory";
import MoneyAfricaCareerPage from "./components/MoneyAfricaCareerPage/MoneyAfricaCareerPage";
import MoneyAfricaCareerForJobs from "./components/MoneyAfricaCareerForJobs/MoneyAfricaCareerForJobs";
import MoneyAfricaToolsPage from "./components/MoneyAfricaToolsPage/MoneyAfricaToolsPage";
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
          path={"moneyAfrica/MoneyAfricaAutomatedDigitalAdvisory"}
          element={<MoneyAfricaAutomatedDigitalAdvisory />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaCareerPage"}
          element={<MoneyAfricaCareerPage />}
        />
        <Route
          path="/moneyAfrica/MoneyAfricaKids"
          element={<MoneyAfricaKids />}
        />
        <Route
          path="/moneyAfrica/MoneyAfricaCareerForJobs"
          element={<MoneyAfricaCareerForJobs />}
        />
        <Route
          path="/moneyAfrica/MoneyAfricaToolsPage"
          element={<MoneyAfricaToolsPage />}
        />
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
