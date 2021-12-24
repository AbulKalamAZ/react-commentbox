import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { customAlphabet } from "nanoid";

import ButtonLoader from "./ButtonLoader";

function CommentInput({ handlePushComment, commentProcessing }) {
  const location = useLocation();
  const docID = location.pathname.split("/")[2];
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [allowIFrame, setAllowIFrame] = useState(false);
  const [IFrameValue, setIFrameValue] = useState("");

  const commentID = customAlphabet(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    10
  )();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleIFrameChange = (e) => {
    setIFrameValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // Block browsers default behaviour

    e.preventDefault();

    // Run this block when comment isn't empty

    if (!(comment === "")) {
      name === ""
        ? handlePushComment(
            {
              id: commentID,
              name: "Anonymous",
              comment: comment,
              IFrameValue: IFrameValue,
            },
            docID
          )
        : handlePushComment({ name, comment, IFrameValue }, docID);

      // Clearing the input state
      setName("");
      setComment("");
      setIFrameValue("");
    }
  };

  return (
    <CommentInputBox>
      <StyledHeader>
        <h1>Let us know your thought</h1>
      </StyledHeader>

      <StyledForm onSubmit={handleSubmit}>
        <Name>
          <StyledLabel htmlFor='name' marginBottom='8px'>
            Name
          </StyledLabel>
          <StyledInput
            type='text'
            name='name'
            value={name}
            onChange={handleNameChange}
          />
        </Name>
        <Comment>
          <StyledLabel htmlFor='comment' marginBottom='8px'>
            Comment
          </StyledLabel>
          <StyledCommentInput
            name='comment'
            rows='4'
            value={comment}
            onChange={handleCommentChange}
          ></StyledCommentInput>
        </Comment>

        <IFaremeCheckBox>
          <StyledInput
            type='checkbox'
            id='checkbox'
            marginRight='8px'
            width='18px'
            height='18px'
            value={allowIFrame}
            onChange={() => setAllowIFrame(!allowIFrame)}
          />
          <StyledLabel htmlFor='checkbox'>Allow iframe</StyledLabel>
        </IFaremeCheckBox>

        {allowIFrame ? (
          <IFrameInput>
            <StyledLabel marginBottom='8px'>Put the link below</StyledLabel>
            <StyledInput
              type='text'
              name='iframe'
              value={IFrameValue}
              onChange={handleIFrameChange}
            />
          </IFrameInput>
        ) : null}
        <CommentButton>
          {commentProcessing ? <ButtonLoader /> : "Comment"}
        </CommentButton>
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
  margin-bottom: ${(props) => (props.marginBottom ? props.marginBottom : 0)};
  font-size: 18px;
  line-height: 1;
  font-weight: 500;
  color: #9d5c0d;
  user-select: none;
`;

const StyledInput = styled.input`
  padding: 12px;
  margin-right: ${(props) => (props.marginRight ? props.marginRight : 0)};
  width: ${(props) => (props.width ? props.width : null)};
  height: ${(props) => (props.height ? props.height : null)};
  font-size: 18px;
  line-height: 1;
  letter-spacing: 1px;
  color: #9d5c0d;
  border: 0;
  outline: none;
  border-radius: 4px;
  background-color: #f7d08a;
  cursor: ${(props) => (props.type === "checkbox" ? "pointer" : null)};
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

const IFaremeCheckBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
`;

const IFrameInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;
const CommentButton = styled.button`
  position: relative;
  top: 0;
  padding: 12px 24px;
  min-width: 120px;
  min-height: 40px;
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
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    box-shadow: none;
    top: 4px;
  }
`;
