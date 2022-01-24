import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export const Seo = ({ title, description, imageUrl }) => {
  const queryData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const metaTitle = title
    ? `${title} | ${queryData.site?.siteMetadata?.title}`
    : queryData.site?.siteMetadata?.title
  const metaDescription =
    description || queryData.site?.siteMetadata?.description

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:image" content={imageUrl} />
    </Helmet>
  )
}
