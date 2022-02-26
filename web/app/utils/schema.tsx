import { BlogPosting } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";
import { Post } from "~/routes/posts/$slug";

const isPost = (data: any): data is Post => {
  return data?._type == "post";
};
export const createSchema = (data: any) => {
  if (isPost(data)) {
    return postSchema(data);
  }
};

const postSchema = (post: Post) => {
  const schemaAsHTML = jsonLdScriptProps<BlogPosting>({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.mainImage.asset.url,
    //  "genre": "search engine optimization",
    //  "keywords": "seo sales b2b",
    //  "wordcount": "1120",
    url: `https://ryankilleen.com/posts/${post.slug.current}`,
    datePublished: post.publishedAt,
    // dateCreated: "2015-09-20",
    dateModified: post._updatedAt,
    // description: "We love to do stuff to help people and stuff",
    author: {
      "@type": "Person",
      name: "Ryan Killeen",
    },
  });

  return <script {...schemaAsHTML} id="schema" />;
};
