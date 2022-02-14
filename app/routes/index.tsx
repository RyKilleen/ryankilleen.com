import styles from "~/assets//styles/styles.css";
import Headshot from "~/assets/images/headshot.jpg";
import { useEffect } from "react";
export default function Index() {
  return (
    <>
      <main>
        <h1>Ryan Killeen</h1>

        <section>
          <h2>About</h2>
          <div className="about-me">
            <div className="headshot">
              <img
                src={Headshot}
                alt="A selfie of Ryan standing in front of an orange, textured wall"
              />
            </div>
            <p>
              Ryan enjoys working on the web, learning, teaching, and tinkering.
              Currently, he is a Senior Engineer at <a href="https://nerstreet.com">Nerd Street Gamers</a>
            </p>
          </div>
        </section>

        <section>
          <h2>Lately, I've been</h2>

          <div>
            <h3>Working with:</h3>
            <ul className="working">
              <li><a href="https://nextjs.org">NextJS</a></li>
              <li><a href="https://www.apollographql.com">Apollo GraphQL</a></li>
              <li><a href="https://playwright.dev">Playwright</a></li>
              <li><a href="https://stitches.dev">Stitches JS</a></li>
            </ul>
          </div>
          <div>
            <h3>Dabbling in:</h3>
            <ul className="dabbling">
              <li><a href="https://prisma.io">Prisma</a></li>
              <li><a href="https://remix.run/">Remix.Run</a></li>
              <li><a href="https://www.rust-lang.org/">Rust 🦀</a></li>
              <li><a href="https://tauri.studio/">Tauri</a></li>
              <li><a href="https://temporal.io">Temporal</a></li>
            </ul>
          </div>
          <div>
            <h3>Reading:</h3>
            <ul className="reading">
              <li><a href="https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557">Thinking in Systems: A Primer - <b>Donella H. Meadows</b></a></li>
              <li><a href="https://staffeng.com/book">Staff Engineer: Leadership beyond the management track - <b>Will Larson</b></a></li>
            </ul>
          </div>
        </section>
      </main>
      <hr />
      <footer>
        <nav>
          <ul style={{display: 'flex', listStyle: 'none', padding:0, gap: '1rem'}}>
            <li>
              <a href="https://github.com/rykilleen">Github</a>
            </li>
            <li>
              <a href="https://twitter.com/deathbypapercut">Twitter</a>
            </li>
          </ul>
        </nav>
        <p>This website is best viewed on an electronic device.</p>
      </footer>
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
