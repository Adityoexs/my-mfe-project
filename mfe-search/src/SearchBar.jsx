import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  return (
    <div
      style={{
        border: "2px solid #805ad5",
        borderRadius: "8px",
        padding: "1.5rem",
        margin: "2rem",
        background: "#fff",
      }}
    >
      <div
        style={{
          color: "#805ad5",
          fontSize: "0.8rem",
          fontWeight: "700",
          marginBottom: "0.75rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        🔍 Loaded from MFE-Search
      </div>
      <h3 style={{ marginBottom: "1rem", color: "#1a202c" }}>Search</h3>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search products..."
          style={{
            flex: 1,
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            border: "1px solid #e2e8f0",
            fontSize: "1rem",
            outline: "none",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            background: "#805ad5",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            padding: "0.5rem 1.5rem",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "1rem",
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
