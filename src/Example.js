import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <strong>Example: </strong>
        <i>"{props.example}"</i>
      </div>
    );
  } else {
    return null;
  }
}
