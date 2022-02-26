import { useLoaderData } from "remix";
import { client } from "~/services/cms";
import { PortableText } from "@portabletext/react";
import Layout from "~/components/layout";

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
    timeZone: "EST",
    timeZoneName: "short",
    minute: "numeric",
  };
  const publishDateAsText = new Intl.DateTimeFormat([], options).format(
    new Date(publishedAt)
  );

  return (
    <Layout>
      <h1>{title}</h1>
      <div>
        Published <time dateTime={publishedAt}>{publishDateAsText}</time>
      </div>
      <PortableText value={body} />
    </Layout>
  );
}
