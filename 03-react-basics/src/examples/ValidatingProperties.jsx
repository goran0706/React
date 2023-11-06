import React from "react";

const Component = () => {
  return <div>Component</div>;
};

Component.propTypes = {
  myString: PropTypes.string,
  myNumber: PropTypes.number,
  myBool: PropTypes.bool,
  myFunc: PropTypes.func,
  myArray: PropTypes.array,
  myObject: PropTypes.object,
};

export default Component;
