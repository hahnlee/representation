const isESM = process.env.BABEL_ENV === 'ESM'
const modules = isESM ? false : 'commonjs'

module.exports = {
  presets: [
    ['@babel/env', { loose: true, modules }],
    '@babel/react',
    '@babel/typescript',
  ],
  plugins: [
    ['@babel/proposal-class-properties', { loose: false }],
    '@babel/proposal-object-rest-spread',
    ['@babel/transform-runtime', { useESModules: isESM }],
  ],
}
