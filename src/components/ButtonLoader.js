import React from "react";
import styled, { keyframes } from "styled-components";

function ButtonLoader() {
  return <Loader />;
}

export default ButtonLoader;

// Styles

const spin = keyframes`
   0% { transform: rotate(0deg); }
  100% { transform: rotate(720deg); }
`;

const Loader = styled.div`
  border: 2px solid #f3f3f3;
  border-radius: 50%;
  border-top: 2px solid #5a3407;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s ease-in-out infinite;
`;
