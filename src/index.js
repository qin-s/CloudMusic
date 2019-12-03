import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'lib-flexible';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux"
import store from "./store"
import axios from "axios"
import tools from "./filters"
// axios.interceptors.request.use(config=>{
//     console.log(config);
//     config.url += (config.url.includes("?")?"&":"?")+"t="+Date.now();
// })
React.Component.prototype.$tools = tools;
React.Component.prototype.$axios = axios;
ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));

