/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Sebastian Smith Blog',
  author: 'Sebastian Smith',
  headerTitle: 'Sebastian Smith Blog',
  description:
    'A blog about Next-JS, Cloud Engineering, DevOps, Hosting on Cloudflare, Linode and Azure.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://sebsmith.net',
  siteRepo: 'https://github.com/horizonmode/blog/src',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter_card.png',
  github: 'https://github.com/horizonmode',
  linkedin: 'https://www.linkedin.com/in/sebastian-smith-85775515a/',
  locale: 'en-US',
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
}

module.exports = siteMetadata
