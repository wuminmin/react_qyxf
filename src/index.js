import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import ShouYe from './App'
import BasicDemo from './BraftEditor'
import MyNews from './MyNews'
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={ShouYe} />
      <Route exact path="/wen_zhang" component={BasicDemo} />
      <Route exact path="/mynews" component={MyNews} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))