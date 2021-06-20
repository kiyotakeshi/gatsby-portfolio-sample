import * as React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>My First Gatsby</title>
                <meta name="description" content="My First Gatsby"></meta>
            </Helmet>
            <p>My Profile</p>
        </>
    );
};

export default AboutPage;
