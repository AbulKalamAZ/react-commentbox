import React from "react";
import styled from "styled-components";

import userAvatar from "../assets/user.png";

function Comments({ comments }) {
  return (
    <CommentsWrapper>
      {comments.map(({ id, name, comment, IFrameValue }) => {
        return (
          <Comment key={`${id} + ${Math.random()}`}>
            <CommentorAvatar />

            <CommentorContent>
              <CommentorName>{name}</CommentorName>
              <CommentorComment>{comment}</CommentorComment>

              {IFrameValue === "" ? null : (
                <IFrameContainer
                  title='comment-media'
                  src={IFrameValue}
                ></IFrameContainer>
              )}
            </CommentorContent>
          </Comment>
        );
      })}
    </CommentsWrapper>
  );
}

export default Comments;

// Styles

const CommentsWrapper = styled.div`
  padding: 24px 0px;
`;

const Comment = styled.div`
  height: auto;
  padding: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 18px;
`;

const CommentorAvatar = styled.div`
  padding: 12px;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: url(${userAvatar});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  cursor: pointer;
`;

const CommentorContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const CommentorName = styled.h4`
  position: relative;
  bottom: 0px;
`;
const CommentorComment = styled.p`
  margin-bottom: 12px;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 400;
`;

const IFrameContainer = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;
  outline: 0;
`;
