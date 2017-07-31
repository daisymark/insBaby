import React from 'react'
import ReactDOM from 'react-dom'
import Header from './component/header/index.js'
import '../css/index.scss'
import { Router, Route, hashHistory } from 'react-router';


class Page extends React.Component {
  render() {
    return <Header />
  } 
}
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
  </Router>
), document.getElementById('Page'));

