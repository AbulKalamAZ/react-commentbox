import React from "react";
import styled from "styled-components";
import { customAlphabet } from "nanoid";
import { Link } from "react-router-dom";

function Home() {
  const commentBoxID = customAlphabet(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    20
  )();
  return (
    <StyledContainer>
      <Link to={`/commentbox/${commentBoxID}`}>
        <StyledNavigationButton>Create Commentbox</StyledNavigationButton>
      </Link>
    </StyledContainer>
  );
}

export default Home;

// Styles

const StyledContainer = styled.div`
  width: 50%;
  height: 75vh;
  margin: 100px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
`;

const StyledNavigationButton = styled.button`
  padding: 12px 24px;
  border: 0;
  outline: none;
  background-color: #9d5c0d;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
`;
