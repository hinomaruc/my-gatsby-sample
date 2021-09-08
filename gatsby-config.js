/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
   siteMetadata: {
     title: "はじめてのGatsby Site",
     author: "hinomaruc",
     category: ["Laravel", "Vue.js", "React"],
     user: { name: "hinomaruc", email: "hinomaru@gmail.com" },
   },
   /* Your site config here */
   plugins: [
     `gatsby-transformer-sharp`,
     `gatsby-plugin-sharp`,
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `images`,
         path: `${__dirname}/src/images`,
       },
     },
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `src`,
         path: `${__dirname}/src/`,
       },
     },
     "gatsby-transformer-remark",
     `gatsby-plugin-sharp`,
     {
       resolve: `gatsby-transformer-remark`,
       options: {
         plugins: [
           `gatsby-remark-relative-images`,
           {
             resolve: `gatsby-remark-images`,
             options: {
               maxWidth: 700,
             },
           },
        ],
      },
    },
   ],
 }
