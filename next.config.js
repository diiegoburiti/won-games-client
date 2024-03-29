// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['localhost', 'res.cloudinary.com']
  },
  future: {
    webpack5: false
  },
  env: {
    graphqlUrl: process.env.GRAPHQL_URL,
    publiclUrl: process.env.NEXT_PUBLIC_API_URL
  }
})
