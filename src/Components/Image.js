import React from "react";
import Date from "./Date";
import Title from "./Title";
import Explanation from "./Explanation";

const Image = (props) => {
  const { hdurl } = props.state;
  console.log(hdurl);
  return (
    <div className="container">
      <Title title={props} />
      <Date dateInfo={props} />
      <img className="images" src={hdurl} alt="nasa" />
      <Explanation explanation={props} />
    </div>
  );
};

export default Image;
