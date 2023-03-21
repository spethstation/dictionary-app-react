import React from "react";
import Synonym from "./Synonym";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>
        <div className="bold-text">Definition:</div> {props.meaning.definition}
      </p>
      <p>
        <Example example={props.meaning.example} />
      </p>
      <p>
        <Synonym synonym={props.meaning.synonyms} />
      </p>
    </div>
  );
}
