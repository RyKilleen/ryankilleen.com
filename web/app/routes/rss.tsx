import { LoaderFunction } from "@remix-run/cloudflare";
import { Feed } from "feed";
import { getClient } from "~/services/cms";
import { Post } from "./posts/$slug";

export const loader: LoaderFunction = async () => {
    const client = getClient();
    const posts: Post[] = await client.fetch(`
    *[_type == 'post' ] { 
        title,
        slug,
        "categories": categories[]->,
        publishedAt
    }
    `);

    const feed = new Feed({
        title: "Ryan Killeen's Personal Website",
        description: "Ryan Killeen's Personal Website",
        id: "https://ryankilleen.com",
        link: "https://ryankilleen.com",
        language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
        image: "https://ryankilleen.com/build/_assets/headshot-XP44M6NI.webp",
        copyright: "All rights reserved, Ryan Killeen",
        updated: new Date(posts[0].publishedAt), // optional, default = today
     
        author: {
            name: "Ryan Killeen",
            email: "ryan@ryankilleen.com",
            link: "https://ryankilleen.com"
        }
    });
   

    posts.forEach(post => {
        feed.addItem({
            title: post.title,
            link: `https://ryankilleen.com/${post.slug.current}`,
            date: new Date(post.publishedAt),
            author: [
                {
                    name: "Ryan Killeen",
                    email: "ryan@ryankilleen.com",
                    link: "https://ryankilleen.com"
                }
            ],
            
        });
    });

    const file = feed.rss2()
    return new Response(file, {
        headers: {
            "Cache-Control": `public, max-age=${60 * 10
                }, s-maxage=${60 * 60 * 24}`,
            "Content-Type": "application/xml",
        },
    });
}
