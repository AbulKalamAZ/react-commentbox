import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import { customAlphabet } from "nanoid";
import { useNavigate } from "react-router-dom";

import utilities from "../firebase/utilities";

import loadingImage from "../assets/spinner.gif";

function Home() {
  const commentBoxID = customAlphabet(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    20
  )();

  const [isLoading, setIsLoading] = useState(false);

  // History data of the page
  const history = useNavigate();

  // This function will take user to the next page once the doc is created
  const pushToTheNextPage = useCallback(
    () => history(`/commentbox/${commentBoxID}`),
    [history, commentBoxID]
  );

  //This function will handle routing from top
  const handleCommentBoxRoute = () => {
    setIsLoading(true);
    utilities.createDocInCollection(commentBoxID).then((id) => {
      // Route to the /commentbox/id page
      pushToTheNextPage();
      setIsLoading(false);
    });
  };

  useEffect(() => {
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <StyledContainer>
      {isLoading ? (
        <LoadingImage src={loadingImage} alt='loading icon' />
      ) : (
        <StyledNavigationButton onClick={handleCommentBoxRoute}>
          Create Commentbox
        </StyledNavigationButton>
      )}
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

const LoadingImage = styled.img``;

const StyledNavigationButton = styled.button`
  padding: 12px 24px;
  border: 0;
  outline: none;
  background-color: #9d5c0d;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
`;
