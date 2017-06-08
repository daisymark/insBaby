import React from 'react'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="header">Seconds Elapsed: {this.state.secondsElapsed}
        <img src={`${require('../../../assets/laog.jpg')}`} />
      </div>
    );
  }
}
