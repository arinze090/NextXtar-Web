import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
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

  @media screen and (min-width: 768px) {
    flex-direction: row;
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
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const user = state.user.user;
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
    console.log("djffj");
    if (!uploadingChoice) {
      setUploadingChoiceError("Please select an option");
    } else if (!trackArtistName) {
      setTrackArtistNameError("provide the details");
    } else if (!genre) {
      setGenreError("Please select a genre from the options");
    } else if (!trackName) {
      setTrackNameError("please provide the track name");
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
    console.log("djffj");
    if (!uploadDate) {
      setUploadDateError("Please provide a valid date");
    } else {
      handleNext();
    }
  };

  const [loading, setLoading] = useState(false);

  // states for the uploading music form
  const [uploadingChoice, setUploadingChoice] = useState();
  const [genre, setGenre] = useState("");
  const [trackName, setTrackName] = useState("");
  const [trackArtistName, setTrackArtistName] = useState("");
  const [description, setDescription] = useState("");
  const [explicit, setExplicit] = useState("");
  const [recordLabel, setRecordLabel] = useState("");
  const [spotifyUrl, setSpotifyUrl] = useState("");
  const [itunesUrl, setItunesUrl] = useState("");
  const [lyrics, setLyrics] = useState("");

  const [videoUrl, setVideoUrl] = useState("");
  const [language, setLanguage] = useState("");
  const [image, setImage] = useState("");
  const [lyricsDoc, setLyricsDoc] = useState("");
  const [audioFile, setAudioFile] = useState("");
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
  const [uploadingChoiceError, setUploadingChoiceError] = useState();
  const [artistEmailError, setArtistEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [trackNameError, setTrackNameError] = useState("");
  const [genreError, setGenreError] = useState("");
  const [trackArtistNameError, setTrackArtistNameError] = useState("");
  const [languageError, setLanguageError] = useState("");
  const [recordLabelError, setRecordLabelError] = useState("");
  const [explicitError, setExplicitError] = useState("");
  const [artistFullNameError, setArtistFullNameError] = useState("");
  const [artistNameError, setArtistNameError] = useState("");
  const [artistNumberError, setArtistNumberError] = useState("");
  const [uploadDateError, setUploadDateError] = useState("");

  const handleUploadingChoiceChange = (event) => {
    setUploadingChoice(event.target.value);
    setUploadingChoiceError("");
    setFormError("");
    console.log("Selected value:", event.target.value);
  };

  const uploadMusic = async () => {
    setLoading(true);

    const form = new FormData();
    form.append("token", user?.Token);
    form.append("name", trackName);
    form.append("label", trackArtistName);
    form.append("genre", JSON.parse(genre));
    form.append("language", language);
    form.append("image", image);
    form.append("audio", "");
    form.append("duration", "");
    form.append("country", country);
    form.append(
      "choice",
      uploadingChoice == 1 ? "Uploading for Myself" : "Uploading For Someone"
    );
    form.append("someone_full_name", artistFullName);
    form.append("someone_name", artistName);
    form.append("someone_email", artistEmail);
    form.append("someone_phone", artistNumber);
    form.append("track_name", "");
    form.append("track_id", "");
    form.append("is_cover", 0);
    form.append("description", description);
    form.append("last_name", lastName);
    form.append("middle_name", middleName);
    form.append("first_name", firstName);
    form.append("contact_phone", phone);
    form.append("lyrics", lyrics);
    form.append("feature", "");
    form.append("compose", "");
    form.append("record_label", recordLabel);
    form.append("is_explicit", explicit);
    form.append("spotify_url", spotifyUrl);
    form.append("itunes_url", itunesUrl);
    form.append("video_url", videoUrl);
    form.append("music_upload_date", uploadDate);

    const uploadMusicData = {
      token: user?.Token,
      API_KEY: API_KEY,
      name: trackName,
      label: trackArtistName,
      genre: genre,
      language: language,
      image: image,
      audio: "",
      duration: "",
      country: country,
      choice:
        uploadingChoice == 1 ? "Uploading for Myself" : "Uploading For Someone",
      someone_full_name: artistFullName,
      someone_name: artistName,
      someone_email: artistEmail,
      someone_phone: artistNumber,
      track_name: "",
      track_id: "",
      is_cover: 0,
      description: description,
      last_name: lastName,
      middle_name: middleName,
      first_name: firstName,
      contact_phone: phone,
      lyrics: "",
      // lyrics_file: !lyricsDocument ? "" : lyricsDocument?.link,
      feature: "",
      compose: "",
      record_label: recordLabel,
      is_explicit: explicit,
      spotify_url: spotifyUrl,
      itunes_url: itunesUrl,
      video_url: videoUrl,
      music_upload_date: "",
    };

    console.log("uploadMusicData", uploadMusicData);
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
      console.log("uploadMusic error", error);
      toast.error(
        "Track Upload Failed",
        "Something went wrong while uploading your track, please try again later"
      );
    }
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
                formTitle={"Enter your Spotify URL (if any)"}
                inputId={"spotify-url"}
                inputPlaceholder={"Enter your Spotify URL (if any)"}
                type={"text"}
                value={spotifyUrl}
                onChange={(e) => {
                  setSpotifyUrl(e.target.value);
                  setFormError("");
                }}
                width={"48%"}
              />

              <FormInput
                formTitle={"Enter your iTunes URL (if any)"}
                inputId={"itunes-url"}
                inputPlaceholder={"Enter your iTunes URL (if any)"}
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
              formTitle={"Select the Date for your Music to be Uploaded"}
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
              formTitle={
                "A short description of what the song is all about (Optional)"
              }
              row={5}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setFormError("");
              }}
              placeholder={""}
              width={"100%"}
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
            />
            <div
              style={{
                // backgroundColor: "red",
                width: "100%",
                marginBottom: 20,
              }}
            >
              <FormButton
                title={"Upload"}
                onClick={handleNext}
                marginLeft={"0px"}
                btnIcon={
                  <MdFileUpload
                    style={{ color: "white", marginRight: 7, fontSize: 16 }}
                  />
                }
              />

              <p>
                By uploading or writing your lyrics gives you big opportunities;{" "}
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
            <Container>
              <UploadContainer>
                <UploadSection
                  title="Cover Art"
                  uploadTitle="Cover Art"
                  uploadDescription="Drag & drop files or Browse. Supported formats: TIF, PNG, JPG"
                  rules={rules1}
                  uploadBtnTitle={"Upload"}
                />
                <UploadSection
                  title="Tracks"
                  uploadTitle="Song"
                  uploadDescription="Drag & drop files or Browse. Supported formats: MP3"
                  rules={rules2}
                  uploadBtnTitle={"Upload"}
                />
              </UploadContainer>

              <Subtitle>
                Make a one minute Video of the song you uploaded, with your
                Phone, and upload it here, you will get 100 Point Bonues, 24/7
                Singnify Radio Airplay, and One Day Social Media Promotion.{" "}
              </Subtitle>

              <UploadSection
                title="Video Recording"
                uploadTitle="Video"
                uploadDescription="Drag & drop files or Browse. Supported formats: MP4"
                rules={videoRecordRules}
                uploadBtnTitle={"Upload"}
              />
            </Container>
            <div
              style={{
                justifyContent: "center",
                display: "flex",
                width: "100%",
              }}
            >
              <FormButton title={"Submit"} width={"225px"} marginLeft={"0px"} />
            </div>

            <hr />
            <div
              style={{
                // backgroundColor: "red",
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
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
