import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div>
      <div>{children}</div>
      <div>
        <button onClick={() => alert("OK")}>Confirm</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
