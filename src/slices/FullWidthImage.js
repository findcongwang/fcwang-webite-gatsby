// FullWidthImage.js file

import * as React from 'react'
import { graphql } from 'gatsby'

export const FullWidthImage = ({ slice }) => (
  <section
    className="content-section">
    <div className="full-width-image"
      style={{
        backgroundImage: `url(${slice.primary.full_width_image.url})`,
      }}
    >
      <img
        src={slice.primary.full_width_image.url}
        alt={slice.primary.full_width_image.alt}
      />
    </div>
    <div className="full-image-desc">
      {slice.primary.full_width_image.alt}
    </div>
  </section>
)

export const query = graphql`
  fragment ArticleDataBodyFullWidthImage on PrismicArticleDataBodyFullWidthImage {
    primary {
      full_width_image {
        url
      }
    }
  }
  fragment BlogDataBodyFullWidthImage on PrismicBlogDataBodyFullWidthImage {
    primary {
      full_width_image {
        url
      }
    }
  }
  fragment PageDataBodyFullWidthImage on PrismicPageDataBodyFullWidthImage {
    primary {
      full_width_image {
        url
      }
    }
  }
  fragment HomepageDataBodyFullWidthImage on PrismicHomepageDataBodyFullWidthImage {
    primary {
      full_width_image {
        url
      }
    }
  }
`
