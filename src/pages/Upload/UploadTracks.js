import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Stepper } from "@mui/material";
import { MdFileUpload } from "react-icons/md";

import FormSelect from "../../components/form/FormSelect";
import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import TransparentBtn from "../../components/form/TransparentBtn";
import FormTextArea from "../../components/form/FormTextArea";
import UploadSection from "../../components/upload/UploadSection";
import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import { listOfCountries } from "../../data/dummyData";
import Modal from "../../components/modal/Modal";

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

const Subtitle = styled.p`
  margin-bottom: 1rem;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const HiddenInput = styled.input`
  display: none;
`;

const UploadContainer = styled.div`
  // // max-width: 1200px;
  // // margin: auto;
  // // padding: 2rem;
  // // background: green;
  // justify-content: center;
  // align-items: stretch;
  // padding: 40px;
  // flex-wrap: wrap;
  // // width: 80%;

  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const formSelectOptions = [
  {
    id: 1,
    name: "Uploading for Myself",
  },
  {
    id: 2,
    name: "Uploading for Someone",
  },
];

const rules1 = [
  "TIF or JPG format",
  "Square (width and height must be the same)",
  "Minimum Size: 3000 by 3000 pixels",
  "Maximum Size: 5000 by 5000 pixels",
  "300 DPI in RGB format",
  "Any song uploaded without design artwork, (song titles and artist name) will not be approved",
  "No Social media logos or handles",
  "No Brand logos",
  "Any text except for artist names and/or the name of the release will be rejected",
];

const rules2 = [
  "Audio files must be 16-bit, 44.1 kHz MP3 files of good quality. If you do not follow these rules, your release will be rejected.",
  "By uploading your songs or albums on Singnify, you can not request for takedown within 6 months of upload, or a payment of $12 will be charge for takedown, if your upload is not up to 6 months Singnify uses audio Fingerprint, to collectively protect our artist content.",
  "I have read the Terms of Use which includes Distribution, Publishing and Licensing Agreements. I understand that my choice to select this box gives Singnify, at their sole discretion, exclusive rights to Distribute, Publish and License my songs and videos worldwide.",
];

const videoRecordRules = [
  "Video files must be H.264 video and AAC audio codec and of good quality. If you do not follow these rules, your release will be rejected.",
];

