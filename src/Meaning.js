import React from "react";
import Synonym from "./Synonym";
import Example from "./Example";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>Definition: {props.meaning.definition}</p>
      <p>
        <Example example={props.meaning.example} />
      </p>
      <Synonym synonym={props.meaning.synonyms} />
    </div>
  );
}
