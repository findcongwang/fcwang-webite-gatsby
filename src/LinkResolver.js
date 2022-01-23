// LinkResolver.js file

exports.linkResolver = (doc) => {
  if (doc.uid === 'home') {
    return '/'
  }
  if (doc.uid === 'blog') {
    return '/blog'
  }
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  if (doc.type === 'article') {
    return `/blog/${doc.uid}_${doc.id}`
  }
  return '/404'
}
