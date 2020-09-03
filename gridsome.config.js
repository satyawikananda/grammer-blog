const path = require('path')

const addStyleResource = (rule) => {
  rule
   .use('style-resource')
   .loader('style-resources-loader')
   .options({
     patterns: [
      path.resolve(__dirname, './src/assets/sass/*.sass')
     ]
   })
}

module.exports = {
  chainWebpack(config){
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']

    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type))
    })
  },
  templates: {
    Tag: '/tag/:title'
  },
  siteName: 'Grammer Blog',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: "BlogContent",
        path: 'posts/*.md',
        remark: {
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        },
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
        }
      }
    }
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    }
  }
}
