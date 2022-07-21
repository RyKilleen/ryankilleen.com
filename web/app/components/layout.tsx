import React from "react";
import { Link } from "@remix-run/react";
import { trackOutboundLink } from "../services/analytics";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href="/" style={{ all: "unset", cursor: "pointer" }}>
          <h1 style={{ fontSize: "1.2rem", margin: 0 }}>Ryan Killeen</h1>
        </a>
        <nav title="main navigation">
          <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <hr />
      <footer>
        <nav>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              padding: 0,
              gap: "1rem",
            }}
          >
            <li>
              <a
                href="https://github.com/rykilleen"
                onClick={trackOutboundLink}
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/deathbypapercut"
                onClick={trackOutboundLink}
              >
                Twitter
              </a>
            </li>
            <li>
              <a href="mailto:rykilleen@gmail.com" onClick={trackOutboundLink}>
                Email
              </a>
            </li>
            <li>
              <a
                onClick={trackOutboundLink}
                href="/ryan-killeen-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <p>This website is best viewed on an electronic device.</p>
      </footer>
    </>
  );
};

export default Layout;
