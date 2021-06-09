import React, { useState } from "react";
import Calendar from "react-calendar";
import Styled from "styled-components";

const StyledDate = Styled.div`
margin: 0 auto;
width: 20%;

`;

//const (locale, date) => formatDate(date, "dd MMM YYYY")

const Date = (props) => {
  const { date } = props.dateInfo.state;

  console.log(date);
  const [value, onChange] = useState(date);
  return (
    // <div>
    //   <p>Date: {date}</p>
    // </div>
    <StyledDate>
      <Calendar onChange={onChange} value={value} />
    </StyledDate>
  );
};

export default Date;
