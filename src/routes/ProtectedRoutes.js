import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ContactUs from "../pages/Home/ContactUs";
import Home from "../pages/Home/Home";
import Sidebar from "../components/sidebar/Sidebar";
import UploadScreen from "../pages/Upload/UploadScreen";
import UploadMusic from "../pages/Upload/UploadMusic";
import UploadTracks from "../pages/Upload/UploadTracks";
import UploadAlbum from "../pages/Upload/UploadAlbum";
import Payments from "../pages/Profile/Payments";
import BankAccountPage from "../pages/Profile/BankAccountPage";
import PaymentInformation from "../pages/Profile/PaymentInformation";
import InternationalPayment from "../pages/Profile/InternationalPayment";
import PayPalPayment from "../pages/Profile/PayPalPayment";
import Footer from "../pages/Footer";

function ProtectedRoutes() {
  return (
    <Router>
      <ToastContainer />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/upload" element={<UploadScreen />} />
        <Route path="/upload-music" element={<UploadMusic />} />
        <Route path="/upload-tracks" element={<UploadTracks />} />
        <Route path="/upload-album" element={<UploadAlbum />} />

        <Route path="/payments" element={<Payments />} />
        <Route path="/bank-payments" element={<BankAccountPage />} />

        <Route path="/payment-information" element={<PaymentInformation />} />
        <Route
          path="/international-payment"
          element={<InternationalPayment />}
        />
        <Route path="/paypal-payment" element={<PayPalPayment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default ProtectedRoutes;
