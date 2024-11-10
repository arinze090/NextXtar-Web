import React, { useState } from "react";
import styled from "styled-components";
import { Stepper } from "@mui/material";
import { MdFileUpload } from "react-icons/md";

import FormSelect from "../../components/form/FormSelect";
import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import TransparentBtn from "../../components/form/TransparentBtn";
import FormTextArea from "../../components/form/FormTextArea";
import UploadSection from "../../components/upload/UploadSection";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 40px;
  flex-wrap: wrap;
  background: black;
  padding-top: 80px;

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
  // max-width: 1200px;
  // margin: auto;
  // padding: 2rem;
  // background: green;
  justify-content: center;
  align-items: stretch;
  padding: 40px;
  flex-wrap: wrap;
  // width: 80%;
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
function UploadAlbum() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // states for the uploading music form
  const [uploadingChoice, setUploadingChoice] = useState();

  const handleUploadingChoiceChange = (event) => {
    setUploadingChoice(event.target.value);
    console.log("Selected value:", event.target.value);
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
            />

            <RowContent>
              <FormInput
                formTitle={"Artiste Stage Name"}
                inputId={"artist-stage-name"}
                inputPlaceholder={"Artist Stage Name"}
                type={"text"}
                value={""}
                onChange={""}
                width={"30%"}
              />

              <FormInput
                formTitle={"Album Name"}
                inputId={"album-name"}
                inputPlaceholder={"Album Name"}
                type={"text"}
                value={""}
                onChange={""}
                width={"30%"}
              />
              <FormSelect
                formTitle={"Genre"}
                options={formSelectOptions}
                selectId={"Genre"}
                selectPlaceholder={"Select Genre"}
                width={"30%"}
              />
            </RowContent>

            <RowContent>
              <FormSelect
                formTitle={"What language is the track name in?"}
                options={formSelectOptions}
                selectId={"language"}
                selectPlaceholder={"Select Language"}
                width={"48%"}
              />
              <FormInput
                formTitle={"Record Label Name or Label Imprint"}
                inputId={"record-label-name"}
                inputPlaceholder={"Record Label Name or Label Imprint"}
                type={"text"}
                value={""}
                onChange={""}
                width={"48%"}
              />
            </RowContent>

            <RowContent>
              <FormSelect
                formTitle={"Explicit Content"}
                options={formSelectOptions}
                selectId={"explicit-content"}
                selectPlaceholder={"Explicit Content"}
                width={"48%"}
              />

              <FormSelect
                formTitle={"Nationality or Country"}
                options={formSelectOptions}
                selectId={"country"}
                selectPlaceholder={"Nationality or Country"}
                width={"48%"}
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
                    value={""}
                    onChange={""}
                    width={"48%"}
                  />

                  <FormInput
                    formTitle={"Artist's Name"}
                    inputId={"artist-name"}
                    inputPlaceholder={"Artist Name"}
                    type={"text"}
                    value={""}
                    onChange={""}
                    width={"48%"}
                  />
                </RowContent>
                <RowContent>
                  <FormInput
                    formTitle={"Artist's Phone Number"}
                    inputId={"artist-phoneNumber"}
                    inputPlaceholder={"Artist Phone Number"}
                    type={"number"}
                    value={""}
                    onChange={""}
                    width={"48%"}
                  />

                  <FormInput
                    formTitle={"Artist's Email Address"}
                    inputId={"artist-email"}
                    inputPlaceholder={"Artist Email Address"}
                    type={"email"}
                    value={""}
                    onChange={""}
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
              <FormButton title={"Next"} onClick={handleNext} />
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
                value={""}
                onChange={""}
                width={"48%"}
              />

              <FormInput
                formTitle={"Enter your iTunes URL"}
                inputId={"itunes-url"}
                inputPlaceholder={"Enter your iTunes URL"}
                type={"text"}
                value={""}
                onChange={""}
                width={"48%"}
              />
            </RowContent>
            <FormInput
              type={"date"}
              formTitle={"Select the Date for your Music to be Uploaded"}
              width={"100%"}
              value={""}
              onChange={""}
            />
            <FormTextArea
              formTitle={
                "A short description of what the song is all about (Optional)"
              }
              row={5}
              value={""}
              onChange={""}
              placeholder={""}
              width={"100%"}
            />
            <FormTextArea
              formTitle={"Paste your Lyrics Here or Upload Below (Optional)"}
              row={5}
              value={""}
              onChange={""}
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
              />
              <FormButton title={"Next"} onClick={handleNext} />
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
                  uploadDescription="Drag & drop files or Browse. Supported formats: PNG, JPG"
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
}

export default UploadAlbum;
