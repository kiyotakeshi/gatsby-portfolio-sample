import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as styles from './about.module.css';
import Layout from '../components/Layout';

const AboutPage = () => {
    return (
        <>
            <Layout>
                <Helmet>
                    <title>Gatsby Portfolio Sample</title>
                    <meta
                        name="description"
                        content="Gatsby Portfolio Sample"
                    />
                </Helmet>
                <h2 className={styles.name}>ponkan1219</h2>
                <p className={styles.text}>My Profile</p>
            </Layout>
        </>
    );
};

export default AboutPage;
