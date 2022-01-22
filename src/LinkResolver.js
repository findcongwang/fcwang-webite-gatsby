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
  return '/404'
}
