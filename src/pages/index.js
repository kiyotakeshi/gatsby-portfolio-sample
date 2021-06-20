import * as React from 'react';
import { graphql } from "gatsby"
import { Link } from 'gatsby';

const IndexPage = (props) => {
    return (
      <>
        {/* JSX 内でオブジェクトを表示できないため、文字列にして表示 */}
        <pre>{JSON.stringify(props.data, null, 4)}</pre>
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
`

export default IndexPage;
