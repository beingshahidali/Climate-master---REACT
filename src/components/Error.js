import React from "react";
import styled from "styled-components";
import { BiArrowBack } from "react-icons/bi";
const Error = (props) => {
  const { setApierror, BackClick } = props;
  return (
    <Container>
      <Back
        onClick={() => {
          setApierror(false);
          BackClick();
        }}
      >
        <BiArrowBack />
      </Back>
      <Message>City not found!</Message>
    </Container>
  );
};

export default Error;

const Container = styled.div``;
const Message = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 50px;
  padding: 50px;
`;

const Back = styled.span`
  color: #43aefc;
  font-size: 25px;
  cursor: pointer;
  margin-right: 90%;
`;
