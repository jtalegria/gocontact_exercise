import React, { Component } from 'react';
import './App.css';
import WeatherAPI from "./components/WeatherAPI"

class App extends Component {
  constructor() {
    super()
    this.state = {
      city1: "",
      city2: "",
      city3: "",
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.state.submitted === true) {
      this.setState({ submitted: !this.state.submitted })
      // this.setState({ submitted: !this.state.submitted })
    }
    else {
      this.setState({
        submitted: true
      })
    }
  }

  render() {
    return (
      <main>
        <form>
          <input name="city1"
            value={this.setState.city1}
            onChange={this.handleChange}
            placeholder="Weather City1" />
          <br />

          <input name="city2"
            value={this.setState.city2}
            onChange={this.handleChange}
            placeholder="Weather City2" />
          <br />

          <input name="city3"
            value={this.setState.city3}
            onChange={this.handleChange}
            placeholder="Weather City3" />
          <br />
          <button onClick={(e) => this.handleSubmit(e)}>Send</button>
        </form>

        {this.state.submitted ? <WeatherAPI city1={this.state.city1} city2={this.state.city2}  city3={this.state.city3}/> : null}


      </main >
    )
  }
}

export default App;
