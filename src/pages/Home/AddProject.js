import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import HeaderTitle from "../../components/common/HeaderTitle";
import FormInput from "../../components/form/FormInput";
import FormButton from "../../components/form/FormButton";
import FormSelect from "../../components/form/FormSelect";
import FormTextArea from "../../components/form/FormTextArea";
import UploadCard from "../../components/cards/UploadCard";
import { API_KEY } from "../../utils/devKeys";
import { baseURL } from "../../utils/api-client";
import { COLORS } from "../../theme/theme";

const Container = styled.div`
  margin: 0 auto;
  padding: 2rem;
  background: ${COLORS.black};
  padding-top: 120px;
`;

function AddProject() {
  const navigate = useNavigate();

  const state = useSelector((state) => state);

  const user = state?.user?.user;

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // upload section
  const [selectedFile, setSelectedFile] = useState("");
  const [uploadedDocumentUrl, setUploadedDocumentUrl] = useState(null);

  // Video upload section
  const [base64Video, setBase64Video] = useState(null);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const [uploadedVideoUrl, setUploadedVideoUrl] = useState(null);

  const [fullName, setFullName] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [projectSponsor, setProjectSponsor] = useState("");

  // Error states
  const [formError, setFormError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [projectTitleError, setProjectTitleError] = useState("");
  const [projectDescError, setProjectDescError] = useState("");
  const [projectSponsorError, setProjectSponsorError] = useState("");

  const submitProject = async () => {
    setLoading(false);

    const form = new FormData();
    form.append("token", user?.Token);
    form.append("project_id", 0);
    form.append("full_name", fullName);
    form.append("project_title", projectTitle);
    form.append("project_desc", projectDesc);
    form.append("project_sponsor", projectSponsor);
    form.append(
      "uploads",
      uploadedVideoUrl ? uploadedVideoUrl?.link : uploadedDocumentUrl?.link
    );

    if (!fullName) {
      setFullNameError("Please provide an information");
    } else if (!projectTitle) {
      setProjectTitleError("Please provide an information");
    } else if (!projectDesc) {
      setProjectDescError("Please provide an information");
    } else if (!projectSponsor) {
      setProjectSponsorError("Please provide an information");
    } else {
      try {
        await axios
          .post(`${baseURL}submit-project.php?API_KEY=${API_KEY}`, form)
          .then((res) => {
            console.log("res", res);
            setLoading(false);

            if (res?.data?.status == 200) {
              console.log("submitProject data", res?.data);
              toast.success(
                "Your project has been submitted successfully and is under review."
              );
              navigate("/projects");
            } else {
              console.log("submitProject message", res?.data?.status);
            }
          })
          .catch((err) => {
            console.log("submitProject err", err);
            setLoading(false);
            setFormError("Something went wrong, please try again");
          });
      } catch (error) {
        console.log("submitProject error", error);
        setFormError("Something went wrong, please try again");
      }
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file?.type == "video/mp4") {
      const fileUrl = URL.createObjectURL(file);
      setSelectedVideoUrl(fileUrl);

      const reader = new FileReader();
      reader.onloadend = () => {
        setBase64Video(reader?.result);
      };
      reader.readAsDataURL(file);
    } else {
      console.log("file is a pdf");
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

  const uploadFile = async () => {
    console.log("uploadFile");

    if (!selectedFile) {
      return;
    }
    if (selectedFile?.type == "video/mp4") {
      uploadMP4File(selectedFile, base64Video);
    } else {
      uploadDocument(selectedFile);
    }
  };

  return (
    <Container>
      <HeaderTitle
        title={"Add New Project"}
        imgSrc={require("../../assets/gif11.gif")}
        imgAlt={"Projects Image"}
      />

      <FormInput
        type={"text"}
        formTitle={"Real Name (Full Name)"}
        inputPlaceholder={"Real Name (Full Name)"}
        inputId={"name"}
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
          setFormError("");
          setFullNameError("");
        }}
        errorMessage={fullNameError}
      />

      <FormInput
        type={"text"}
        formTitle={"Project Title"}
        inputPlaceholder={""}
        inputId={"projectTitle"}
        value={projectTitle}
        onChange={(e) => {
          setProjectTitle(e.target.value);
          setFormError("");
          setProjectTitleError("");
        }}
        errorMessage={projectTitleError}
      />

      <FormTextArea
        formTitle="Project Description"
        row={5}
        placeholder={""}
        value={projectDesc}
        onChange={(e) => {
          setProjectDesc(e.target.value);
          setFormError("");
          setProjectDescError("");
        }}
        errorMessage={projectDescError}
        width={"100%"}
      />

      <FormTextArea
        formTitle="Why SupaTunes should sponsor your project"
        row={5}
        placeholder={""}
        value={projectSponsor}
        onChange={(e) => {
          setProjectSponsor(e.target.value);
          setFormError("");
          setProjectSponsorError("");
        }}
        errorMessage={projectSponsorError}
        width={"100%"}
      />

      <UploadCard
        title="Upload your document or video"
        description="Distribute your songs across multiple platforms"
        formats="PDF or MP4"
        uploadBtnTitle={"Upload"}
        uploadTitle="Video"
        uploadDescription="Drag & drop files or Browse. Supported formats: MP4"
        rules={"videoRecordRules"}
        fileType={"video/*,application/pdf"}
        handleFileChange={handleFileChange}
        loading={loading}
        selectedFile={selectedFile}
        onFileUpload={() => {
          uploadFile();
        }}
        previewUrl={selectedVideoUrl}
        handleCancel={() => {
          setSelectedFile(null);
          // setSelectedVideoUrl(null);
        }}
        UploadedText={"Your file has been uploaded"}
        isFileUploaded={
          uploadedVideoUrl ? uploadedVideoUrl?.link : uploadedDocumentUrl?.link
        }
        uploadPercentage={progress}
      />

      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <FormButton
          title={"Add Project"}
          marginTop={40}
          marginLeft={"0px"}
          onClick={submitProject}
          errorMessage={formError}
          loading={loading}
          width={"100%"}
        />
      </div>
    </Container>
  );
}

export default AddProject;
