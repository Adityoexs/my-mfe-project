import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div>
      <SearchBar onSearch={setQuery} />
      <SearchResults query={query} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
