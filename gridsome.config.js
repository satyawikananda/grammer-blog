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
  siteName: "Grammer blog",
  siteDescription: "Sebuah situs blog yang dimiliki oleh Satya Wikananda, dimana blog ini akan membahas seputar pemrograman atau teknologi khususnya di bidang website, selain itu blog ini akan membahas hal-hal lainnya juga diluar pembahasan tadi",
  siteUrl: 'https://grammer-blog.vercel.app',
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
    {
      use: 'gridsome-plugin-nprogress',
      options: {
        color: '#E64A19',
        showSpinner: true
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Grammer blog',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        serviceWorkerPath: 'service-worker.js',
        shortName: 'Grammer blog',
        themeColor: '#E64A19',
        backgroundColor: '#f1f2f2',
        icon: './static/favicon.png',
        cachedFileTypes: 'js,json,css,png,jpg,jpeg,svg',
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: [],
        config: {
          '/posts/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/tag/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.6
          }
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
