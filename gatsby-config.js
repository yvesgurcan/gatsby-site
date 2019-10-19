module.exports = {
  siteMetadata: {
    title: "yvesgurcan.com",
    description: `Welcome to Yves's personal website.`,
    author: "@yvesgurcan",
    themes: [
      {
        name: "default",
        mediumBreakpoint: "870px",
      },
    ],
    menuLinks: [
      {
        name: "About",
        link: "#about",
      },
      {
        name: "Blog",
        link: "#blog",
      },
      {
        name: "Passionate",
        link: "#passionate",
      },
      {
        name: "Team Player",
        link: "#teamplayer",
      },
      {
        name: "Responsible",
        link: "#responsible",
      },
      {
        name: "JavaScript",
        link: "#javascript",
      },
      {
        name: "Activity",
        link: "#activity",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "white",
        theme_color: "black",
        display: "minimal-ui",
        icon: "src/images/doomguy.png",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://www.gatsbyjs.org/packages/gatsby-plugin-offline/
    "gatsby-plugin-offline",
  ],
}
