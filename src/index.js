import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import ShouYe from './App'
import PageDemo from './BraftEditor'

const routing = (
  <Router>
    <div>
      <Route path="/" component={ShouYe} />
      <Route path="brafteditor/" component={PageDemo} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))