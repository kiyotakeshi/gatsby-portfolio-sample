import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
    return (
        <div>
            <p>Hello gatsby</p>
            <Link to="/about">Link to About</Link>
        </div>
    );
};

export default IndexPage;
