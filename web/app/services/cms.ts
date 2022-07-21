// import sanityClient from "@sanity/client";
// @ts-ignore
import sanityClient from "picosanity/lib/browser";
export const client = sanityClient({
  projectId: "90sffhgh",
  dataset: "production",
  apiVersion: "2022-02-20", // use current UTC date - see "specifying API version"!
  token:
    "sk5ZE6klAPI5xw2qSFMpR9mMOl2AAE5fdJSc5arC7MEPLAq120yMDGwGTq4qD5qcwnXWNb0YM7oNW92YhLEqHnFYIFtCmGuIc5iBcVA26tfEJzVSS5tsJYL5JJjANwzkxmxhGd0wB9BzrIYWY0qDKjzR5XThLkBAwoOXV4GvKTYC4hcWPObU", // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
});
