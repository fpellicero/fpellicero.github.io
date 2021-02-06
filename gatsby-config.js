/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                includePaths: ["./src"],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/src/data/`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                defaultLayouts: {
                    pages: require.resolve(
                        "./src/Components/Blog/BlogDefaultLayout.tsx"
                    ),
                },
                gatsbyRemarkPlugins: ["gatsby-remark-prismjs"],
            },
        },
        "@carrotsearch/gatsby-transformer-html",
        "gatsby-transformer-json",
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-150757427-1",
            },
        },
        {
            resolve: "gatsby-plugin-layout",
            options: {
                component: require.resolve("./src/Components/Layout/index.tsx")
            }
        },
        {
            resolve: 'gatsby-plugin-i18n',
            options: {        
                langKeyDefault: 'en',
                useLangKeyLayout: true,
                prefixDefault: false,
            }
        }
    ],
}
