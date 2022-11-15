// step 1: import
import React, { useLayoutEffect } from "react"
import { Layout } from "../components/layout"

// step 2: define component
const Configurator = () => {
  return (
    <Layout>
      <iframe
        src="https://mint.startsomething.sg"
        width="100%"
        height="1000"
      ></iframe>
    </Layout>
  )
}

// step 3: export
export default Configurator