const UploadTracks = () => {
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const state = useSelector((state) => state);
  const user = state?.user?.user;
  const genres = state?.discover?.listings?.genres;
  const countryOptions = listOfCountries;

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const step1Check = () => {
    if (!uploadingChoice) {
      setUploadingChoiceError("Please select an option");
    } else if (uploadingChoice == "Uploading for Someone" && !artistFullName) {
      setArtistFullNameError("Please provide the details");
    } else if (uploadingChoice == "Uploading for Someone" && !artistName) {
      setArtistNameError("Please provide the details");
    } else if (uploadingChoice == "Uploading for Someone" && !artistNumber) {
      setArtistNumberError("Please provide the details");
    } else if (uploadingChoice == "Uploading for Someone" && !artistEmail) {
      setArtistEmailError("Please provide the details");
    } else if (!trackArtistName) {
      setTrackArtistNameError("provide the details");
    } else if (!genre) {
      setGenreError("Please select a genre from the options");
    } else if (!trackName) {
      setTrackNameError("please provide the track name");
    } else if (!recordLabel) {
      setRecordLabelError("Please provide your record label");
    } else if (!language) {
      setLanguageError("Select a language");
    } else if (!explicit) {
      setExplicitError("Select an option");
    } else if (!country) {
      setCountryError("Provide your country");
    } else {
      handleNext();
    }
  };

  const step2Check = () => {
    if (!uploadDate) {
      setUploadDateError("Please provide a valid date");
    } else if (!description) {
      setDescriptionError("Please provide a short description");
    } else if (!biography) {
      setBiographyError("Please provide your biography");
    } else {
      handleNext();
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const [base64Picture, setBase64Picture] = useState(null);
  const [selectedPictureUrl, setSelectedPictureUrl] = useState(null);
  const [uploadedPictureUrl, setUploadedPictureUrl] = useState(null);

  // Lyrics document section
  const [selectedDocFile, setSelectedDocFile] = useState("");
  const [uploadedDocumentUrl, setUploadedDocumentUrl] = useState(null);

  // Audio upload section
  const [audioFile, setAudioFile] = useState("");
  const [base64Audio, setBase64Audio] = useState(null);
  const [selectedAudioUrl, setSelectedAudioUrl] = useState(null);
  const [uploadedAudioUrl, setUploadedAudioUrl] = useState(null);

  // Video upload section
  const [videoFile, setVideoFile] = useState("");
  const [base64Video, setBase64Video] = useState(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState(null);

  // states for the uploading music form
  const [uploadingChoice, setUploadingChoice] = useState();
  const [genre, setGenre] = useState("");
  const [trackName, setTrackName] = useState("");
  const [trackArtistName, setTrackArtistName] = useState("");
  const [description, setDescription] = useState("");
  const [biography, setBiography] = useState("");
  const [explicit, setExplicit] = useState("");
  const [recordLabel, setRecordLabel] = useState("");
  const [spotifyUrl, setSpotifyUrl] = useState("");
  const [itunesUrl, setItunesUrl] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [audioDuration, setAudioDuration] = useState("");

  const [language, setLanguage] = useState("");
  const [image, setImage] = useState("");
  const [uploadDate, setUploadDate] = useState("");

  // Artist information
  const [artistFullName, setArtistFullName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [artistEmail, setArtistEmail] = useState("");
  const [artistNumber, setArtistNumber] = useState("");

  const [firstName, setFirstName] = useState(
    user?.FirstName ? user?.FirstName : ""
  );
  const [lastName, setLastName] = useState(
    user?.LastName ? user?.LastName : ""
  );
  const [middleName, setMiddleName] = useState(
    user?.MiddleName ? user?.MiddleName : ""
  );
  const [phone, setPhone] = useState(user?.Phone ? user?.Phone : "");
  const [country, setCountry] = useState("");

  // Error states
  const [formError, setFormError] = useState("");
  const [coverArtErrorMessage, setCoverArtErrorMessage] = useState("");

  const [uploadingChoiceError, setUploadingChoiceError] = useState();
  const [artistEmailError, setArtistEmailError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [trackNameError, setTrackNameError] = useState("");
  const [genreError, setGenreError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [biographyError, setBiographyError] = useState("");
  const [trackArtistNameError, setTrackArtistNameError] = useState("");
  const [languageError, setLanguageError] = useState("");
  const [recordLabelError, setRecordLabelError] = useState("");
  const [explicitError, setExplicitError] = useState("");
  const [artistFullNameError, setArtistFullNameError] = useState("");
  const [artistNameError, setArtistNameError] = useState("");
  const [artistNumberError, setArtistNumberError] = useState("");
  const [uploadDateError, setUploadDateError] = useState("");

  const [trackSections, setTrackSections] = useState([
    {
      file: null,
      previewUrl: null,
      uploadedUrl: null,
      progress: 0,
      base64Audio: null,
      audioDuration: null,
      loading: false,
      trackTitle: "",
      errorMessage: "",
    },
  ]);

  console.log("trackSections", trackSections);

  const handleUploadingChoiceChange = (event) => {
    setUploadingChoice(event.target.value);
    setUploadingChoiceError("");
    setFormError("");
  };

  // Function to handle file change
  const handleMultipleAudioFileChange = (
    index,
    file,
    previewUrl,
    base64Audio,
    audioDuration
  ) => {
    const updatedSections = [...trackSections];
    updatedSections[index].file = file;
    updatedSections[index].previewUrl = previewUrl;
    updatedSections[index].base64Audio = base64Audio;
    updatedSections[index].audioDuration = audioDuration;

    setTrackSections(updatedSections);
  };

  // this function calls the upload track api
  const uploadMusic = async () => {
    setLoading(true);

    const form = new FormData();
    form.append("token", user?.Token);
    form.append("name", trackName);
    form.append("label", trackArtistName);
    form.append("genre", JSON?.parse(genre));
    form.append("language", language);
    form.append("image", uploadedPictureUrl?.link);
    form.append(
      "audio",
      trackSections?.map((track) => track?.uploadedUrl).join("||::")
    );
    form.append(
      "duration",
      trackSections?.map((track) => track?.audioDuration).join("||::")
    );
    form.append(
      "track_name",
      trackSections?.map((track) => track?.trackTitle).join("||::")
    );
    form.append("country", country);
    form.append("choice", uploadingChoice);
    form.append("someone_full_name", artistFullName);
    form.append("someone_name", artistName);
    form.append("someone_email", artistEmail);
    form.append("someone_phone", artistNumber);
    form.append("track_id", "");
    form.append("is_cover", 0);
    form.append("description", description);
    form.append("biography", biography);
    form.append("last_name", lastName);
    form.append("middle_name", middleName);
    form.append("first_name", firstName);
    form.append("contact_phone", phone);
    form.append("lyrics", lyrics);
    form.append(
      "lyrics_file",
      uploadedDocumentUrl ? uploadedDocumentUrl?.link : ""
    );
    form.append("feature", "");
    form.append("compose", "");
    form.append("record_label", recordLabel);
    form.append("is_explicit", explicit);
    form.append("spotify_url", spotifyUrl);
    form.append("itunes_url", itunesUrl);
    form.append("video_url", uploadedVideoUrl?.link);
    form.append("music_upload_date", uploadDate);

    // console.log("forrrmm", [...form]);

    try {
      await axios
        .post(`${baseURL}save-audio.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("uploadMusic data", res?.data);
            //   Clear the reduxc lyrics file data
            // dispatch(clearLyricsUploadData());
            toast.success("Your track has been uploaded successfully 😇");
            navigate("/upload");
          } else if (parseInt(res?.data?.status) == 501) {
            console.log("uploadMusic message", res?.data?.status);
            setFormError(res?.data?.message);
            toast.error(
              "Track Upload Failed",
              "Something went wrong while uploading your track, please try again later"
            );
          } else {
            console.log("uploadMusic message", res?.data?.status);
            setFormError("Something went wrong, please try again later");

            toast.error(
              "Track Upload Failed",
              "Something went wrong while uploading your track, please try again later"
            );
          }
        })
        .catch((err) => {
          console.log("uploadMusic err", err);
          setLoading(false);
          toast.error(
            "Track Upload Failed",
            "Something went wrong while uploading your track, please try again later"
          );
        });
    } catch (error) {
      setLoading(false);

      console.log("uploadMusic error", error);
      toast.error(
        "Track Upload Failed",
        "Something went wrong while uploading your track, please try again later"
      );
    }
  };

  // this function calls the upload lyrics/document api to store the documnet in the db
  const uploadDocument = async (file) => {
    setLoading(true);
    const form = new FormData();
    form.append("file", file);

    try {
      await axios
        .post(`${baseURL}upload-document.php?API_KEY=${API_KEY}`, form)
        .then((res) => {
          console.log("res", res);
          setLoading(false);

          if (res?.data?.status == 200) {
            console.log("uploadDocument data", res?.data);

            setUploadedDocumentUrl(res?.data);
            toast.success("Your document uploaded successfully 😇");
          } else {
            console.log("message", res?.data?.status);
            setFormError("Something went wrong, please try again later");

            toast.error(
              "Document Upload Failed",
              "Something went wrong while uploading your document, please try again later"
            );
          }
        })
        .catch((err) => {
          console.log("uploadDocument err", err);
          setLoading(false);
          toast.error(
            "Document Upload Failed",
            "Something went wrong while uploading your document, please try again later"
          );
        });
    } catch (error) {
      setLoading(false);
      console.log("uploadDocument error", error);
      toast.error(
        "Document Upload Failed",
        "Something went wrong while uploading your document, please try again later"
      );
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("file", file);
    setSelectedDocFile(file);

    uploadDocument(file);
  };

  const handleCoverPhotoFileChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setSelectedPictureUrl(fileUrl);

      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Picture(reader?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAudioTitleChange = (index, newTitle) => {
    const updatedSections = [...trackSections];
    updatedSections[index].trackTitle = newTitle;

    // Reset error message if title is changed
    if (newTitle) {
      updatedSections[index].errorMessage = "";
    }

    setTrackSections(updatedSections);
  };

  const handleAudioFileChange = (event, index) => {
    const file = event.target.files[0];
    setAudioFile(file);

    if (file) {
      const fileUrl = URL.createObjectURL(file);
      setSelectedAudioUrl(fileUrl);

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Audio = reader.result; // Get Base64
        setBase64Audio(base64Audio); // Set Base64 state

        // Create an audio element to get duration
        const audioElement = new Audio(fileUrl);
        audioElement.onloadedmetadata = () => {
          const duration = audioElement.duration?.toFixed(2); // Get duration
          setAudioDuration(duration); // Optionally set duration state

          // Call the handler to pass all the data (file, preview, base64, and duration)
          handleMultipleAudioFileChange(
            index,
            file, // The audio file
            fileUrl, // Preview URL
            base64Audio, // Base64 string
            duration // Audio duration
          );
        };
      };
      reader.readAsDataURL(file);

      // Create an audio element to load the file and get its duration
      const audioElement = new Audio(fileUrl);

      // Wait for the metadata to load, which includes the duration
      audioElement.onloadedmetadata = () => {
        const duration = audioElement.duration;
        console.log("Audio Duration: ", duration?.toFixed(2));

        // Optionally, you can set this duration to state if needed
        setAudioDuration(duration?.toFixed(2));
      };
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
    }
  };

  // this function calls the upload image/coverpicture api to store the image in the db
  const uploadCoverArt = async (file) => {
    setLoading(true);

    const form = new FormData();
    form.append("file", file);
    form.append("is_cover", 1);

    try {
      await axios
        .post(`${baseURL}upload-cover-art.php?API_KEY=${API_KEY}`, form, {
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
          setFormError("");

          if (res?.data?.status == 200) {
            console.log("uploadCoverArt data", res?.data);

            setUploadedPictureUrl(res?.data);
            toast.success("Your cover art was uploaded successfully 😇");
          } else {
            console.log("message", res?.data?.status);
            setFormError("Something went wrong, please try again later");
            setCoverArtErrorMessage(res?.data?.message);

            toast.error(
              "Cover Art Upload Failed",
              "Something went wrong while uploading your cover art, please try again later"
            );
          }
        })
        .catch((err) => {
          console.log("uploadCoverArt err", err);
          setLoading(false);
          toast.error(
            "Cover Art Upload Failed",
            "Something went wrong while uploading your cover art, please try again later"
          );
        });
    } catch (error) {
      setLoading(false);

      console.log("uploadCoverArt error", error);
      toast.error(
        "Cover Art Upload Failed",
        "Something went wrong while uploading your cover art, please try again later"
      );
    }
  };

  // this function calls the upload audio files api to store the documnet in the db
  const uploadMP3File = async (index, file, base64Audio) => {
    setLoading(true);
    // console.log("inddd", index);

    const updatedSections = [...trackSections];
    updatedSections[index].loading = true;
    setTrackSections(updatedSections);

    const api_nonce = Date.now().toString();

    const form = new FormData();
    form.append("id", user?.ID);
    form.append("nounce", api_nonce);
    form.append("no", 0);
    form.append("file", file);
    form.append("file_data", base64Audio);
    try {
      await axios
        .post(`${baseURL}upload-track.php?API_KEY=${API_KEY}`, form, {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);

            const updatedSections = [...trackSections];
            updatedSections[index].progress = percentCompleted;
            setTrackSections(updatedSections);
          },
        })
        .then((res) => {
          console.log("res", res);
          setLoading(false);
          setFormError("");

          if (res?.data?.status == 200) {
            console.log("uploadMP3File data", res?.data);

            const updatedSections = [...trackSections];
            updatedSections[index].uploadedUrl = res?.data?.link;
            updatedSections[index].loading = false;
            setTrackSections(updatedSections);

            setUploadedAudioUrl(res?.data);
            toast.success("Your track uploaded successfully 😇");
          } else {
            console.log("message", res?.data?.status);
            updatedSections[index].loading = false;
            setTrackSections(updatedSections);
            setFormError("Something went wrong, please try again later");

            toast.error(
              "Track Upload Failed",
              "Something went wrong while uploading your track, please try again later"
            );
          }
        })
        .catch((err) => {
          console.log("uploadMP3File err", err);
          updatedSections[index].loading = false;
          setTrackSections(updatedSections);
          setLoading(false);
          toast.error(
            "Track Upload Failed",
            "Something went wrong while uploading your track, please try again later"
          );
        });
    } catch (error) {
      setLoading(false);
      updatedSections[index].loading = false;
      setTrackSections(updatedSections);
      console.log("uploadMP3File error", error);
      toast.error(
        "Track Upload Failed",
        "Something went wrong while uploading your track, please try again later"
      );
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
          setFormError("");

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
      setLoading(false);

      console.log("uploadMP4File error", error);
      toast.error(
        "Video Upload Failed",
        "Something went wrong while uploading your video, please try again later"
      );
    }
  };

  // Function to add more tracks
  const addMoreTracks = () => {
    setTrackSections([
      ...trackSections,
      {
        file: null,
        previewUrl: null,
        uploadedUrl: null,
        progress: 0,
        base64Audio: null,
        loading: false,
        trackTitle: "",
        errorMessage: "",
        showInput: true,
      },
    ]);
  };

  return (
    <div style={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel></Stepper>
      <div>
        {activeStep === 0 && (
          <Container>
            <FormSelect
              formTitle={"Uploading Choice"}
              options={formSelectOptions}
              selectId={"uploadingChoice"}
              selectPlaceholder={"Select Option"}
              width={"100%"}
              onChange={handleUploadingChoiceChange}
              errorMessage={uploadingChoiceError}
            />

            <RowContent>
              <FormInput
                formTitle={"Stage Name"}
                inputId={"artist-stage-name"}
                inputPlaceholder={"Stage Name"}
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
                formTitle={"Track Name"}
                inputId={"track-name"}
                inputPlaceholder={"Track Name"}
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
              <FormSelect
                formTitle={"Genre"}
                options={genres}
                selectId={"Genre"}
                selectPlaceholder={"Select Genre"}
                width={"30%"}
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

              <FormInput
                formTitle={"Record Label Name or Label Imprint"}
                inputId={"record-label-name"}
                inputPlaceholder={"Record Label Name or Label Imprint"}
                type={"text"}
                value={recordLabel}
                onChange={(e) => {
                  setRecordLabel(e.target.value);
                  setFormError("");
                  setRecordLabelError("");
                }}
                errorMessage={recordLabelError}
                width={"48%"}
              />
            </RowContent>

            <RowContent>
              <FormSelect
                formTitle={"Explicit Content"}
                options={[
                  {
                    name: "Yes",
                    value: "Yes",
                  },
                  {
                    name: "No",
                    value: "No",
                  },
                ]}
                selectId={"explicit-content"}
                selectPlaceholder={"Explicit Content"}
                width={"48%"}
                onChange={(e) => {
                  setExplicit(e.target.value);
                  setFormError("");
                  setExplicitError("");
                }}
                errorMessage={explicitError}
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

            {/* Section when uploading for someone else */}
            {uploadingChoice === "Uploading for Someone" && (
              <>
                <Subtitle>
                  Kindly fill in the information of the artist you are uploading
                  for
                </Subtitle>
                <RowContent>
                  <FormInput
                    formTitle={"Artist's Full Name"}
                    inputId={"artist-name"}
                    inputPlaceholder={"Artist Full Name"}
                    type={"text"}
                    value={artistFullName}
                    onChange={(e) => {
                      setArtistFullName(e.target.value);
                      setFormError("");
                      setArtistFullNameError("");
                    }}
                    errorMessage={artistFullNameError}
                    width={"48%"}
                  />

                  <FormInput
                    formTitle={"Artist's Name"}
                    inputId={"artist-name"}
                    inputPlaceholder={"Artist Name"}
                    type={"text"}
                    value={artistName}
                    onChange={(e) => {
                      setArtistName(e.target.value);
                      setFormError("");
                      setArtistNameError("");
                    }}
                    errorMessage={artistNameError}
                    width={"48%"}
                  />
                </RowContent>
                <RowContent>
                  <FormInput
                    formTitle={"Artist's Phone Number"}
                    inputId={"artist-phoneNumber"}
                    inputPlaceholder={"Artist Phone Number"}
                    type={"number"}
                    value={artistNumber}
                    onChange={(e) => {
                      setArtistNumber(e.target.value);
                      setFormError("");
                      setArtistNumberError("");
                    }}
                    errorMessage={artistNumberError}
                    width={"48%"}
                  />

                  <FormInput
                    formTitle={"Artist's Email Address"}
                    inputId={"artist-email"}
                    inputPlaceholder={"Artist Email Address"}
                    type={"email"}
                    value={artistEmail}
                    onChange={(e) => {
                      setArtistEmail(e.target.value);
                      setFormError("");
                      setArtistEmailError("");
                    }}
                    errorMessage={artistEmailError}
                    width={"48%"}
                  />
                </RowContent>
              </>
            )}

            <div
              style={{
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                marginTop: 20,
              }}
            >
              <FormButton title={"Next"} onClick={step1Check} />
            </div>
          </Container>
        )}

        {activeStep === 1 && (
          <Container>
            <RowContent>
              <FormInput
                formTitle={"Enter your Spotify URL"}
                inputId={"spotify-url"}
                inputPlaceholder={"Enter your Spotify URL"}
                type={"text"}
                value={spotifyUrl}
                onChange={(e) => {
                  setSpotifyUrl(e.target.value);
                  setFormError("");
                }}
                width={"48%"}
              />

              <FormInput
                formTitle={"Enter your iTunes URL"}
                inputId={"itunes-url"}
                inputPlaceholder={"Enter your iTunes URL"}
                type={"text"}
                value={itunesUrl}
                onChange={(e) => {
                  setItunesUrl(e.target.value);
                  setFormError("");
                }}
                width={"48%"}
              />
            </RowContent>
            <FormInput
              type={"date"}
              formTitle={"Select the Date for your Music to be Uploaded *"}
              width={"100%"}
              value={uploadDate}
              onChange={(e) => {
                setUploadDate(e.target.value);
                setFormError("");
                setUploadDateError("");
              }}
              errorMessage={uploadDateError}
            />
            <FormTextArea
              formTitle={"A short description of what the song is all about *"}
              row={5}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setFormError("");
                setDescriptionError("");
              }}
              placeholder={""}
              width={"100%"}
              maxLength={100}
              errorMessage={descriptionError}
            />

            <FormTextArea
              formTitle={"A short biography about you *"}
              row={5}
              value={biography}
              onChange={(e) => {
                setBiography(e.target.value);
                setFormError("");
                setBiographyError("");
              }}
              placeholder={""}
              width={"100%"}
              maxLength={100}
              errorMessage={biographyError}
            />
            <FormTextArea
              formTitle={"Paste your Lyrics Here or Upload Below (Optional)"}
              row={5}
              value={lyrics}
              onChange={(e) => {
                setLyrics(e.target.value);
                setFormError("");
              }}
              placeholder={""}
              width={"100%"}
              maxLength={100}
            />
            <div
              style={{
                // backgroundColor: "red",
                width: "100%",
                marginBottom: 20,
              }}
            >
              <FormButton
                title={"Upload Lyrics"}
                onClick={handleClick}
                loading={loading}
                marginLeft={"0px"}
                btnIcon={
                  <MdFileUpload
                    style={{ color: "white", marginRight: 7, fontSize: 16 }}
                  />
                }
              />
              <HiddenInput
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                accept={"application/*"}
              />

              {uploadedDocumentUrl && (
                <embed
                  src={{ uri: uploadedDocumentUrl }}
                  type="application/pdf"
                  width="100%"
                  height="400px"
                />
              )}

              <p>
                By uploading or writing your lyrics gives you big opportunities{" "}
                <br />
                1. Your lyrics will be on music services. <br />
                2. If your music is picked by our executives, you will get an
                animated video & Stepaz dance using your lyrics. <br />
                3. Your music will be submitted to Publishing and Licensing
                services.
              </p>
            </div>

            <div
              style={{
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: 20,
                flexDirection: "row",
              }}
            >
              <TransparentBtn
                title={"Previous"}
                color={"black"}
                onClick={handleBack}
                marginLeft={"0px"}
              />
              <FormButton title={"Next"} onClick={step2Check} />
            </div>
          </Container>
        )}

        {activeStep === 2 && (
          <>
            <UploadContainer>
              <UploadSection
                title="Cover Art"
                uploadTitle="Cover Art"
                uploadDescription="Drag & drop files or Browse. Supported formats: PNG, JPG"
                rules={rules1}
                uploadBtnTitle={"Upload Cover Art"}
                fileType={"image/*"}
                handleFileChange={handleCoverPhotoFileChange}
                loading={loading}
                selectedFile={image}
                onFileUpload={() => {
                  uploadCoverArt(image);
                }}
                previewUrl={selectedPictureUrl}
                handleCancel={() => {
                  setImage(null);
                  setSelectedPictureUrl(null);
                }}
                UploadedText={"Your cover art has been successfully uploaded"}
                isFileUploaded={uploadedPictureUrl?.imageName}
                uploadPercentage={progress}
                fileUploadErrorMessage={coverArtErrorMessage}
              />

              {trackSections?.map((section, index) => (
                <UploadSection
                  key={index}
                  title={`${index == 0 ? trackName : section?.trackTitle}`}
                  uploadTitle="Song"
                  uploadDescription="Drag & drop files or Browse. Supported formats: MP3"
                  uploadBtnTitle={"Upload Track"}
                  fileType={"audio/mp3"}
                  handleFileChange={(event) =>
                    handleAudioFileChange(event, index)
                  }
                  loading={section?.loading}
                  selectedFile={section?.file}
                  onFileUpload={() =>
                    uploadMP3File(index, section?.file, section?.base64Audio)
                  }
                  previewUrl={section?.previewUrl}
                  handleCancel={() => {
                    const updatedSections = [...trackSections];
                    updatedSections[index] = {
                      file: null,
                      previewUrl: null,
                      uploadedUrl: null,
                      progress: 0,
                    };
                    setTrackSections(updatedSections);
                  }}
                  UploadedText={"Your Track has been successfully uploaded"}
                  isFileUploaded={section?.uploadedUrl}
                  uploadPercentage={section?.progress}
                  showTrackInput={section?.showInput}
                  handleTrackTitleChange={(e) =>
                    handleAudioTitleChange(index, e?.target?.value)
                  }
                />
              ))}

              <FormButton title="Add More Tracks" onClick={addMoreTracks} />
            </UploadContainer>

            <Subtitle>
              Make a one minute Video of the song you uploaded, with your Phone,
              and upload it here, you will get 100 Point Bonues, 24/7 Singnify
              Radio Airplay, and One Day Social Media Promotion.{" "}
            </Subtitle>

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
                onClick={() => {
                  setIsModalOpen(true);
                }}
                loading={loading}
                errorMessage={formError}
              />
            </div>

            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              title="Are you sure you want to submit ?"
            >
              <h4 style={{ fontWeight: "500" }}>
                if yes, click , Submit. <br />
                if it was a mistake, click Go back to keep editing.
              </h4>

              <div
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TransparentBtn
                  title={"Close"}
                  color={"black"}
                  width={"125px"}
                  marginLeft={"0px"}
                  onClick={() => {
                    setIsModalOpen(false);
                  }}
                />
                <FormButton
                  title={"Submit"}
                  width={"225px"}
                  marginLeft={"0px"}
                  onClick={uploadMusic}
                  loading={loading}
                  errorMessage={formError}
                />
              </div>
            </Modal>

            <hr />
            <div
              style={{
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "flex-start",
                width: "80%",
                marginTop: 40,
                marginBottom: 20,
                padding: 20,
              }}
            >
              <TransparentBtn
                title={"Previous"}
                color={"black"}
                onClick={handleBack}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadTracks;
