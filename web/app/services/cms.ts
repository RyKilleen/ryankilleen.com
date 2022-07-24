// import sanityClient from "@sanity/client";
// @ts-ignore
import sanityClient from "picosanity/lib/browser";

const config = {
  projectId: "90sffhgh",
  dataset: "production",
  apiVersion: "2022-02-20", // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
};
const client = sanityClient(config);

const previewClient = sanityClient({
  ...config,
  useCdn: false,
  token: SANITY_API_TOKEN ?? "",
});
export const getClient = (usePreview = false) =>
  usePreview ? previewClient : client;

export const isPreviewEnabled = (request: Request) => {
  const requestUrl = new URL(request?.url);
  console.log("checking preview secret", SANITY_PREVIEW_SECRET);
  const preview =
    requestUrl?.searchParams?.get("preview") === SANITY_PREVIEW_SECRET;
  console.log("preview enabled:", preview);
  return preview;
};

export const getPreviewQuery = (request: Request) => {
  const requestUrl = new URL(request.url);
  return requestUrl?.searchParams?.get("preview");
};
