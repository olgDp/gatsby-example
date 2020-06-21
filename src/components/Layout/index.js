import React from "react"
import NavBar from "../NavBar"
import Footer from "../Footer"

// Assets
import cs from "./styles.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={cs.layout}>
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
