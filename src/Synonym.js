import React from "react";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div className="Synonym">
        <div className="bold-text">Synonyms:</div>
        {props.synonym.map(function (synonym, index) {
          return <span key={index}> {synonym}</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
