import * as React from 'react'
import { graphql } from 'gatsby'
import { PrismicRichText } from '@prismicio/react'

export const ImageHighlight = ({ slice }) => (
  <section className="highlight content-section">
    <div className="highlight-left">
      <img
        src={slice.primary.featured_image.url}
        alt={slice.primary.featured_image.alt}
      />
      <div  className="image-desc">
        <PrismicRichText field={slice.primary.title.richText} />
      </div>
    </div>
    <div className="highlight-right">
      <PrismicRichText field={slice.primary.description.richText} />
    </div>
  </section>
)

export const query = graphql`
  fragment ArticleDataBodyImageHighlight on PrismicArticleDataBodyImageHighlight {
    primary {
      featured_image {
        url
        alt
      }
      title {
        richText
      }
      description {
        richText
      }
    }
  }
  fragment BlogDataBodyImageHighlight on PrismicBlogDataBodyImageHighlight {
    primary {
      featured_image {
        url
        alt
      }
      title {
        richText
      }
      description {
        richText
      }
    }
  }
  fragment PageDataBodyImageHighlight on PrismicPageDataBodyImageHighlight {
    primary {
      featured_image {
        url
        alt
      }
      title {
        richText
      }
      description {
        richText
      }
    }
  }
  fragment HomepageDataBodyImageHighlight on PrismicHomepageDataBodyImageHighlight {
    primary {
      featured_image {
        url
        alt
      }
      title {
        richText
      }
      description {
        richText
      }
    }
  }
`
