import React from "react";

const Date = (props) => {
  const { date } = props.dateInfo.state;
  console.log(date);
  return (
    <div>
      <h3>Date: {date}</h3>
    </div>
  );
};

export default Date;
