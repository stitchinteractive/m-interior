import { graphql, useStaticQuery, Link } from "gatsby"
import * as React from "react"
import slugify from "@sindresorhus/slugify"
import { navStyle, navLink, activeLink } from "./navigation.module.css"

export function Navigation({ className }) {
  const {
    allShopifyProduct: { productTypes },
  } = useStaticQuery(graphql`
    query {
      allShopifyProduct {
        productTypes: distinct(field: productType)
      }
    }
  `)

  return (
    <nav className={[navStyle, className].join(" ")}>
      <Link
        key="All"
        className={navLink}
        to="/products/"
        activeClassName={activeLink}
      >
        Shop
      </Link>
      <Link
        key="All"
        className={navLink}
        to="/about-us/"
        activeClassName={activeLink}
      >
        About Us
      </Link>
      <Link
        key="All"
        className={navLink}
        to="/lookbook/"
        activeClassName={activeLink}
      >
        Lookbook
      </Link>
      <Link
        key="All"
        className={navLink}
        to="/interior-design/"
        activeClassName={activeLink}
      >
        Interior Design
      </Link>
      <Link
        key="All"
        className={navLink}
        to="/membership/"
        activeClassName={activeLink}
      >
        Membership
      </Link>
      <Link
        key="All"
        className={navLink}
        to="/blog/"
        activeClassName={activeLink}
      >
        Blog
      </Link>
    </nav>
  )
}
