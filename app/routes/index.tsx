import styles from "./styles.css";
import Headshot from "~/assets/images/headshot.jpg";
import { useEffect } from "react";
export default function Index() {
  return (
    <>
      <main>
        <h1>Ryan Killeen</h1>

        <section>
          <h2>About</h2>
          <div style={{ display: "flex", columnGap: "1rem" }}>
            <div className="headshot">
              <img
                src={Headshot}
                alt="A selfie of Ryan standing in front of an orange, textured wall"
              />
            </div>
            <p>
              Ryan enjoys working on the web, learning, teaching, and tinkering.
              Currently, he is a Senior Engineer at Nerd Street Gamers
            </p>
          </div>
        </section>

        <section>
          <h2>Lately, I've been:</h2>

          <div>
            <h3>Working With</h3>
            <ul>
              <li>Next JS</li>
              <li>GraphQL</li>
              <li>Playwright</li>
              <li>StitchesJS</li>
            </ul>
          </div>
          <div>
            <h3>Dabbling In</h3>
            <ul>
              <li>Remix.Run</li>
              <li>Rust</li>
              <li>Tauri</li>
              <li>Temporal.io</li>
            </ul>
          </div>
          <div>
            <h3>Reading</h3>
            <ul>
              <li>Staff Engineer - A book</li>
            </ul>
          </div>
        </section> 
      </main>
      <hr />
      <footer>This website is best viewed on an electronic device.</footer>
    </>
  );
}

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
    },
    {
      rel: "preload",
      href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100..700&display=swap",
      as: "style",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100..700&display=swap",
    },
  ];
}
