import React from "react";

import Styled from "styled-components";

const StyledDesc = Styled.div`

  width: 50%;
  margin: 0 auto;
  margin-top: 3%;
  margin-bottom: 3%;
  background-color: grey;
`;

const StyledP = Styled.p`
  color: white;
  padding: 2%;
`;

const Explanation = (props) => {
  const { explanation } = props.explanation.state;
  console.log(explanation);
  return (
    <StyledDesc>
      <StyledP>{explanation}</StyledP>
    </StyledDesc>
  );
};

export default Explanation;
