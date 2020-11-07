import React from "react";
// import "./style.css";
import styled from "styled-components";

const StyledLoader = styled.div`
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid ${(props) => (props.primary ? "green" : "#3498cd")};
    width: 120px;
    height: 120px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  }

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader() {
  return <StyledLoader primary=""></StyledLoader>;
}
