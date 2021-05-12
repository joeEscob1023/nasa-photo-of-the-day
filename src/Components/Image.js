import React from "react";
import Date from "./Date";

const Image = (props) => {
  const { hdurl } = props.state;
  console.log(hdurl);
  return (
    <div className="container">
      <Date dateInfo={props} />
      <img className="images" src={hdurl} alt="nasa" />
    </div>
  );
};

export default Image;
