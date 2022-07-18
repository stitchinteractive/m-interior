import * as React from "react"
import { StoreProvider } from "./src/context/store-context"
import "bootstrap/dist/css/bootstrap.min.css"
import "./src/styles/reset.css"
import "./src/styles/variables.css"
import "./src/styles/global.css"

export const wrapRootElement = ({ element }) => (
  <StoreProvider>{element}</StoreProvider>
)
