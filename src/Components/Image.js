import React from "react";

const Image = (props) => {
  console.log(props.state.hdurl);
  return (
    <div className="imageDiv">
      <img className="images" src={props.state.hdurl} alt="nasa" />
    </div>
  );
};

export default Image;
