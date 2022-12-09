// step 1: import
import React, { useLayoutEffect } from "react"
import { Layout } from "../components/layout"

// step 2: define component
const Configurator = () => {
  return (
    <Layout>
      <div className="d-none d-lg-block">
        <iframe
          src="https://configurator.m-interior.co"
          width="100%"
          height="1000"
        ></iframe>
      </div>
      <div id="content_container" className="d-md-block d-lg-none">
        <div className="container pb-5">
          <h2 className="pb-4 text-uppercase">Your device is too small</h2>
          <p>
            This page does not work on mobile or tablet. Please use a laptop /
            desktop to access this page. Thank you.
          </p>
        </div>
      </div>
    </Layout>
  )
}

// step 3: export
export default Configurator
