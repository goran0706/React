import React, { useState } from "react";

const genericHandler = (str) => str.split("").reverse().join("");

const EventHandling = () => {
  // controlled component
  const [text, setText] = useState("");
  const [reversed, setReversed] = useState("");

  // declare an event handler
  const onClick = (e) => {
    e.preventDefault();
    alert(text);
  };

  // declare multiple event handlers
  const onChange = (e) => setText(e.target.value);
  const onBlur = () => console.log("Blurred");
  const onReverse = () => setReversed(genericHandler(text));

  return (
    <div>
      <p>EventHandling</p>
      <form>
        <input type="text" value={text} onBlur={onBlur} onChange={onChange} />
        <p>Reversed input: {reversed}</p>

        <button type="reset" onClick={() => console.log("Reset")}>
          Reset
        </button>
        <button type="button" onClick={onReverse}>
          Reverse
        </button>
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EventHandling;
