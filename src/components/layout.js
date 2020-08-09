import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isMainPage = location.pathname !== rootPath

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      {isMainPage && (
        <header>
          <h3
            style={{
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
              }}
              to={`/`}
            >
              {'Home'}
            </Link>
          </h3>
        </header>
      )}
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
