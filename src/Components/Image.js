import React from "react";
import Date from "./Date";
import Title from "./Title";
import Explanation from "./Explanation";

import Styled from "styled-components";

const StyledContainer = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const StyledImage = Styled.img`
width: 28%;
margin: 0 auto;
`;

const Image = (props) => {
  const { hdurl } = props.state;
  console.log(hdurl);
  return (
    <StyledContainer>
      <Title title={props} />
      <Date dateInfo={props} />
      <StyledImage src={hdurl} alt="nasa" />
      <Explanation explanation={props} />
    </StyledContainer>
  );
};

export default Image;
