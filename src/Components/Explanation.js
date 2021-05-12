import React from "react";

const Explanation = (props) => {
  const { explanation } = props.explanation.state;
  console.log(explanation);
  return (
    <div>
      <p>{explanation}</p>
    </div>
  );
};

export default Explanation;
