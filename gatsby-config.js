module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      pathPrefix: "/gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://gatsby-starter-portfolio-minimal-theme.netlify.app/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/waving-hand.png", // Path is relative to the root
          siteName: "Jyothiprakash's personal website", // Used in manifest.json
          shortName: "With JP", // Used in manifest.json
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "minimal-ui", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          // If set, the blog integration is enabled
          entityName: 'My blogs', // Defines naming of posts throughout site (e.g. title of blog post listing)
          path: '/blog', // Defines the slug for the blog listing page
          usePathPrefixForArticles: true, // Default true (i.e. path will be /blog/first-article)
        },
        environment:{
          
        }
        // googleAnalytics: {
        //     trackingId: "UA-XXXXXX-X",
        //     anonymize: true, // Default true
        //     environments: ["production", "development"] // Default ["production"]
        // }
      },
    },
  ],
};
