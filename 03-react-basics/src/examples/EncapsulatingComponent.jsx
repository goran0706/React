import React, { Fragment } from "react";

const EncapsulatingComponent = () => {
  const fragment = true;

  // <p>EncapsulatingComponent</p>
  // <p>This is an encapsulated component</p>

  if (fragment) {
    return (
      <Fragment>
        <p>EncapsulatingComponent</p>
        <p>This is an encapsulated component</p>
      </Fragment>
    );
  }

  // <section>
  //   <p>EncapsulatingComponent</p>
  //   <p>This is an encapsulated component</p>
  // </section>;

  return (
    <section>
      <p>EncapsulatingComponent</p>
      <p>This is an encapsulated component</p>
    </section>
  );
};

export default EncapsulatingComponent;
