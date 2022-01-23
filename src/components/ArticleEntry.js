// ArticleEntry.js file

import * as React from 'react'
import { PrismicLink } from '@prismicio/react'

export const ArticleEntry = ({
  title,
  url,
  tags,
  datetime,
}) => (
  <section className="article-entry">
    <PrismicLink href={url} className="article-link">
      {title}
    </PrismicLink>
    <div className="article-tags">
      Tags:
      {tags.map((tag) =>
        <span className="tag">{tag.tag.uid}</span>
      )}
      <span className="datetime">Edited: {datetime}</span>
    </div>
  </section>
)
