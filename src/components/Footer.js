import * as React from 'react'

import logo from '../images/wangsi.png'

export const Footer = () => (
  <footer>
    <p>
      Social Media: &nbsp;
      <a href="https://www.linkedin.com/in/findcongwang" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
      <a href="https://www.facebook.com/findcongwang" target="_blank" rel="noopener noreferrer">
        Facebook
      </a>
      <a href="https://twitter.com/findcongwang" target="_blank" rel="noopener noreferrer">
        Twitter
      </a>
      <a href="https://www.instagram.com/findcongwang" target="_blank" rel="noopener noreferrer">
        Instagram
      </a>
      <br />
      Francis C. Wang Ltd. All Rights Reserved. 2022.
      <br />
      <img className="footer-logo" src={logo} alt="logo" />
    </p>
  </footer>
)
