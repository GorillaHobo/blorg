import React, { createContext, useReducer } from "react"
import GlobalReducer from "./GlobalReducer"

const GlobalContext = createContext()

let defaultValues
if (typeof window.localStorage !== "undefined") {
  if (localStorage.getItem("themeColor")) {
    defaultValues = {
      themeColor: localStorage.getItem("themeColor"),
      sudebar: false,
    }
  } else {
    defaultValues = { themeColor: "light", sidebar: false }
  }
}

export const GlobalContextProvider = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(GlobalReducer, defaultValues)
  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
