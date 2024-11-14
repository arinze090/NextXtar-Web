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
import PlaylistLists from "../pages/MusicLibrary/PlaylistLists";
import PressReleasePage from "../pages/Home/PressReleasePage";
import FanLinkPage from "../pages/Home/FanLinkPage";
import EditPressRelease from "../pages/Home/EditPressRelease";
import TermsAndCondition from "../pages/Support/TermsAndCondition";
import PartnershipProcedure from "../pages/Profile/PartnershipProcedure";
import FaceVideoUpload from "../pages/Upload/FaceVideoUpload";
import FaceVideo from "../pages/Upload/FaceVideo";
import DanceVideoUpload from "../pages/Upload/DanceVideoUpload";
import DanceVideo from "../pages/Upload/DanceVideo";
import Support from "../pages/Support/Support";
import Search from "../pages/Home/Search";
import UploadVideo from "../pages/Upload/UploadVideo";
import GenresListing from "../pages/MusicLibrary/GenresListing";
import Home from "../pages/Home/Home";
import WithdrawalPage from "../pages/Profile/WithdrawalPage";
import UserVerification from "../pages/Profile/UserVerification";
import DiscoverCategoryList from "../pages/MusicLibrary/DiscoverCategoryList";
import MusicPlayer from "../components/musicPlayer/MusicPlayer";
import Promotions from "../pages/Profile/Promotions";
import TakedownSongsPage from "../pages/Profile/TakedownSongsPage";

function ProtectedRoutes() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // console.log("state", state);

  const reduxLastTimeAPIFetch = useSelector(
    (state) => state?.discover?.lastAPIFetchTime
  );

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
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/discover/:category" element={<DiscoverCategoryList />} />
        <Route path="/search" element={<Search />} />

        {/*  Upload section */}
        <Route path="/upload" element={<UploadScreen />} />
        <Route path="/upload-music" element={<UploadMusic />} />
        <Route path="/upload-tracks" element={<UploadTracks />} />
        <Route path="/upload-video" element={<UploadVideo />} />
        <Route path="/upload-album" element={<UploadAlbum />} />
        <Route path="/dance-video" element={<DanceVideo />} />
        <Route path="/dance-video-upload" element={<DanceVideoUpload />} />
        <Route path="/face-video" element={<FaceVideo />} />
        <Route path="/face-video-upload" element={<FaceVideoUpload />} />

        {/*  Paymnents section */}
        <Route path="/payments" element={<Payments />} />
        <Route path="/withdrawal" element={<WithdrawalPage />} />

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
        <Route
          path="/partnership-procedure"
          element={<PartnershipProcedure />}
        />

        {/*  Profile section */}
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/verification" element={<UserVerification />} />
        <Route path="/fanlinks" element={<FanLinkPage />} />
        <Route path="/press-release" element={<PressReleasePage />} />
        <Route path="/edit-press-release" element={<EditPressRelease />} />
        <Route path="/referral-code" element={<ReferralCode />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/news" element={<News />} />
        <Route path="/earn-points" element={<EarnPoints />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/takedown-song" element={<TakedownSongsPage />} />

        {/*  Music section */}
        <Route path="/playlist" element={<PlaylistLibrary />} />
        <Route path="/playlist/:playlistName" element={<PlaylistLists />} />
        <Route path="/radio" element={<RadioPlayer />} />
        <Route path="/genres" element={<GenresListing />} />

        {/*  Projects section */}
        <Route path="/projects" element={<ProjectsScreen />} />
        <Route path="/project-lists" element={<ProjectList />} />
        <Route path="/add-project" element={<AddProject />} />

        {/*  Support section */}
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/streaming-platforms" element={<StreamingPlatforms />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsAndCondition />} />
      </Routes>
      <MusicPlayer />

      <Footer />
    </Router>
  );
}

export default ProtectedRoutes;
