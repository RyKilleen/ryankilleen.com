import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "Ryan Killeen - Web Engineer",
    description:
      "Ryan Killeen's personal page, detailing his current interests, tech stack, and reading list.",
  };
};

if (typeof document !== "undefined") {
  window.plausible =
    window.plausible ||
    function () {
      (window.plausible.q = window.plausible.q || []).push(arguments);
    };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
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
