import React from 'react'
import ReactDOM from 'react-dom'
import Header from './component/header/index.js'
import '../css/index.scss'
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

class Page extends React.Component {
  render() {
    return <Header />
  } 
}

ReactDOM.render((
   <HashRouter>
      <div>
        <Route exact path="/" component={Page} />
      </div>
   </HashRouter >
), document.getElementById( 'app' ) )