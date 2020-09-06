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
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'BlogContent',
        feedOptions: {
          title: 'Grammer Blog',
          feed_url: 'https://grammer-blog.vercel.app/rss.xml',
          site_url: 'https://grammer-blog.vercel.app'
        },
        feedItemOptions: (node) => ({
          title: node.title,
          description: node.description,
          path: `https://grammer-blog.vercel.app/${node.path}`,
          author: node.author,
          date: node.date,
          timeToRead: node.timeToRead
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
  ],
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    }
  }
}
