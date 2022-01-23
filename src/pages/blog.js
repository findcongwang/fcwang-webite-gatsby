import * as React from 'react'
import { graphql } from 'gatsby'
import { SliceZone } from '@prismicio/react'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { ArticleEntry } from '../components/ArticleEntry'

import { components } from '../slices'

const BlogTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicBlog.data
  const articles = data.allPrismicArticle.edges

  return (
    <Layout>
      <Seo title={doc.document_display_name.text} />
      <SliceZone slices={doc.body} components={components} />
      {articles.map((article) =>
        <ArticleEntry
          title={article.node.data.document_display_name.text}
          url={article.node.url}
          tags={article.node.data.tags}
          datetime={article.node.last_publication_date}
        ></ArticleEntry>)}
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
    allPrismicArticle {
      edges {
        node {
          url
          last_publication_date
          data {
            document_display_name {
              text
            }
            tags {
              tag {
                uid
              }
            }
          }
        }
      }
    }
  }
`

export default withPrismicPreview(BlogTemplate)
