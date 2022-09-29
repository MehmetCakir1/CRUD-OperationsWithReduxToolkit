import React from 'react'
import AppRouter from './router/AppRouter'
import store from "./app/store"
import { Provider } from 'react-redux'
import { ToastContainer } from "react-toastify";


const App = () => {
  return (
    <Provider store={store}>
       <AppRouter/>
       <ToastContainer/>
    </Provider>
   
    )
}

export default App