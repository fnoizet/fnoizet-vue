const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      title: 'Fabien NOIZET - Développeur web - Scrum Master',
    },
  }
})
