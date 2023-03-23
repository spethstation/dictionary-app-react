import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./App.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data);
  }

  function handleImageResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "402d5cdade9ocf6tbbb9c2e4fa325683";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let sheCodesApiKey = "402d5cdade9ocf6tbbb9c2e4fa325683";
    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${sheCodesApiKey}`;
    axios.get(sheCodesApiUrl).then(handleImageResponse);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="What word do you want to search?"
            onChange={keywordChange}
          />
        </form>
        <Results results={definition} />
      </section>
    </div>
  );
}
