import React, { useState } from "react";
import styled from "styled-components";

function CommentInput({ handlePushComment }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    // Block browsers default behaviour

    e.preventDefault();

    // Run this block when comment isn't empty

    if (!(comment === "")) {
      name === ""
        ? handlePushComment({ name: "Anonymous", comment: comment })
        : handlePushComment({ name, comment });

      // Clearing the input state
      setName("");
      setComment("");
    }
  };

  return (
    <CommentInputBox>
      <StyledHeader>
        <h1>Let us know your thought</h1>
      </StyledHeader>

      <StyledForm onSubmit={handleSubmit}>
        <Name>
          <StyledLabel htmlFor='name'>Name</StyledLabel>
          <StyledNameInput
            name='name'
            value={name}
            onChange={handleNameChange}
          ></StyledNameInput>
        </Name>
        <Comment>
          <StyledLabel htmlFor='comment'>Comment</StyledLabel>
          <StyledCommentInput
            name='comment'
            rows='4'
            value={comment}
            onChange={handleCommentChange}
          ></StyledCommentInput>
        </Comment>
        <CommentButton>Comment</CommentButton>
      </StyledForm>
    </CommentInputBox>
  );
}

export default CommentInput;

// Styles

const CommentInputBox = styled.div`
  margin-bottom: 48px;
`;

const StyledHeader = styled.div`
  padding: 24px;

  & > h1 {
    font-size: 36px;
    color: #9d5c0d;
    font-weight: 500;
  }
`;

const StyledForm = styled.form`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`;

const Name = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1;
  font-weight: 500;
  color: #9d5c0d;
`;

const StyledNameInput = styled.input`
  padding: 12px;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 1px;
  color: #9d5c0d;
  border: 0;
  outline: none;
  border-radius: 4px;
  background-color: #f7d08a;
`;

const Comment = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledCommentInput = styled.textarea`
  padding: 12px;
  font-size: 18px;
  line-height: 1.5;
  letter-spacing: 1px;
  color: #9d5c0d;
  border: 0;
  outline: none;
  border-radius: 4px;
  resize: none;
  background-color: #f7d08a;
`;

const CommentButton = styled.button`
  position: relative;
  top: 0;
  padding: 12px 24px;
  font-size: 16px;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 1px;
  color: #fff;
  border: 0;
  outline: none;
  border-radius: 4px;
  align-self: flex-end;
  background-color: #9d5c0d;
  box-shadow: 0px 4px #8d4e00;
  cursor: pointer;
  transition: all 100ms ease-in;

  &:active {
    box-shadow: none;
    top: 4px;
  }
`;
