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
     {
       resolve: `gatsby-source-filesystem`,
       options: {
         name: `src`,
         path: `${__dirname}/src/`,
       },
     },
     "gatsby-transformer-remark",
   ],
 }
