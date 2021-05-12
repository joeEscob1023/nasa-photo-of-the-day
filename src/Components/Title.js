import React from "react";

const Title = (props) => {
  const { title } = props.title.state;
  console.log(title);
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
