import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import ShouYe from './App'

const routing = (
  <Router>
    <div>
      <Route path="/" component={ShouYe} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))