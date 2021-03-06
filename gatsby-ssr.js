import React from "react"
import { ThemeProvider, Global, css } from "@emotion/react"
import Theme from "./src/themes/theme"
import { GlobalContextProvider } from "./src/store/GlobalContext"

export const wrapRootElement = ({ element }) => {
  return (
    <GlobalContextProvider>
      <ThemeProvider theme={Theme}>
        <Global
          styles={css`
            * {
              box-sizing: border-box;
              padding: 0;
              margin: 0;
            }
            html,
            body,
            #___gatsby,
            #gatsby-focus-wrapper {
              font-size: 16px;
              height: 100%;
              font-family: "Jost*", sans-serif;
            }
          `}
        />
        {element}
      </ThemeProvider>
    </GlobalContextProvider>
  )
}
