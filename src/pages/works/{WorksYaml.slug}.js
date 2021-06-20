import * as React from 'react';
import { graphql } from 'gatsby';

// /works/:slug(/works/coding, /works/netfify, /works/aws) のルーティングで動作することを想定
// ファイル名のうち動的に変化する部分を Type.field 形式で記入
// Type は WorksYaml, field は slug
const WorkDetailPage = (props) => {
    return <pre>{JSON.stringify(props.data, null, 2)}</pre>;
};

export default WorkDetailPage;

// GraphQL の変数に id が渡されるため、その情報を元に Node を取得する
export const query = graphql`
    query ($id: String!) {
        worksYaml(id: { eq: $id }) {
            slug
            title
            description
            imageUrl
            roles
        }
    }
`;
