import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  discoverTracks: null,
  discoverLoader: false,
  genres: null,
  listings: null,
  pressReleases: null,
  streamingPlatforms: null,
  competitions: null,
  lastAPIFetchTime: null,
};

const discoverSlice = createSlice({
  name: "discover",
  initialState: initialState,
  reducers: {
    setDiscoverTracks: (state, action) => {
      state.discoverTracks = action.payload;
      console.log("discoverTracks", state.discoverTracks);
    },
    setDiscoverLoader: (state, action) => {
      state.discoverLoader = action.payload;
      console.log("discoverLoader", state.discoverLoader);
    },
    setListings: (state, action) => {
      state.listings = action.payload;
    },
    setPressReleases: (state, action) => {
      state.pressReleases = action.payload;
    },
    setStreamingPlatforms: (state, action) => {
      state.streamingPlatforms = action.payload;
    },
    setCompetitions: (state, action) => {
      state.competitions = action.payload;
    },
    APILastFetchTime: (state, action) => {
      state.lastAPIFetchTime = action.payload;
    },
  },
});

export const {
  setDiscoverTracks,
  setListings,
  setPressReleases,
  setStreamingPlatforms,
  setCompetitions,
  APILastFetchTime,
  setDiscoverLoader,
} = discoverSlice.actions;
export default discoverSlice.reducer;
