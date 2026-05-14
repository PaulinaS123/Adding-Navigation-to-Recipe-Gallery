import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
} from "react-router";

// Import your global CSS
import "./app.css";

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* Requirement: Global Navigation Bar */}
        <nav style={navStyle}>
          <div className="nav-container">
            <Link to="/" style={linkStyle}>
              Home
            </Link>
            <Link to="/gallery" style={linkStyle}>
              Recipe Gallery
            </Link>
          </div>
        </nav>

        <main style={{ padding: "20px" }}>{children}</main>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

// Simple inline styles for the assignment requirement
const navStyle = {
  padding: "1rem",
  background: "#333",
  color: "white",
  marginBottom: "20px",
};

const linkStyle = {
  color: "white",
  marginRight: "20px",
  textDecoration: "none",
  fontWeight: "bold",
};
