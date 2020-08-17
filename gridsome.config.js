module.exports = {
  siteName: 'Grammer Blog',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: "BlogContent",
        path: 'posts/*.md'
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
