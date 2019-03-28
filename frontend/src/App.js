import React, { Component } from 'react';
//import './App.css';
import WeatherAPI from "./components/WeatherAPI"
import StyledForm from "../src/styles/Form"

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
        <StyledForm>
          <ul>
            <li>
              <label for="city1">City 1</label>
              <input type="text"
                name="city1"
                maxlength="100"
                value={this.setState.city1}
                onChange={this.handleChange}>
              </input>
            </li>

            <li>
              <label for="city2">City 2</label>
              <input type="text"
                name="city2"
                maxlength="100"
                value={this.setState.city1}
                onChange={this.handleChange}>
              </input>
            </li>

            <li>
              <label for="city3">City 3</label>
              <input type="text"
                name="city3"
                maxlength="100"
                value={this.setState.city1}
                onChange={this.handleChange}>
              </input>
            </li>

            <li>
              <input type="button" onClick={(e) => this.handleSubmit(e)} value="Send" />
            </li>
          </ul>
        </StyledForm>

        {this.state.submitted ? <WeatherAPI city1={this.state.city1} city2={this.state.city2} city3={this.state.city3} /> : null}

      </main >
    )
  }
}

export default App;
