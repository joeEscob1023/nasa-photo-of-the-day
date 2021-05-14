import React from "react";

import Styled from "styled-components";

const StyledHeader = Styled.h1`

font-family: sans;
  color: ${(props) => props.theme.secondaryColor}
  
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <span roll="img" alt="ufo">
        🛸
      </span>
      Nasa Project<span>🚀</span>
    </StyledHeader>
  );
};

export default Header;
