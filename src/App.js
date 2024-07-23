import "./App.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import NormalRoutes from "./routes/NormalRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import {
  APILastFetchTime,
  setListings,
  setStreamingPlatforms,
} from "./redux/features/discover/discoverSlice";
import { baseURL } from "./utils/api-client";
import { API_KEY } from "./utils/devKeys";
import GlobalStyles from "./theme/GlobalStyles";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state", state);

  const loggedInUser = state?.user?.user;
  console.log("loggedInUser", loggedInUser);

  const reduxLastTimeAPIFetch = useSelector(
    (state) => state?.discover?.lastAPIFetchTime
  );

  const [loading, setLoading] = useState(false);

  const fetchListings = async () => {
    setLoading(true);
    try {
      await axios
        .get(`${baseURL}listings.php?API_KEY=${API_KEY}`)
        .then((res) => {
          console.log("fetchListings res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("fetchListings data", res?.data);
            // dispatch the data to redux
            dispatch(setListings(res?.data));
          } else {
            console.log("fetchListings message", res?.data);
          }
        })
        .catch((err) => {
          console.log("fetchListings err", err);
          setLoading(false);
        });
    } catch (error) {
      console.log("fetchListings error", error);
    }
  };

  const fetchStreamingPlatforms = async () => {
    setLoading(true);

    try {
      await axios
        .get(`${baseURL}streaming-platforms.php?API_KEY=${API_KEY}`)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("getStreamingPlatforms data", res?.data);
            dispatch(setStreamingPlatforms(res?.data?.data));
          } else {
            console.log("getStreamingPlatforms message", res?.data?.status);
          }
        })
        .catch((err) => {
          console.log("getStreamingPlatforms err", err);
          setLoading(false);
        });
    } catch (error) {
      console.log("getStreamingPlatforms error", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchListings();
        await fetchStreamingPlatforms();

        dispatch(APILastFetchTime(Date.now()));
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors if needed
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
        fetchStreamingPlatforms();
      }
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      {loggedInUser ? <ProtectedRoutes /> : <NormalRoutes />}
    </>
  );
}

export default App;
