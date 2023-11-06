import React, { useState } from "react";

const FunctionalComponent = ({ propA, propB }) => {
  const [value, setValue] = useState();

  const inc = () => setValue((v) => v + 1);
  const dec = () => setValue((v) => v - 1);

  return (
    <div>
      <p>FunctionalComponent</p>
      <div>
        <p>Property A: {propA}</p>
        <p>Property B: {propB}</p>
        <p>State value: {value}</p>
      </div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
};

FunctionalComponent.defaultProps = {
  propA: "Property A",
  propB: "Property B",
};

export default FunctionalComponent;
