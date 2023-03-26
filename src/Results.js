import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log({ r: props.results });
  if (props.results && props.results.status !== "not_found") {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <span className="phonetic-text">{props.results.phonetic}</span>
        </section>
        {props.results.meanings.slice(0, 4).map(function (meanings, index) {
          return (
            <section key={index}>
              <Meaning meaning={meanings} />
            </section>
          );
        })}
      </div>
    );
  } else if (props.results && props.results.status === "not_found") {
    return (
      <section className="sorry">
        <h2>sorry, that word yielded no results</h2>
      </section>
    );
  } else {
    return null;
  }
}
