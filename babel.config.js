module.exports = api => {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            node: true
          }
        }
      ]
    ]
  }
}
