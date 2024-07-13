import React from "react";
import styled from "styled-components";
import UploadCard from "../cards/UploadCard";

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  margin-bottom: 2rem;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Rules = styled.div`
  padding: 1rem;
  margin-left: 1rem;
  border-radius: 8px;
  width: 100%;
  // max-width: 400px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    font-size: 14px;
  }
`;

function UploadSection({
  title,
  uploadTitle,
  uploadDescription,
  rules,
  uploadBtnTitle,
  onFileUpload,
  selectedFile,
  previewUrl,
  handleCancel,
  loading,
  handleFileChange,
  fileType,
  UploadedText,
  isFileUploaded,
  uploadPercentage,
}) {
  return (
    <Section>
      <Content>
        <h2>{title}</h2>
        <UploadCard
          title={uploadTitle}
          description={uploadDescription}
          uploadBtnTitle={uploadBtnTitle}
          onFileUpload={onFileUpload}
          fileType={fileType}
          handleFileChange={handleFileChange}
          loading={loading}
          previewUrl={previewUrl}
          handleCancel={handleCancel}
          selectedFile={selectedFile}
          UploadedText={UploadedText}
          isFileUploaded={isFileUploaded}
          uploadPercentage={uploadPercentage}
        />
      </Content>
      <Rules>
        <h4>Rules</h4>
        <ul>
          {rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </Rules>
    </Section>
  );
}

export default UploadSection;
