module.exports = {
    images: {
      domains: ['image.tmdb.org'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'image.tmdb.org',
            port: '',
            pathname: '/t/p/original/**',
          },
        ],
      },
  }