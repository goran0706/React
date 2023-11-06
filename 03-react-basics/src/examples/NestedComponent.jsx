import React from "react";

const Outer = ({ children }) => {
  return <div>{children}</div>;
};

const Inner = () => {
  return <div>NestedComponent</div>;
};

const NestedComponent = () => {
  return (
    <Outer>
      <Inner />
    </Outer>
  );
};

export default NestedComponent;
