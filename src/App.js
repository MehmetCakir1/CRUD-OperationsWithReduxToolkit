import React from 'react'
import AppRouter from './router/AppRouter'
import store from "./app/store"
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
       <AppRouter/>
    </Provider>
   
    )
}

export default App