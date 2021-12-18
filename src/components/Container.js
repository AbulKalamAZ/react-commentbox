import React, { useState } from "react";
import styled from "styled-components";

import CommentInput from "./CommentInput";
import CommentsContainer from "./Comments";

function Container() {
  const [comments, setComments] = useState([]);

  const handlePushComment = (body) => {
    setComments([body, ...comments]);
  };
  return (
    <StyledContainer>
      <CommentInput handlePushComment={handlePushComment} />
      <CommentsContainer comments={comments} />
    </StyledContainer>
  );
}

export default Container;

// Styles

const StyledContainer = styled.div`
  width: 50%;
  min-height: 100vh;
  max-height: auto;
  margin: 36px auto;
  background-color: #fff;
  border-radius: 8px;
`;
