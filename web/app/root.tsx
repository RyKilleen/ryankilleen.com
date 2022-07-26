import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/cloudflare";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import stylesUrl from "./assets/styles/styles.css";
import { isPreviewEnabled } from "./services/cms";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Ryan Killeen",
  viewport: "width=device-width,initial-scale=1",
});

/**
 * The `links` export is a function that returns an array of objects that map to
 * the attributes for an HTML `<link>` element. These will load `<link>` tags on
 * every route in the app, but individual routes can include their own links
 * that are automatically unloaded when a user navigates away from the route.
 *
 * https://remix.run/api/app#links
 */
export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }, {rel:'alternate', type: 'application/rss+xml', href:'https://ryankilleen.com/rss'}];
};

type LoaderData = {
  isPreview: boolean;
};

export const loader: LoaderFunction = async ({
  request,
  params,
  context,
}): Promise<LoaderData> => {
  const isPreview = isPreviewEnabled(request);

  return {
    isPreview,
  };
};

export default function App() {
  const { isPreview } = useLoaderData<LoaderData>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        {isPreview && (
          <div
            style={{
              backgroundColor: "#2ec8ee",
              textAlign: "center",
              color: "black",
              marginLeft: "-5%",
              marginRight: "-5%",
              padding: "1rem",
              position: "sticky",
              top: 0,
            }}
          >
            Preview mode!
          </div>
        )}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <script
          defer
          data-domain="ryankilleen.com"
          data-api="https://rk-data.rykilleen.workers.dev/misc/event"
          src="https://rk-data.rykilleen.workers.dev/misc/script.js"
        ></script>
        <LiveReload />
      </body>
    </html>
  );
}
