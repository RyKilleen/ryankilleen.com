import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/layout";
import { getClient, getPreviewQuery, isPreviewEnabled } from "~/services/cms";
import type { Post } from "~/routes/posts/$slug";
import styles from "~/assets/styles/posts.css";
import type { LoaderFunction } from "@remix-run/cloudflare";

type LoaderData = {
  posts: Post[];
  previewQuery?: string | null;
};
export const loader: LoaderFunction = async ({
  request,
}): Promise<LoaderData> => {
  const preview = isPreviewEnabled(request);
  const client = getClient(preview);
  const posts: Post[] = await client.fetch(`
    *[_type == 'post' ] { 
        title,
        slug,
        "categories": categories[]->,
        publishedAt
    }
    `);
  return {
    posts: [...posts],
    previewQuery: preview ? getPreviewQuery(request) : undefined,
  };
};

export default function Blog() {
  const { posts, previewQuery } = useLoaderData<LoaderData>();

  return (
    <Layout>
      <h1>Posts</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug.current}>
            {post?.slug?.current && (
              <a
                href={`/posts/${post.slug.current}${
                  previewQuery ? "?preview=" + previewQuery : ''
                }`}
              >
                {post.title}
              </a>
            )}
            <div>
              <ul className="post-categories" aria-label="post categories">
                {post.categories.map(({ slug, title }) => (
                  <li key={title}>
                    <a
                      style={{ cursor: "default" }}
                      // href={`/category/${slug.current}`}
                      className="pill post-category"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
