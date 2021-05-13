import React from "react";

import Styled from "styled-components";

const StyledTitle = Styled.div`
margin: 0 auto;
width: 50%;
font-family: sans;
  background-color: ${(props) => props.theme.primaryColor}
  
`;

const Title = (props) => {
  const { title } = props.title.state;
  console.log(title);
  return (
    <StyledTitle>
      <h2>{title}</h2>
    </StyledTitle>
  );
};

export default Title;
