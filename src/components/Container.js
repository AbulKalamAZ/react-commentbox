import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import utilities from "../firebase/utilities";

import CommentInput from "./CommentInput";
import CommentsContainer from "./Comments";

function Container() {
  const location = useLocation();
  const pageID = location.pathname.split("/")[2];
  const [comments, setComments] = useState([]);
  const [commentProcessing, setCommentProcessing] = useState(false);

  const handlePushComment = (body, id) => {
    setCommentProcessing(true);
    utilities
      .updateDocInCollection(body, id)
      .then(() => {
        utilities.readDocInCollection(id).then((res) => {
          setComments([...res.comments].reverse());
          setCommentProcessing(false);
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    utilities.readDocInCollection(pageID).then((res) => {
      setComments([...res.comments].reverse());
    });
  }, [pageID]);
  return (
    <>
      <LinkToNingSpruz href='http://ning.spruz.com' target='_blank'>
        <NingSpruzCard>
          <h1>Ning Spruz</h1>
          <p>Your social network for all</p>
        </NingSpruzCard>
      </LinkToNingSpruz>
      <StyledContainer>
        <CommentInput
          handlePushComment={handlePushComment}
          commentProcessing={commentProcessing}
        />
        <CommentsContainer comments={comments} />
      </StyledContainer>
    </>
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

const LinkToNingSpruz = styled.a``;

const NingSpruzCard = styled.div`
  width: 250px;
  padding: 12px;
  position: fixed;
  left: 20px;
  background-color: #9d5c0d;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
`;
