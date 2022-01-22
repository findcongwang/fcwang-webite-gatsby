// Header.js file

import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { PrismicLink } from '@prismicio/react'
import logo from '../images/wangsi.png';

export const Header = ({ isHomepage }) => {
  const queryData = useStaticQuery(graphql`
    {
      prismicNavigation {
        data {
          top_navigation {
            link {
              url
              link_type
            }
            link_label {
              text
            }
          }
        }
      }
    }
  `)

  const navigation = queryData.prismicNavigation
  const topNav = navigation.data.top_navigation

  const homepageClass = isHomepage ? 'homepage-header' : ''

  return (
    <header className={`site-header ${homepageClass}`}>
      <img className="logo-img" src={logo} width={50} alt="logo"/>
      <a href="/">
        <div className="logo-text">Francis C. Wang Ltd.</div>
      </a>
      <nav>
        <ul>
          {topNav.map((navItem, index) => {
            return (
              <li key={`link-${index}`}>
                <PrismicLink field={navItem.link}>
                  {navItem.link_label.text}
                </PrismicLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
