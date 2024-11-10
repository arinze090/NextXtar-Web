import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormButton from "../../components/form/FormButton";
import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import { clearUploadMP4Mediaresult } from "../../redux/features/user/userSlice";
import FormInput from "../../components/form/FormInput";
import FileUpload from "../../components/upload/FileUpload";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: black;
  padding-top: 80px;
`;

function FaceVideoUpload() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const user = state?.user?.user;

  const reduxMP4Url = state?.user?.uploadedMP4Mediaresult;
  const reduxisUploading = state.user.isUploading;

  const [loading, setLoading] = useState(false);

  const [faceVideotitle, setFaceVideotitle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState(null);
  const [base64Video, setBase64Video] = useState(null);

  // Error states
  const [formError, setFormError] = useState("");
  const [faceVideotitleError, setFaceVideotitleError] = useState("");
  const [artistNameError, setArtistNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      //   console.log("fileUrl", fileUrl);
      setSelectedVideoUrl(fileUrl);

      const reader = new FileReader();
      reader.onloadend = () => {
        // console.log("reader", reader.result);

        setBase64Video(reader?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadSelectedVideo = async (base64Video) => {
    setLoading(true);
    const api_nonce = Date.now().toString();

    const form = new FormData();
    form.append("id", user?.ID);
    form.append("nounce", api_nonce);
    form.append("file", selectedVideo?.name);
    form.append("file_data", base64Video);

    try {
      await axios
        .post(`${baseURL}upload-video.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("uploadVideo data", res?.data);

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
          console.log("uploadVideo err", err);
          setLoading(false);
          toast.error(
            "Video Upload Failed",
            "Something went wrong while uploading your video, please try again later"
          );
        });
    } catch (error) {
      console.log("uploadVideo error", error);
      toast.error(
        "Video Upload Failed",
        "Something went wrong while uploading your video, please try again later"
      );
    }
  };

  const uploadFaceVideo = async () => {
    const form = new FormData();
    form.append("token", user?.Token);
    form.append("title", faceVideotitle);
    form.append("artist_name", artistName);
    form.append("video", uploadedVideoUrl?.link);
    form.append("description", description);
    form.append("tags", "NextXtar");

    if (!faceVideotitle) {
      setFormError("Please provide a title");
      setFaceVideotitleError("Please provide a title");
    } else {
      setLoading(true);

      try {
        await axios
          .post(`${baseURL}save-facevideo.php?API_KEY=${API_KEY}`, form)
          .then((res) => {
            console.log("res", res);
            setLoading(false);

            if (res?.data?.status == 200) {
              console.log("uploadVideo data", res?.data);
              // Clear the redux MP4Mediaresult url data
              dispatch(clearUploadMP4Mediaresult());
              toast.success("Your Video has been uploaded successful. 😇");
              navigate(-1);
            } else if (res?.data?.status == 303) {
              console.log("uploadVideo message", res?.data?.status);
              setFormError("Something went wrong, please try again later");
              toast.error(
                "Your upload information is incomplete, please fill all the necessary information and try again later"
              );
            } else {
              console.log("uploadVideo message", res?.data?.status);
              setFormError("Something went wrong, please try again later");
              toast.error(
                "Something went wrong while uploading your video, please try again later"
              );
            }
          })
          .catch((err) => {
            console.log("uploadVideo err", err);
            setLoading(false);
            toast.error(
              "Something went wrong while uploading your video, please try again later"
            );
          });
      } catch (error) {
        console.log("uploadVideo error", error);
        toast.error(
          "Something went wrong while uploading your video, please try again later"
        );
      }
    }
  };

  return (
    <Container>
      <HeaderTitle
        title={"FaceVideo"}
        imgSrc={require("../../assets/gif1.gif")}
        imgAlt={"FaceVideo Image"}
      />
      <FormInput
        type={"text"}
        formTitle={"Face Video Title *"}
        inputPlaceholder={""}
        inputId={"facevideo-title"}
        value={faceVideotitle}
        onChange={(e) => {
          setFaceVideotitle(e.target.value);
          setFormError("");
          setFaceVideotitleError("");
        }}
        errorMessage={faceVideotitleError}
        width={"100%"}
      />
      <FormInput
        type={"text"}
        formTitle={"Artist Name *"}
        inputPlaceholder={"Artist Name"}
        inputId={"Artist"}
        value={artistName}
        onChange={(e) => {
          setArtistName(e.target.value);
          setFormError("");
          setArtistNameError("");
        }}
        errorMessage={artistNameError}
        width={"100%"}
      />
      <FormInput
        type={"text"}
        formTitle={"Description"}
        inputPlaceholder={""}
        inputId={"Description"}
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
          setFormError("");
          setDescriptionError("");
        }}
        errorMessage={descriptionError}
        width={"100%"}
      />

      <FileUpload
        fileType={"video/*"}
        selectedFile={selectedVideo}
        onFileUpload={() => {
          uploadSelectedVideo(base64Video);
        }}
        previewUrl={selectedVideoUrl}
        handleFileChange={handleFileChange}
        loading={loading}
      />

      <FormButton
        title={"Submit"}
        onClick={uploadFaceVideo}
        errorMessage={formError}
        loading={loading}
        marginLeft={"0px"}
        width={"100%"}
      />
    </Container>
  );
}

export default FaceVideoUpload;
