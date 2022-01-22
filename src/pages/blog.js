import * as React from 'react'
import { graphql } from 'gatsby'
import { SliceZone } from '@prismicio/react'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'

import { components } from '../slices'

const BlogTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicBlog.data

  return (
    <Layout>
      <Seo title={doc.document_display_name.text} />
      <SliceZone slices={doc.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery($id: String) {
    prismicBlog(id: { eq: $id }) {
      _previewable
      data {
        document_display_name {
          text
        }
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...BlogDataBodyText
          ...BlogDataBodyQuote
          ...BlogDataBodyFullWidthImage
          ...BlogDataBodyImageGallery
          ...BlogDataBodyImageHighlight
        }
      }
    }
  }
`

export default withPrismicPreview(BlogTemplate)
