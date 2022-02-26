import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./assets/styles/styles.css";
import { useEffect } from "react";
import { createSchema } from "./utils/schema";
import type { Post } from "./routes/posts/$slug";

export const meta: MetaFunction = () => {
  return {
    title: "Ryan Killeen - Web Engineer",
    description:
      "Ryan Killeen's personal page, detailing his current interests, tech stack, and reading list.",
  };
};

const buildSchemas = (matches: ReturnType<typeof useMatches>) => {
  const schemaObjects = [];
  const postMatch = matches.find((m) => m?.data?._type === "post");
  if (postMatch) {
    const postSchema = createSchema(postMatch.data);
    schemaObjects.push(postSchema);
  }

  return schemaObjects;
};

export default function App() {
  const matches = useMatches();

  const schemas = buildSchemas(matches);

  useEffect(() => {
    window.plausible =
      window.plausible ||
      function () {
        (window.plausible.q = window.plausible.q || []).push(arguments);
      };
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {schemas}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <script
          defer
          data-domain="ryankilleen.com"
          data-api="/misc/api/event"
          src="/misc/js/script.js"
        ></script>
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
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
