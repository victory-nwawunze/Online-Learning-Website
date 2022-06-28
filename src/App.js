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
import MoneyAfricaSavingAndInvestmentPage from "./components/MoneyAfricaSavingAndInvestmentPage/MoneyAfricaSavingAndInvestmentPage";
import MoneyAfricaInvestmentPage from "./components/MoneyAfricaInvestmentPage/MoneyAfricaInvestmentPage";
import MoneyAfricaRetirementPortfolioPage from "./components/MoneyAfricaRetirementPortfolioPage/MoneyAfricaRetirementPortfolioPage";
import MoneyAfricaTalkToAnExpert from "./components/MoneyAfricaTalkToAnExpert/MoneyAfricaTalkToAnExpert";
import MoneyAfricaSignUpPage from "./components/MoneyAfricaSignUpPage/MoneyAfricaSignUpPage";
import MoneyAfricaSignUpVerification from "./components/MoneyAfricaSignUpVerification/MoneyAfricaSignUpVerification";
import ResetsPasswordEmails from "./components/ResetsPasswordEmails/ResetsPasswordEmails";
import MoneyAfricaResetPassword from "./components/MoneyAfricaResetPassword/MoneyAfricaResetPassword";
import MoneyAfricaSubscribePage from "./components/MoneyAfricaSubscribePage/MoneyAfricaSubscribePage";
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
        <Route
          path={"moneyAfrica/MoneyAfricaSavingAndInvestmentPage"}
          element={<MoneyAfricaSavingAndInvestmentPage />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaInvestmentPage"}
          element={<MoneyAfricaInvestmentPage />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaRetirementPortfolioPage"}
          element={<MoneyAfricaRetirementPortfolioPage />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaTalkToAnExpert"}
          element={<MoneyAfricaTalkToAnExpert />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaSignUpPage"}
          element={<MoneyAfricaSignUpPage />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaSignUpVerification"}
          element={<MoneyAfricaSignUpVerification />}
        />
        <Route
          path={"moneyAfrica/ResetsPasswordEmails"}
          element={<ResetsPasswordEmails />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaResetPassword"}
          element={<MoneyAfricaResetPassword />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaSubscribePage"}
          element={<MoneyAfricaSubscribePage />}
        />
        <Route path="*" element={<NotFoundSorry />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
