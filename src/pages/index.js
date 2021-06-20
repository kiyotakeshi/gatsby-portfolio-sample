import * as React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

const HatebloItem = (props) => {
    const { title, link, pubDate } = props.post;
    return (
        <li>
            <a href={link}>
                <small>{pubDate}</small> {title}
            </a>
        </li>
    );
};

const IndexPage = (props) => {
    return (
        <>
            {/* JSX 内でオブジェクトを表示できないため、文字列にして表示 */}
            {/* <pre>{JSON.stringify(props.data, null, 4)}</pre> */}
            <ul>
                {props.data.allFeedHatebloIyokan.nodes.map((post) => {
                    return <HatebloItem post={post} key={post.link} />;
                })}
            </ul>
            <div>
                <p>Hello gatsby</p>
                <Link to="/about">Link to About</Link>
            </div>
        </>
    );
};

export const query = graphql`
    {
        allFeedHatebloIyokan {
            nodes {
                link
                pubDate
                title
            }
        }
    }
`;

export default IndexPage;
