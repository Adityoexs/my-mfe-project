import React from "react";

export default function CartIcon({ count = 0 }) {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <span style={{ fontSize: "1.5rem" }}>🛒</span>
      {count > 0 && (
        <span
          style={{
            position: "absolute",
            top: "-6px",
            right: "-8px",
            background: "#e53e3e",
            color: "#fff",
            borderRadius: "50%",
            width: "18px",
            height: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.65rem",
            fontWeight: "700",
          }}
        >
          {count}
        </span>
      )}
    </div>
  );
}
