import React from 'react'
import ReactDOM from 'react-dom'
import Header from './component/header/index.js'
import '../css/index.scss'

class Page extends React.Component {
  render() {
    return <Header />
  } 
}

ReactDOM.render(<Page />, document.getElementById('app'));