import { useLoaderData } from "remix";
import Layout from "~/components/layout";
import { client } from "~/services/cms";

type Post = {
    title : string,
    slug: {
        current: string
    }
    categories: string[]
    publishedAt: string

}
export const loader = async () => {
    const posts : Post[] = await client.fetch(`
    *[_type == 'post'] { 
        title,
        slug,
        categories,
        publishedAt
    }
    `)
    return posts
}

export default function Blog() { 
    const data: Post[]  = useLoaderData()
    return <Layout>
        <h1>Posts</h1>
        <ul>
            {data.map(post => <li>
                <a href={`/posts/${post.slug.current}`}>{post.title}</a>
            </li>)}
            
        </ul>
    </Layout>
}