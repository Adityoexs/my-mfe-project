import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const CartPage = lazy(() => import("cart/CartPage"));
const SearchBar = lazy(() => import("search/SearchBar"));
const SearchResults = lazy(() => import("search/SearchResults"));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            padding: "2rem",
            color: "#e53e3e",
            textAlign: "center",
            border: "2px dashed #e53e3e",
            borderRadius: "8px",
            margin: "2rem",
          }}
        >
          <h2>⚠️ Remote Unavailable</h2>
          <p>
            Could not load the remote module. Make sure the remote app is
            running.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

const navStyle = {
  background: "#1a202c",
  padding: "1rem 2rem",
  display: "flex",
  alignItems: "center",
  gap: "2rem",
};

const linkStyle = {
  color: "#e2e8f0",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "1rem",
};

const HomePage = () => (
  <div style={{ padding: "3rem", textAlign: "center" }}>
    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#1a202c" }}>
      🏠 Welcome Home
    </h1>
    <p style={{ color: "#718096", fontSize: "1.2rem", marginBottom: "1rem" }}>
      This is the <strong>Host (Shell)</strong> application powering the Micro
      Frontend demo.
    </p>
    <p style={{ color: "#718096" }}>
      Navigate to{" "}
      <Link to="/cart" style={{ color: "#38a169", fontWeight: "600" }}>
        /cart
      </Link>{" "}
      or{" "}
      <Link to="/search" style={{ color: "#805ad5", fontWeight: "600" }}>
        /search
      </Link>{" "}
      to see remote MFEs loaded at runtime.
    </p>
  </div>
);

const SearchPage = () => {
  const [query, setQuery] = React.useState("");
  return (
    <div>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div style={{ padding: "2rem", color: "#805ad5" }}>
              Loading Search Bar…
            </div>
          }
        >
          <SearchBar onSearch={setQuery} />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div style={{ padding: "2rem", color: "#805ad5" }}>
              Loading Search Results…
            </div>
          }
        >
          <SearchResults query={query} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          background: "#f7fafc",
        }}
      >
        <nav style={navStyle}>
          <span
            style={{
              color: "#63b3ed",
              fontWeight: "800",
              fontSize: "1.2rem",
            }}
          >
            🚀 MFE Demo
          </span>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
          <Link to="/cart" style={linkStyle}>
            Cart
          </Link>
          <Link to="/search" style={linkStyle}>
            Search
          </Link>
        </nav>

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/cart"
              element={
                <ErrorBoundary>
                  <Suspense
                    fallback={
                      <div style={{ padding: "2rem", color: "#38a169" }}>
                        Loading Cart…
                      </div>
                    }
                  >
                    <CartPage />
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>

        <footer
          style={{
            background: "#1a202c",
            color: "#a0aec0",
            textAlign: "center",
            padding: "1rem",
            fontSize: "0.9rem",
          }}
        >
          Powered by Module Federation
        </footer>
      </div>
    </BrowserRouter>
  );
}
