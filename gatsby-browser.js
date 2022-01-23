import * as React from 'react'
import { Link } from 'gatsby'
import { PrismicProvider } from '@prismicio/react'
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'

import './src/styles/reset.css'
import './src/styles/common.css'
import './src/styles/style.css'

import { linkResolver } from './src/LinkResolver'
import HomeTemplate from './src/pages/index'
import PageTemplate from './src/pages/{PrismicPage.url}'
import ArticleTemplate from './src/pages/{PrismicArticle.url}'

export const wrapRootElement = ({ element }) => (
  <PrismicProvider
    internalLinkComponent={({ href, ...props }) => (
      <Link to={href} {...props} />
    )}
  >
    <PrismicPreviewProvider
      repositoryConfigs={[
        {
          repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
          linkResolver,
          componentResolver: componentResolverFromMap({
            homepage: HomeTemplate,
            page: PageTemplate,
            article: ArticleTemplate,
          }),
        },
      ]}
    >
      {element}
    </PrismicPreviewProvider>
  </PrismicProvider>
)
