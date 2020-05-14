import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import BasicDemo from './BraftEditor'
import MyNews from './MyNews'
import MyLogin from './MyLogin'
import MyLanMu from './MyLanMu'
import MySearch from "./MySearch";
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/houtai" component={BasicDemo} />
      <Route exact path="/login" component={MyLogin} />
      <Route exact path="/mynews" component={MyNews} />
      <Route exact path="/my_lan_mu" component={MyLanMu} />
      <Route exact path="/my_search" component={MySearch} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))