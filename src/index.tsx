import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import App from "./components/App"
import * as serviceWorker from "./utils/serviceWorker"
import UserGlobalStore from "./store/UserGlobalStore";


// Create Context
const userStore = new UserGlobalStore()
export const Context = React.createContext({user: userStore})

// Create Root
const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)

// Render EntryPoint
root.render(
  <Context.Provider value={{user: userStore}}>
    <ColorModeScript />
    <App />
  </Context.Provider>
)

serviceWorker.register()
