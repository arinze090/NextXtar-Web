import React from "react";
import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
`;

const SkeletonElement = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #f6f7f8;
  animation: ${skeletonAnimation} 1s infinite alternate;
  margin-bottom: 10px; /* Adjust spacing between skeleton elements */
`;

const SkeletonLoader = () => {
  return (
    <div>
      <SkeletonElement />
    </div>
  );
};

export default SkeletonLoader;
