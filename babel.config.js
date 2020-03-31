module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            browsers: [
              'last 1 version',
              '> 1%',
              'ie >= 9',
              'Edge >= 12'
            ]
          }
        }
      ]
    ],
    env: {
      build: {
        ignore: [
          '**/*.spec.js',
          '__tests__'
        ]
      }
    },
    ignore: ['node_modules']
  }
}
