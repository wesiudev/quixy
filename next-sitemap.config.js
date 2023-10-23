/** @type {import('next-sitemap').IConfig} */
const siteUrl = "https://quixy.pl";

module.exports = {
  siteUrl,
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/admin/**"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  additionalPaths: async () => {
    const paths = [];
    // Add any additional paths here
    return paths;
  },
  transform: async (config, path) => {
    const { siteUrl } = config;
    const { loc } = path;
    const url = `${siteUrl}${loc}`;
    return {
      loc: url,
      changefreq: config.changefreq,
      priority: config.priority,
    };
  },
};
