import React, {Component} from 'react'
var data = require('./data.json')
var style = require('./index.css')

class App extends Component{
  render() {
    return (
      <div className="main">
        {data.text}
      </div>
    );
  }
}

export default App