import * as React from 'react'
import { graphql } from 'gatsby'
import { SliceZone } from '@prismicio/react'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

import { components } from '../slices'

const ArticleTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicArticle.data

  return (
    <Layout>
      <Seo title={doc.document_display_name.text} imageUrl={doc.og_image && doc.og_image.url} />
      <br/>
      <SliceZone slices={doc.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query ArticleQuery($id: String) {
    prismicArticle(id: { eq: $id }) {
      _previewable
      data {
        document_display_name {
          text
        }
        og_image {
          url
        }
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...ArticleDataBodyText
          ...ArticleDataBodyQuote
          ...ArticleDataBodyFullWidthImage
          ...ArticleDataBodyImageGallery
          ...ArticleDataBodyImageHighlight
        }
      }
    }
  }
`

export default withPrismicPreview(ArticleTemplate)
