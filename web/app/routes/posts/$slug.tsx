import { useLoaderData } from "remix";
import { client } from "~/services/cms";
import { PortableText } from '@portabletext/react'
import Layout from "~/components/layout";

export const loader = async ({ params } : {params : any}) => {
    const post = await client.fetch(`
        *[_type == 'post' && slug.current == 'a-re-introduction'][0]
    `)
    return post
};

export default function PostSlug() {
    const post = useLoaderData()
    return (
        <Layout>
            <PortableText
                value={post.body}
            />
        </Layout>
    );
}