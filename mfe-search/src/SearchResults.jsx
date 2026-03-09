import React from "react";

const SAMPLE_PRODUCTS = [
  { id: 1, name: "Wireless Headphones", category: "Electronics", price: 79.99 },
  { id: 2, name: "Mechanical Keyboard", category: "Electronics", price: 129.99 },
  { id: 3, name: "USB-C Hub", category: "Electronics", price: 49.99 },
  { id: 4, name: "Laptop Stand", category: "Accessories", price: 39.99 },
  { id: 5, name: "Webcam HD 1080p", category: "Electronics", price: 89.99 },
  { id: 6, name: "Monitor Light Bar", category: "Accessories", price: 35.99 },
  { id: 7, name: "Ergonomic Mouse", category: "Electronics", price: 59.99 },
  { id: 8, name: "Desk Organizer", category: "Accessories", price: 24.99 },
];

export default function SearchResults({ query }) {
  const filtered = query
    ? SAMPLE_PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : SAMPLE_PRODUCTS;

  return (
    <div
      style={{
        border: "2px solid #805ad5",
        borderRadius: "8px",
        padding: "1.5rem",
        margin: "0 2rem 2rem 2rem",
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
        📋 Loaded from MFE-Search
      </div>
      <h3 style={{ marginBottom: "1rem", color: "#1a202c" }}>
        {query ? `Results for "${query}"` : "All Products"} ({filtered.length})
      </h3>

      {filtered.length === 0 ? (
        <p style={{ color: "#718096" }}>No results found.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {filtered.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                padding: "1rem",
                background: "#faf5ff",
              }}
            >
              <div
                style={{ fontWeight: "600", marginBottom: "0.25rem", color: "#1a202c" }}
              >
                {product.name}
              </div>
              <div
                style={{
                  color: "#718096",
                  fontSize: "0.85rem",
                  marginBottom: "0.5rem",
                }}
              >
                {product.category}
              </div>
              <div style={{ color: "#805ad5", fontWeight: "700" }}>
                ${product.price.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
