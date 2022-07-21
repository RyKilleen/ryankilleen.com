import { useLoaderData } from "@remix-run/react";
import Layout from "~/components/layout";
import { client } from "~/services/cms";
import type { Post } from "~/routes/posts/$slug";
import styles from "~/assets/styles/posts.css";

export const loader = async () => {
  const posts: Post[] = await client.fetch(`
    *[_type == 'post' && !(_id in path("drafts.**"))] { 
        title,
        slug,
        "categories": categories[]->,
        publishedAt
    }
    `);
  return [...posts];
};

export default function Blog() {
  const data: Post[] = useLoaderData();

  return (
    <Layout>
      <h1>Posts</h1>
      <ul className="post-list">
        {data.map((post) => (
          <li key={post.slug.current}>
            <a href={`/posts/${post?.slug?.current ?? ""}`}>{post.title}</a>
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
