const path = require('path')

const srcPath = path.resolve(__dirname, 'src')

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(srcPath, 'pages'),
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
  ],
}
