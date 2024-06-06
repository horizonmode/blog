const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/__e2e-tests__/'],
}

module.exports = async () => ({
  ...(await createJestConfig(customJestConfig)()),
  transformIgnorePatterns: [
    'node_modules/(?!(github-slugger|@contentlayer2|contentlayer2|rehype-raw|hast-util-raw|unist-util-position|unist-util-visit|unist-util-visit-parents|unist-util-is|hast-util-from-parse5|hastscript|property-information|hast-util-parse-selector|space-separated-tokens|comma-separated-tokens|vfile-location|web-namespaces|hast-util-to-parse5|zwitch|html-void-elements|pliny)/)',
  ],
})
