import { useLoaderData } from "remix";
import { client } from "~/services/cms";
import { PortableText } from "@portabletext/react";
import Layout from "~/components/layout";
import styles from "~/assets/styles/article.css";
import {
  SanityImageObject,
  SanityAsset,
} from "@sanity/image-url/lib/types/types";

type Slug = {
  current: string;
};
type Category = {
  slug: Slug;
  title: string;
  description: string;
};
export type Post = {
  publishedAt: string;
  title: string;
  body: any; // The underlying style for PortableText 🤷🏻‍♂️
  slug: Slug;
  mainImage: SanityImageObject & {
    asset: SanityAsset;
  };
  _updatedAt: string;
  categories: Category[];
};

export const loader = async ({ params }: { params: { slug: string } }) => {
  const post = await client.fetch(`
        *[_type == 'post' && slug.current == '${params.slug}'][0] {
          ...,
          mainImage {
            ...,
            asset->
          }
        }
    `);
  return post as Post;
};

export default function PostSlug() {
  const post: Post = useLoaderData();
  const { publishedAt, title, body, mainImage } = post;
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const publishDateAsText = new Intl.DateTimeFormat([], options).format(
    new Date(publishedAt)
  );

  return (
    <Layout>
      <article>
        <h1 className="small">{title}</h1>
        <div className="published-at">
          Published <time dateTime={publishedAt}>{publishDateAsText}</time>
        </div>
        {/* <img
          src={`${mainImage.asset?.url}?auto=format` ?? ""}
          width="1024"
          style={{ aspectRatio: "16/9" }}
        /> */}
        <PortableText value={body} />
      </article>
    </Layout>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
