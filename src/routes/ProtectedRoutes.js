import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ContactUs from "../pages/Home/ContactUs";
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

import { APILastFetchTime } from "../redux/features/discover/discoverSlice";
import PlaylistLibrary from "../pages/MusicLibrary/PlaylistLibrary";
import RadioPlayer from "../pages/MusicLibrary/RadioPlayer";
import ProfilePage from "../pages/Profile/ProfilePage";

function ProtectedRoutes() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // console.log("state", state);

  const reduxLastTimeAPIFetch = useSelector(
    (state) => state?.discover?.lastAPIFetchTime
  );

  const discoverTracksFromRedux = state?.discover?.discoverTracks;
  console.log("discoverTracksFromReduxX", discoverTracksFromRedux);

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

        {/*  Profile section */}
        <Route path="/profile" element={<ProfilePage />} />

        {/*  Music section */}
        <Route path="/playlist" element={<PlaylistLibrary />} />
        <Route path="/radio" element={<RadioPlayer />} />

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
