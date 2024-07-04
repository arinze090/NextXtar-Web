import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
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
import SocialMediaDistribution from "../pages/Home/SocialMediaDistribution";
import ProjectsScreen from "../pages/Home/ProjectsScreen";
import AddProject from "../pages/Home/AddProject";
import ProjectList from "../pages/Home/ProjectList";
import ReferralCode from "../pages/Profile/ReferralCode";
import EditProfile from "../pages/Profile/EditProfile";
import Notifications from "../pages/Home/Notifications";
import AccountPage from "../pages/Profile/AccountPage";
import StreamingPlatforms from "../pages/Home/StreamingPlatforms";
import FAQs from "../pages/Support/FAQs";
import PrivacyPolicy from "../pages/Support/PrivacyPolicy";
import WisePayment from "../pages/Profile/WisePayment";
import News from "../pages/Home/News";
import AboutUs from "../pages/Home/AboutUs";
import EarnPoints from "../pages/Profile/EarnPoints";
import Discover from "../pages/Home/Discover";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

import { baseURL } from "../utils/api-client";
import { API_KEY } from "../utils/devKeys";
import {
  APILastFetchTime,
  setDiscoverLoader,
  setDiscoverTracks,
  setPressReleases,
} from "../redux/features/discover/discoverSlice";

function ProtectedRoutes() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state", state);

  const userToken = state?.user?.userToken;

  const reduxLastTimeAPIFetch = useSelector(
    (state) => state?.discover?.lastAPIFetchTime
  );

  const discoverTracksFromRedux = state?.discover?.discoverTracks;
  console.log("discoverTracksFromReduxX", discoverTracksFromRedux);

  const [loading, setLoading] = useState(false);

  const fetchDiscoverSongs = async () => {
    const form = new FormData();
    form.append("token", userToken);

    setLoading(true);
    dispatch(setDiscoverLoader(true));
    try {
      await axios
        .post(`${baseURL}discover.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("discover res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("fetchDiscoverSongs data", res?.data);
            // dispatch the data to redux
            dispatch(setDiscoverLoader(false));
            dispatch(setDiscoverTracks(res?.data));
          } else {
            console.log("message", res?.data);
          }
        })
        .catch((err) => {
          console.log("fetchDiscoverSongs err", err);
          setLoading(false);
        });
    } catch (error) {
      console.log("fetchDiscoverSongs error", error);
    }
  };

  // const fetchPressReleases = async () => {
  //   setLoading(true);

  //   const form = new FormData();
  //   form.append("token", userToken);
  //   form.append("limit", 10);
  //   form.append("page", 1);

  //   try {
  //     await axios
  //       .post(`${baseURL}press-releases.php?API_KEY=${API_KEY}`, form)

  //       .then((res) => {
  //         console.log("fetchPressReleases res", res);
  //         setLoading(false);

  //         if (res?.data?.status == 200) {
  //           console.log("fetchPressReleases data", res?.data);
  //           // dispatch the data to redux
  //           dispatch(setPressReleases(res?.data));
  //         } else {
  //           console.log("fetchPressReleases message", res?.data);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log("fetchPressReleases err", err);
  //         setLoading(false);
  //       });
  //   } catch (error) {
  //     console.log("fetchPressReleases error", error);
  //   }
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // await fetchDiscoverSongs();
        // await fetchPressReleases();

        dispatch(APILastFetchTime(Date.now()));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    let isMounted = true;
    if (isMounted) {
      // run a check if the last time fetched is greater than 6hrs in milliseconds
      if (
        !reduxLastTimeAPIFetch ||
        Date.now() - reduxLastTimeAPIFetch >= 21600000
      ) {
        // Fetch data from the API
        fetchData();
      }
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <ToastContainer />
      <Sidebar />
      <Routes>
        <Route path="/discover" element={<Discover />} />

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
        <Route path="/wise-payment" element={<WisePayment />} />

        <Route
          path="/express-distribution"
          element={<SocialMediaDistribution />}
        />

        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/project-lists" element={<ProjectList />} />
        <Route path="/add-project" element={<AddProject />} />

        <Route path="/referral-code" element={<ReferralCode />} />
        <Route path="/edit-profile" element={<EditProfile />} />

        <Route path="/notifications" element={<Notifications />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/earn-points" element={<EarnPoints />} />

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

export default ProtectedRoutes;
