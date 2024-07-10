import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormTextArea from "../../components/form/FormTextArea";
import { baseURL } from "../../utils/api-client";
import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import { API_KEY } from "../../utils/devKeys";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
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

function EditPressRelease() {
  const navigate = useNavigate();

  const state = useSelector((state) => state);

  const user = state?.user?.user;

  const [loading, setLoading] = useState(false);

  const [lyricsInspiration, setLyricsInspiration] = useState("");
  const [songWriting, setSongWriting] = useState("");
  const [futurePlans, setFuturePlans] = useState("");
  const [fanImpact, setFanImpact] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [addSingle, setAddSingle] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [twitter, setTwitter] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [youtube, setYoutube] = useState("");

  // Error states
  const [formError, setFormError] = useState("");
  const [lyricsInspirationError, setLyricsInspirationError] = useState("");
  const [songWritingError, setSongWritingError] = useState("");
  const [futurePlansError, setFuturePlansError] = useState("");
  const [fanImpactError, setFanImpactError] = useState("");
  const [inspirationError, setInspirationError] = useState("");
  const [addSingleError, setAddSingleError] = useState("");
  const [facebookError, setFacebookError] = useState("");
  const [instagramError, setInstagramError] = useState("");
  const [twitterError, setTwitterError] = useState("");
  const [tiktokError, setTiktokError] = useState("");
  const [youtubeError, setYoutubeError] = useState("");

  const submitPressRelease = async () => {
    setLoading(false);

    const form = new FormData();
    form.append("token", user?.Token);
    form.append("val", 0);
    form.append("music_id", "8");
    form.append("lyrics_inspiration", lyricsInspiration);
    form.append("songwriting_process", songWriting);
    form.append("future_plans", futurePlans);
    form.append("fan_impact", fanImpact);
    form.append("inspire_write", inspiration);
    form.append("add_single", addSingle);
    form.append("facebook", facebook);
    form.append("instagram", instagram);
    form.append("twitter", twitter);
    form.append("tiktok", tiktok);
    form.append("youtube", youtube);

    if (!lyricsInspiration) {
      setLyricsInspirationError("Please provide an information");
    } else if (!songWriting) {
      setSongWritingError("Please provide an information");
    } else if (!futurePlans) {
      setFuturePlansError("Please provide an information");
    } else if (!fanImpact) {
      setFanImpactError("Please provide an information");
    } else {
      try {
        await axios
          .post(`${baseURL}submit-press-release.php?API_KEY=${API_KEY}`, form)
          .then((res) => {
            console.log("res", res);
            setLoading(false);

            if (res?.data?.status == 200) {
              console.log("submitPressRelease data", res?.data);
              toast.success("PressRelease created successfully 😇");
              navigate("/press-release");
            } else {
              console.log("submitPressRelease message", res?.data?.status);
            }
          })
          .catch((err) => {
            console.log("submitPressRelease err", err);
            setLoading(false);
          });
      } catch (error) {
        console.log("submitPressRelease error", error);
      }
    }
  };

  return (
    <Container>
      <HeaderTitle
        title={"Edit Press Release for Arinze"}
        imgSrc={require("../../assets/pressRelease.png")}
        imgAlt={"Edit Press Release Image"}
      />

      <FormTextArea
        formTitle={
          "What was the inspiration behind this song and what message do you hope to convey through its lyrics? *"
        }
        row={5}
        placeholder={""}
        width={"100%"}
        value={lyricsInspiration}
        onChange={(txt) => {
          setLyricsInspiration(txt);
          setLyricsInspirationError("");
          setFormError("");
        }}
        errorMessage={lyricsInspirationError}
      />
      <FormTextArea
        formTitle={
          "How do you approach the creative process in your songwriting *"
        }
        row={5}
        placeholder={""}
        width={"100%"}
        value={songWriting}
        onChange={(txt) => {
          setSongWriting(txt);
          setSongWritingError("");
          setFormError("");
        }}
        errorMessage={songWritingError}
      />
      <FormTextArea
        formTitle={
          "Can you share any upcoming projects or plans for the future? *"
        }
        row={5}
        placeholder={""}
        width={"100%"}
        value={futurePlans}
        onChange={(txt) => {
          setFuturePlans(txt);
          setFuturePlansError("");
          setFormError("");
        }}
        errorMessage={futurePlansError}
      />
      <FormTextArea
        formTitle={
          "What impact do you think this song will have on your fans? *"
        }
        row={5}
        placeholder={""}
        width={"100%"}
        value={fanImpact}
        onChange={(txt) => {
          setFanImpact(txt);
          setFanImpactError("");
          setFormError("");
        }}
        errorMessage={fanImpactError}
      />
      <FormTextArea
        formTitle={
          "Give a shoutout to someone who you think helped or inspired you to write this song *"
        }
        row={5}
        placeholder={""}
        width={"100%"}
        value={inspiration}
        onChange={(txt) => {
          setInspiration(txt);
          setInspirationError("");
          setFormError("");
        }}
        errorMessage={inspirationError}
      />
      <FormTextArea
        formTitle={"Anything you want to add about your new single *"}
        row={5}
        placeholder={""}
        width={"100%"}
        value={addSingle}
        onChange={(txt) => {
          setAddSingle(txt);
          setAddSingleError("");
          setFormError("");
        }}
        errorMessage={addSingleError}
      />

      <RowContent>
        <FormInput
          formTitle={"Facebook"}
          placeholder={""}
          width={"33%"}
          value={facebook}
          onChange={(txt) => {
            setFacebook(txt);
            setFacebookError("");
            setFormError("");
          }}
          errorMessage={facebookError}
        />

        <FormInput
          formTitle={"Twitter"}
          placeholder={""}
          width={"33%"}
          value={twitter}
          onChange={(txt) => {
            setTwitter(txt);
            setTwitterError("");
            setFormError("");
          }}
          errorMessage={twitterError}
        />

        <FormInput
          formTitle={"Instagram"}
          placeholder={""}
          width={"33%"}
          value={instagram}
          onChange={(txt) => {
            setInstagram(txt);
            setInstagramError("");
            setFormError("");
          }}
          errorMessage={instagramError}
        />
      </RowContent>

      <RowContent>
        <FormInput
          formTitle={"TikTok"}
          placeholder={""}
          width={"48%"}
          value={tiktok}
          onChange={(txt) => {
            setTiktok(txt);
            setTiktokError("");
            setFormError("");
          }}
          errorMessage={tiktokError}
        />

        <FormInput
          formTitle={"Youtube"}
          placeholder={""}
          width={"48%"}
          value={youtube}
          onChange={(txt) => {
            setYoutube(txt);
            setYoutubeError("");
            setFormError("");
          }}
          errorMessage={youtubeError}
        />
      </RowContent>

      <FormButton
        title={"Publish"}
        width={"100%"}
        onClick={submitPressRelease}
        marginLeft={"0px"}
        loading={loading}
        errorMessage={formError}
      />
    </Container>
  );
}

export default EditPressRelease;
