import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "./cms";

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
