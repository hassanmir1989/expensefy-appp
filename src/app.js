import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from "./store/configureStore"
import "normalize.css/normalize.css"
import AppRouter from './routers/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.scss'

const store = configureStore()


const jsx = (
    <Provider store={store}>
            <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById("works"))


