import React from "react";
import styled from "styled-components";
import { MdFileUpload } from "react-icons/md";
import TransparentBtn from "../form/TransparentBtn";

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  flex: 1;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  color: #0a4827;
  font-size: 24px;
  margin-bottom: 20px;
`;

const UploadArea = styled.div`
  border: 2px dashed #e0e0e0;
  border-radius: 8px;
  padding: 40px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
`;

const UploadText = styled.p`
  margin: 0;
  color: #555;
`;

const UploadIcon = styled(MdFileUpload)`
  margin-right: 8px;
`;

const DescriptionText = styled.p`
  text-align: center;
`;

const UploadCard = ({
  title,
  description,
  formats,
  uploadBtnTitle,
  onUploadBtnClick,
}) => {
  return (
    <Card>
      <Title>{title}</Title>
      <UploadArea>
        <UploadIcon style={{ fontSize: 48, color: "#0a4827" }} />
        <UploadText>
          Drag & drop files or <a href="#,">Browse</a>
        </UploadText>
        <UploadText>Supported formats: {formats}</UploadText>
      </UploadArea>
      <DescriptionText>{description}</DescriptionText>

      <div
        style={{
          justifyContent: "center",
          display: "flex",
        }}
      >
        <TransparentBtn
          title={uploadBtnTitle}
          onClick={onUploadBtnClick}
          width={"100%"}
          marginLeft={"0px"}
          color={"black"}
          marginTop={10}
          btnIcon={
            <MdFileUpload
              style={{ color: "black", marginRight: 7, fontSize: 16 }}
            />
          }
        />
      </div>
    </Card>
  );
};

export default UploadCard;
