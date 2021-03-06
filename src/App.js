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
import MoneyAfricaArticleListingPage from "./components/MoneyAfricaArticleListingPage/MoneyAfricaArticleListingPage";
import MoneyAfricaArticleDetailsStandalone from "./components/MoneyAfricaArticleDetailsStandalone/MoneyAfricaArticleDetailsStandalone";
import MoneyAfricaArticleCourse from "./components/MoneyAfricaArticleCourse/MoneyAfricaArticleCourse";
import MoneyAfricaVideoListing from "./components/MoneyAfricaVideoListing/MoneyAfricaVideoListing";
import MoneyAfricaMoreVideoListingPage from "./components/MoneyAfricaMoreVideoListingPage/MoneyAfricaMoreVideoListingPage";
import MoneyAfricaNotSeenPreviews from "./components/MoneyAfricaNotSeenPreviews/MoneyAfricaNotSeenPreviews";
import SubscriptionChooseSubscriptionPlan from "./components/SubscriptionChooseSubscriptionPlan/SubscriptionChooseSubscriptionPlan";
import ResetPassWordEmailSent from "./components/ResetPassWordEmailSent/ResetPassWordEmailSent";
import SubscribeNowOrLater from "./components/SubscribeNowOrLater/SubscribeNowOrLater";
import EnrollYourKidsSummerBootCamp from "./components/EnrollYourKidsSummerBootCamp/EnrollYourKidsSummerBootCamp";
import ChildrenEnrollSummerCampBootcamp from "./components/ChildrenEnrollSummerCampBootcamp/ChildrenEnrollSummerCampBootcamp";
import PlayThisVideo from "./components/PlayThisVideo/PlayThisVideo";
import VideoPlayingComponent from "./components/VideoPlayingComponent/VideoPlayingComponent";
import PlayThisVideoWithOpenMenu from "./components/PlayThisVideoWithOpenMenu/PlayThisVideoWithOpenMenu";
import MoneyAfricaSettingsPage from "./components/MoneyAfricaSettingsPage/MoneyAfricaSettingsPage";
import MoneyAfricaSubscriptionSettingsPage from "./components/MoneyAfricaSubscriptionSettingsPage/MoneyAfricaSubscriptionSettingsPage";
import ChangePasswordSettingsPages from "./components/ChangePasswordSettingsPages/ChangePasswordSettingsPages";
import MoneyAfricaSettingUnsubscribePage from "./components/MoneyAfricaSettingUnsubscribePage/MoneyAfricaSettingUnsubscribePage";
import NotificationPage from "./components/NotificationPage/NotificationPage";
const App = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
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
          path={"moneyAfrica/MoneyAfricaArticleListingPage"}
          element={<MoneyAfricaArticleListingPage />} //
        />
        <Route
          path={"moneyAfrica/MoneyAfricaSubscribePage"}
          element={<MoneyAfricaSubscribePage />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaArticleDetailsStandalone"}
          element={<MoneyAfricaArticleDetailsStandalone />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaArticleCourse"}
          element={<MoneyAfricaArticleCourse />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaVideoListing"}
          element={<MoneyAfricaVideoListing />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaMoreVideoListingPage"}
          element={<MoneyAfricaMoreVideoListingPage />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaNotSeenPreviews"}
          element={<MoneyAfricaNotSeenPreviews />}
        />
        <Route
          path={"moneyAfrica/SubscriptionChooseSubscriptionPlan"}
          element={<SubscriptionChooseSubscriptionPlan />}
        />
        <Route
          path={"moneyAfrica/ResetPassWordEmailSent"}
          element={<ResetPassWordEmailSent />}
        />
        <Route
          path={"moneyAfrica/SubscribeNowOrLater"}
          element={<SubscribeNowOrLater />}
        />
        <Route
          path={"moneyAfrica/EnrollYourKidsSummerBootCamp"}
          element={<EnrollYourKidsSummerBootCamp />}
        />
        <Route
          path={"moneyAfrica/ChildrenEnrollSummerCampBootcamp"}
          element={<ChildrenEnrollSummerCampBootcamp />}
        />
        <Route path={"moneyAfrica/PlayThisVideo"} element={<PlayThisVideo />} />
        <Route
          path={"moneyAfrica/VideoPlayingComponent"}
          element={<VideoPlayingComponent />}
        />
        <Route
          path={"moneyAfrica/PlayThisVideoWithOpenMenu"}
          element={<PlayThisVideoWithOpenMenu />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaSettingsPage"}
          element={<MoneyAfricaSettingsPage />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaSubscriptionSettingsPage"}
          element={<MoneyAfricaSubscriptionSettingsPage />}
        />
        <Route
          path={"moneyAfrica/ChangePasswordSettingsPages"}
          element={<ChangePasswordSettingsPages />}
        />
        <Route
          path={"moneyAfrica/MoneyAfricaSettingUnsubscribePage"}
          element={<MoneyAfricaSettingUnsubscribePage />}
        />
        <Route
          path={"moneyAfrica/NotificationPage"}
          element={<NotificationPage />}
        />

        <Route path="*" element={<NotFoundSorry />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
