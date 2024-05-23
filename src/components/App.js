import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderBallOrButton.bind(this)
    this.buttonClickHandler = this.buttonClickHandler.bind(this)
  };

  buttonClickHandler() {
    this.setState({
      renderBall: true
    });
    document.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.key === 'ArrowRight' || event.keyCode === 39) {
      this.setState(prevState => ({
        posi: prevState.posi + 5
      }), () => {
        this.setState({
          ballPosition: { left: `${this.state.posi}px` }
        });
      });
    }
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>
    } else {
      return <button onClick={this.buttonClickHandler} >Start</button>
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    )
  }
}


export default App;
