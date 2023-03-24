import React from "react";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div className="Synonym">
        <span className="bold-text">Synonyms: </span>
        {props.synonym.map((synonym, index) => (
          <span key={index}>{(index ? ", " : "") + synonym}</span>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
