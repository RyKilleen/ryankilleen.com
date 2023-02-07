
import Layout from "~/components/layout";
import { H1, H2, H3, H4, H5, H6 } from "~/components/typography";

export default function KitchenSink() {

    return (
        <Layout>
            <section>
                <H1>Typography</H1>


                <H1>Heading H1</H1>
                <H2>Heading h2</H2>
                <H3>Heading h3</H3>
                <H4>Heading h4</H4>
                <H5>Heading h5</H5>
                <H6>Heading h6</H6>

                <p>Paragraph text</p>
                <ul>
                    <li>Unordered List Item</li>
                    <li>Unordered List Item</li>
                    <li>Unordered List Item</li>
                </ul>
                <ol>
                    <li>Ordered List Item</li>
                    <li>Ordered List Item</li>
                    <li>Ordered List Item</li>
                </ol>
            </section>
        </Layout>
    );
}

