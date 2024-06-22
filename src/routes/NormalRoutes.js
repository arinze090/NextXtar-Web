import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "../pages/Navbar";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import RegisterScreen from "../pages/Auth/RegisterPage";
import ArtistRegister from "../pages/Auth/ArtistRegister";
import UserRegister from "../pages/Auth/UserRegister";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import ResendVerification from "../pages/Auth/ResendVerification";
import UserVerification from "../pages/Auth/UserVerification";
import ResetPassword from "../pages/Auth/ResetPassword";
import ContactUs from "../pages/Home/ContactUs";
import Footer from "../pages/Footer";
import StreamingPlatforms from "../pages/Home/StreamingPlatforms";
import FAQs from "../pages/Support/FAQs";
import PrivacyPolicy from "../pages/Support/PrivacyPolicy";
import AboutUs from "../pages/Home/AboutUs";

function NormalRoutes() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterScreen />} />

        <Route path="/register-as-an-artist" element={<ArtistRegister />} />
        <Route path="/register-as-a-music-lover" element={<UserRegister />} />

        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/resend-verififcation" element={<ResendVerification />} />
        <Route path="/user-verififcation" element={<UserVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/*  Support section */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/streaming-platforms" element={<StreamingPlatforms />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default NormalRoutes;
