import React, { useState } from "react";

const initialItems = [
  { id: 1, name: "Wireless Headphones", price: 79.99, qty: 1 },
  { id: 2, name: "Mechanical Keyboard", price: 129.99, qty: 2 },
  { id: 3, name: "USB-C Hub", price: 49.99, qty: 1 },
];

export default function CartPage() {
  const [items, setItems] = useState(initialItems);

  const removeItem = (id) =>
    setItems((prev) => prev.filter((item) => item.id !== id));

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div
      style={{
        border: "2px solid #38a169",
        borderRadius: "8px",
        margin: "2rem",
        padding: "2rem",
        background: "#fff",
      }}
    >
      <div
        style={{
          color: "#38a169",
          fontSize: "0.8rem",
          fontWeight: "700",
          marginBottom: "0.5rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        🛒 Loaded from MFE-Cart
      </div>
      <h2 style={{ marginBottom: "1.5rem", color: "#1a202c" }}>
        Shopping Cart
      </h2>

      {items.length === 0 ? (
        <p style={{ color: "#718096" }}>Your cart is empty.</p>
      ) : (
        <>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              marginBottom: "1.5rem",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "2px solid #e2e8f0",
                  textAlign: "left",
                  color: "#4a5568",
                }}
              >
                <th style={{ padding: "0.5rem" }}>Item</th>
                <th style={{ padding: "0.5rem" }}>Qty</th>
                <th style={{ padding: "0.5rem" }}>Unit Price</th>
                <th style={{ padding: "0.5rem" }}>Subtotal</th>
                <th style={{ padding: "0.5rem" }}></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.id}
                  style={{ borderBottom: "1px solid #e2e8f0" }}
                >
                  <td style={{ padding: "0.75rem 0.5rem" }}>{item.name}</td>
                  <td style={{ padding: "0.75rem 0.5rem" }}>{item.qty}</td>
                  <td style={{ padding: "0.75rem 0.5rem" }}>
                    ${item.price.toFixed(2)}
                  </td>
                  <td style={{ padding: "0.75rem 0.5rem" }}>
                    ${(item.price * item.qty).toFixed(2)}
                  </td>
                  <td style={{ padding: "0.75rem 0.5rem" }}>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{
                        background: "#e53e3e",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        padding: "0.25rem 0.75rem",
                        cursor: "pointer",
                        fontWeight: "600",
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            style={{
              textAlign: "right",
              fontSize: "1.25rem",
              fontWeight: "700",
              color: "#1a202c",
            }}
          >
            Total: ${total.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}
