import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FormSelect from "../../components/form/FormSelect";
import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import FormTextArea from "../../components/form/FormTextArea";
import UploadSection from "../../components/upload/UploadSection";
import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import { listOfCountries } from "../../data/dummyData";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 40px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    // background: red;
    flex-direction: column;
  }
`;

const RowContent = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const videoRecordRules = [
  "Video files must be H.264 video and AAC audio codec and of good quality. If you do not follow these rules, your release will be rejected.",
];

function UploadVideo() {
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const state = useSelector((state) => state);
  const user = state.user.user;
  const genres = state?.discover?.listings?.genres;
  const countryOptions = listOfCountries;

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Video upload section
  const [videoFile, setVideoFile] = useState("");
  const [base64Video, setBase64Video] = useState(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState(null);

  // states for the uploading music form
  const [genre, setGenre] = useState("");
  const [trackName, setTrackName] = useState("");
  const [trackArtistName, setTrackArtistName] = useState("");
  const [description, setDescription] = useState("");
  const [videoDuration, setVideoDuration] = useState("");

  const [language, setLanguage] = useState("");

  const [email, setEmail] = useState(
    user?.EmailAddress ? user?.EmailAddress : ""
  );
  const [phone, setPhone] = useState(user?.Phone ? user?.Phone : "");
  const [country, setCountry] = useState("");

  // Error states
  const [formError, setFormError] = useState("");

  const [countryError, setCountryError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [trackNameError, setTrackNameError] = useState("");
  const [genreError, setGenreError] = useState("");
  const [trackArtistNameError, setTrackArtistNameError] = useState("");
  const [languageError, setLanguageError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  // this function calls the upload track api
  const uploadVideo = async () => {
    const form = new FormData();
    form.append("token", user?.Token);
    form.append("privacy", "public");
    form.append("label", trackArtistName);
    form.append("name", trackName);
    form.append("genre", JSON?.parse(genre));
    form.append("language", language);
    form.append("tags", "Singnify");
    form.append("image", null);
    form.append("duration", videoDuration);
    form.append("video", uploadedVideoUrl?.link);
    form.append("country", country);
    form.append("phone", phone);
    form.append("choice", "Uploading for Myself");
    form.append("is_edit", "");
    form.append("video_id", "");
    form.append("description", description);

    if (!trackArtistName) {
      setTrackArtistNameError("provide the details");
    } else if (!trackName) {
      setTrackNameError("provide a track name");
    } else if (!genre) {
      setGenreError("Select a genre");
    } else if (!country) {
      setCountryError("provide a country");
    } else if (!language) {
      setLanguageError("provide a language");
    } else if (!description) {
      setDescriptionError("provide a description");
    } else {
      setLoading(true);

      try {
        await axios
          .post(`${baseURL}save-video.php?API_KEY=${API_KEY}`, form)
          .then((res) => {
            console.log("res", res);
            setLoading(false);

            if (res?.data?.status == 200) {
              console.log("uploadVideo data", res?.data);

              toast.success("Your video has been uploaded successfully 😇");
              navigate("/upload");
            } else {
              console.log("uploadVideo message", res?.data?.status);
              setFormError("Something went wrong, please try again later");

              toast.error(
                "Video Upload Failed",
                "Something went wrong while uploading your video, please try again later"
              );
            }
          })
          .catch((err) => {
            console.log("uploadVideo err", err);
            setLoading(false);
            toast.error(
              "Video Upload Failed",
              "Something went wrong while uploading your Video, please try again later"
            );
          });
      } catch (error) {
        setLoading(false);

        console.log("uploadVideo error", error);
        toast.error(
          "Video Upload Failed",
          "Something went wrong while uploading your Video, please try again later"
        );
      }
    }
  };

  const handleVideoFileChange = (event) => {
    const file = event.target.files[0];
    setVideoFile(file);

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setSelectedVideoUrl(fileUrl);

      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Video(reader?.result);
      };
      reader.readAsDataURL(file);

      // Create a video element to load the file and get its duration
      const videoElement = document.createElement("video");
      videoElement.src = fileUrl;

      // Wait for the metadata to load, which includes the duration
      videoElement.onloadedmetadata = () => {
        const duration = videoElement.duration;
        console.log("Video Duration: ", duration?.toFixed(2));

        // Optionally, you can set this duration to state if needed
        setVideoDuration(duration?.toFixed(2));
      };
    }
  };

  // this function calls the upload mp4 files or videos api to store the documnet in the db
  const uploadMP4File = async (file, base64Video) => {
    setLoading(true);

    const api_nonce = Date.now().toString();

    const form = new FormData();
    form.append("id", user?.ID);
    form.append("nounce", api_nonce);
    form.append("file", file);
    form.append("file_data", base64Video);

    try {
      await axios
        .post(`${baseURL}upload-video.php?API_KEY=${API_KEY}`, form, {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        })
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("uploadMP4File data", res?.data);

            setUploadedVideoUrl(res?.data);
            toast.success("Your video uploaded successfully 😇");
          } else {
            console.log("message", res?.data?.status);
            setFormError("Something went wrong, please try again later");

            toast.error(
              "Video Upload Failed",
              "Something went wrong while uploading your video, please try again later"
            );
          }
        })
        .catch((err) => {
          console.log("uploadMP4File err", err);
          setLoading(false);
          toast.error(
            "Video Upload Failed",
            "Something went wrong while uploading your video, please try again later"
          );
        });
    } catch (error) {
      console.log("uploadMP4File error", error);
      toast.error(
        "Video Upload Failed",
        "Something went wrong while uploading your video, please try again later"
      );
    }
  };

  return (
    <Container>
      <RowContent>
        <FormInput
          formTitle={"Artist Name"}
          inputId={"artist-name"}
          inputPlaceholder={"Artist Name"}
          type={"text"}
          value={trackArtistName}
          onChange={(e) => {
            setTrackArtistName(e.target.value);
            setFormError("");
            setTrackArtistNameError("");
          }}
          width={"30%"}
          errorMessage={trackArtistNameError}
        />

        <FormInput
          formTitle={"Video Track Name"}
          inputId={"track-name"}
          inputPlaceholder={"Video Track Name"}
          type={"text"}
          value={trackName}
          onChange={(e) => {
            setTrackName(e.target.value);
            setFormError("");
            setTrackNameError("");
          }}
          width={"30%"}
          errorMessage={trackNameError}
        />
        <FormInput
          formTitle={"Email Address"}
          inputId={"email-address"}
          inputPlaceholder={"Email Address"}
          type={"email"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setFormError("");
            setEmailError("");
          }}
          width={"30%"}
          errorMessage={emailError}
        />
      </RowContent>

      <RowContent>
        <FormInput
          formTitle={"What language is the track name in?"}
          inputId={"language"}
          inputPlaceholder={"language"}
          type={"text"}
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
            setFormError("");
            setLanguageError("");
          }}
          width={"48%"}
          errorMessage={languageError}
        />
        <FormSelect
          formTitle={"Genre"}
          options={genres}
          selectId={"Genre"}
          selectPlaceholder={"Select Genre"}
          width={"48%"}
          onChange={(e) => {
            setGenre(e.target.value);
            setFormError("");
            setGenreError("");
          }}
          errorMessage={genreError}
        />
      </RowContent>

      <RowContent>
        <FormInput
          formTitle={"Phone Number"}
          inputId={"phone"}
          inputPlaceholder={"Phone Number"}
          type={"number"}
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            setFormError("");
            setPhoneError("");
          }}
          width={"48%"}
          errorMessage={phoneError}
        />
        <FormSelect
          formTitle={"Nationality or Country"}
          options={countryOptions}
          selectId={"country"}
          selectPlaceholder={"Nationality or Country"}
          width={"48%"}
          onChange={(e) => {
            setCountry(e.target.value);
            setFormError("");
            setCountryError("");
          }}
          errorMessage={countryError}
        />
      </RowContent>

      <FormTextArea
        formTitle={"Description"}
        row={5}
        value={description}
        errorMessage={descriptionError}
        onChange={(e) => {
          setDescription(e.target.value);
          setFormError("");
          setDescriptionError("");
        }}
        width={"100%"}
      />

      <UploadSection
        title="Video Recording"
        uploadTitle="Video"
        uploadDescription="Drag & drop files or Browse. Supported formats: MP4"
        rules={videoRecordRules}
        uploadBtnTitle={"Upload Video"}
        fileType={"video/*"}
        handleFileChange={handleVideoFileChange}
        loading={loading}
        selectedFile={videoFile}
        onFileUpload={() => {
          uploadMP4File(videoFile, base64Video);
        }}
        previewUrl={selectedVideoUrl}
        handleCancel={() => {
          setVideoFile(null);
          setSelectedVideoUrl(null);
        }}
        UploadedText={"Your Track has been uploaded"}
        isFileUploaded={uploadedVideoUrl?.link}
        uploadPercentage={progress}
      />

      <div
        style={{
          justifyContent: "center",
          display: "flex",
          width: "100%",
        }}
      >
        <FormButton
          title={"Submit"}
          width={"225px"}
          marginLeft={"0px"}
          onClick={uploadVideo}
          loading={loading}
          errorMessage={formError}
        />
      </div>
    </Container>
  );
}

export default UploadVideo;
