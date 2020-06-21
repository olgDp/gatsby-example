import React from "react"
import { Link } from "gatsby"

// Assets
import cs from "./styles.module.scss"

const NavBar = () => {
  return (
    <nav className={cs.navbar}>
      <ul>
        <li>
          <Link activeClassName={cs.active} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link activeClassName={cs.active} to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link activeClassName={cs.active} to="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link activeClassName={cs.active} to="/images">
            Images
          </Link>
        </li>
        <li>
          <Link activeClassName={cs.active} to="/examples">
            Examples
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
