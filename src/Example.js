import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <div className="bold-text">Example: </div>
        <i>"{props.example}"</i>
      </div>
    );
  } else {
    return null;
  }
}
