import * as React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import * as styles from './index.module.css';

import Layout from '../components/Layout';
import HatebloItem from '../components/HatebloItem';
import WorkItem from '../components/WorkItem';

const IndexPage = (props) => {
    const { allFeedHatebloIyokan, allWorksYaml } = props.data;

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
                <h2 className={styles.heading}>About</h2>
                <p className={styles.profile}>
                    フロント、バックエンド、インフラ(クラウド、オンプレ問わず)の経験が少しづつあります。
                    <br></br>
                    一番経験のある領域は、クラウドのアーキテクチャ選定及び、
                    Terraform による構築です。
                </p>

                <h2 className={styles.heading}>はてなブログ投稿(iyokan)</h2>
                {/* JSX 内でオブジェクトは表示できないので、文字列にして表示 */}
                {/* 2 はインデントの文字スペース数 */}
                {/* <pre>{JSON.stringify(props.data, null, 2)}</pre> */}
                {allFeedHatebloIyokan.nodes.map((post) => {
                    return <HatebloItem post={post} key={post.link} />;
                })}

                <h2 className={styles.heading}>Works</h2>
                <div className={styles.workItems}>
                    {allWorksYaml.nodes.map((work) => {
                        return <WorkItem work={work} key={work.slug} />;
                    })}
                </div>
            </Layout>
        </>
    );
};

export const query = graphql`
    query MyQuery {
        allFeedHatebloIyokan(limit: 3) {
            nodes {
                title
                link
                pubDate
            }
        }
        allWorksYaml(limit: 2) {
            nodes {
                slug
                title
                description
                imageUrl
                roles
            }
        }
    }
`;

export default IndexPage;
