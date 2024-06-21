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
  background: #f9f9f9;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;

function UploadSection({
  title,
  uploadTitle,
  uploadDescription,
  rules,
  uploadBtnTitle,
  onUploadBtnClick,
}) {
  return (
    <Section>
      <Content>
        <h2>{title}</h2>
        <UploadCard
          title={uploadTitle}
          description={uploadDescription}
          uploadBtnTitle={uploadBtnTitle}
          onUploadBtnClick={onUploadBtnClick}
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
