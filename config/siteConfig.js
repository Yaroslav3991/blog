const config = {
  author: "Yaroslav Pereguda", // Site owner
  siteTitle: "Pereguda-blog", // Site title.
  siteTitleShort: "Pereguda-blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Pereguda-blog", // Alternative site title for SEO.
  siteLanguage: "en", // Site language.
  siteDescription:
    "A blog starter with the bare essentials needed for a Gatsby site(SEO, pagination, category etc.)", // Website description used for RSS feeds/meta description tag.
  siteLogo: "static/favicons/favicon.png", // Logo used for manifest.
  siteUrl: "https://pereguda.netlify.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "", // Tracking code ID for google analytics.
  disqusShortname: "", // Disqus shortname.
  twitterUserName: "", // twitter creator for SEO
  datePublished: "2021-01-01", // for SEO
  copyrightYear: "2021", // for SEO
  postsPerPage: 5, // posts per page used in gatsby-node.js
  // Links to social profiles you want to display in the footer.
  rrssb: [
    {
      label: "github",
      url: "https://github.com/Yaroslav3991",
      iconClassName: "fab fa-github",
    },
    {
      label: "mail",
      url: "mailto:yaroslav3991@gmail.com",
      iconClassName: "fa fa-envelope",
    },
    {
      label: "facebbok",
      url: "https://www.facebook.com/qwerty.asdfgqwe",
      iconClassName: "fab fa-facebook",
    },
    {
      label: "instagram",
      url: "https://www.instagram.com/legato3991",
      iconClassName: "fab fa-instagram",
    },
  ],
  // Links to pages you want to display in the navigation bar.
  navbarLinks: [
    {
      label: "Archives",
      url: "/archives",
      iconClassName: "fa fa-book-open",
    },
    {
      label: "Categories",
      url: "/categories",
      iconClassName: "fa fa-list-alt",
    },
    {
      label: "Tags",
      url: "/tags",
      iconClassName: "fa fa-tags",
    },
    {
      label: "About",
      url: "/about",
      iconClassName: "fa fa-address-card",
    },
  ],
};
config.copyright = `Copyright © ${config.copyrightYear}. ${config.author}`;

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
