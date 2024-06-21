// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
  userToken: null,
  forgetPassword: null,
  imageUpload: null,
  progress: null,
  isUploading: false,
  path: {},
  lyricsUploadedData: null,
  audioFile: null,
  uploadedMP4Mediaresult: null,
  isAudioPlaying: false,
  isAudioPlayingData: null,
  fcmToken: null,
  reduxTheme: "light",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    registerUser: (state, action) => {
      state.registerUser = action.payload;
    },
    signOutUser: (state, action) => {
      state.user = null;
      state.userToken = null;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
      console.log("userToken", state.userToken);
    },
    setForgetPassordUserObject: (state, action) => {
      state.forgetPassword = action.payload;
      console.log("forgetPassword", state.forgetPassword);
    },
    setUploadingImage: (state, action) => {
      state.imageUpload = action.payload;
      console.log("imageUpload", state.imageUpload);
    },
    clearUploadedImageData: (state, action) => {
      state.imageUpload = null;
    },
    setUploadProgress: (state, action) => {
      state.progress = action.payload;
    },
    setIsUploading: (state, action) => {
      state.isUploading = action.payload;
    },
    setUploadFilePath: (state, action) => {
      state.path = action.payload;
    },
    setLyricsUploadData: (state, action) => {
      state.lyricsUploadedData = action.payload;
    },
    clearLyricsUploadData: (state, action) => {
      state.lyricsUploadedData = null;
    },
    setReduxAudioFile: (state, action) => {
      state.audioFile = action.payload;
    },
    setUploadMP4Mediaresult: (state, action) => {
      state.uploadedMP4Mediaresult = action.payload;
    },
    clearUploadMP4Mediaresult: (state, action) => {
      state.uploadedMP4Mediaresult = null;
    },
    setIsAudioPlaying: (state, action) => {
      state.isAudioPlaying = action.payload;
    },
    setIsAudioPlayingData: (state, action) => {
      state.isAudioPlayingData = action.payload;
    },
    setFCMToken: (state, action) => {
      state.fcmToken = action.payload;
    },
    changeTheme: (state, action) => {
      state.reduxTheme = action.payload;
    },
  },
});

export const {
  getUser,
  signOutUser,
  registerUser,
  setUserToken,
  setForgetPassordUserObject,
  setUploadingImage,
  clearUploadedImageData,
  setUploadProgress,
  setIsUploading,
  setUploadFilePath,
  setLyricsUploadData,
  clearLyricsUploadData,
  setReduxAudioFile,
  setUploadMP4Mediaresult,
  clearUploadMP4Mediaresult,
  setIsAudioPlaying,
  setIsAudioPlayingData,
  setFCMToken,
  changeTheme,
} = userSlice.actions;
export default userSlice.reducer;
