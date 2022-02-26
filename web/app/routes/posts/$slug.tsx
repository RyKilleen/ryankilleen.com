import { useLoaderData } from "remix";
import { client } from "~/services/cms";
import { PortableText } from "@portabletext/react";
import Layout from "~/components/layout";
import styles from "~/assets/styles/article.css";

export const loader = async ({ params }: { params: any }) => {
  const post = await client.fetch(`
        *[_type == 'post' && slug.current == 'a-re-introduction'][0]
    `);
  return post;
};

export default function PostSlug() {
  const post = useLoaderData();
  const { publishedAt, title, body } = post;
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
        <h1>{title}</h1>
        <div className="published-at">
          Published <time dateTime={publishedAt}>{publishDateAsText}</time>
        </div>
        <PortableText value={body} />
      </article>
    </Layout>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
