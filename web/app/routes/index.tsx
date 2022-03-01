import { useLoaderData } from "remix";
import Layout from "~/components/layout";
import { client } from "../services/cms";
import groupBy from "lodash/groupBy";

type Interest = {
  title: string;
  url: string;
  category: string;
};

type Book = Interest & {
  author: string;
};

type FeaturedInterest = Interest | Book;
export const loader = async () => {
  const interests = await client.fetch(`
      *[featured == true && (_type == 'interest' || _type== 'book')] {
        title,
        url,
        _type == 'interest' => {  
          "category": category -> title
        },
        _type == 'book' => {  
          "author" : author -> name,
          "category" : "reading"
        }
      }
    `);
  const test = groupBy(interests, "category");
  return test;
};

const InterestLink = ({ url, title }: Partial<FeaturedInterest>) => (
  <a href={url}>{title}</a>
);

export default function Index() {
  const interests = useLoaderData();
  console.log(interests);

  return (
    <Layout>
      <section>
        <h2>About</h2>
        <div className="about-me">
          <img
            className="headshot"
            src="/images/headshot.webp"
            alt="A selfie of Ryan standing in front of an orange, textured wall"
          />
          <div>
            <p>
              Ryan enjoys working on the web, learning, teaching, and tinkering.
              Currently, he is a Senior Engineer at{" "}
              <a href="https://nerdstreet.com">Nerd Street Gamers</a>
            </p>
            <p>Always a work in progress.</p>
          </div>
        </div>
        <hr />
      </section>

      <section>
        <h2>Lately, I've been</h2>
        <div className="lately-holder">
          <div>
            <h3>Working with:</h3>
            <ul className="working">
              {interests["working with"].map((interest: FeaturedInterest) => (
                <li>
                  <InterestLink {...interest} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Dabbling in:</h3>
            <ul className="dabbling">
              {interests.experimenting.map((interest: FeaturedInterest) => (
                <li>
                  <InterestLink {...interest} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Tinkering on:</h3>
            <ul className="tinkering">
              {interests.tinkering.map((interest: FeaturedInterest) => (
                <li>
                  <InterestLink {...interest} />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Reading:</h3>
            <ul className="reading">
              {interests.reading.map((interest: FeaturedInterest) => (
                <li>
                  <InterestLink {...interest} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}
