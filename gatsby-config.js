module.exports = {
    siteMetadata: {
        title: 'gatsby-porfolio-sample',
        description: 'hello gatsby',
    },
    // GraphiQL という GraphQL の IDE が用意されており、
    // Gatsby の開発サーバを起動すると使用できる
    // ビルド時に GraphQL で取得したデータも含めて静的化するため本番環境では GraphQL サーバは不要
    plugins: [
        {
            resolve: `gatsby-source-rss-feed`,
            options: {
                url: `https://ponkan1219.hateblo.jp/rss`,
                name: `HatebloIyokan`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'works',
                path: `${__dirname}/src/works.yaml`,
            },
        },
        // options を指定しない
        'gatsby-transformer-yaml',
        'gatsby-plugin-react-helmet',
    ],
};
