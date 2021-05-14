import React from "react";

const Date = (props) => {
  const { date } = props.dateInfo.state;
  console.log(date);
  return (
    <div>
      <p>Date: {date}</p>
    </div>
  );
};

export default Date;
