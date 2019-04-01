import React, { Component } from 'react';
//import './App.css';
import WeatherAPI from "./components/WeatherAPI"

import StyledForm from "../src/styles/Form"
import CenteredDiv from './styles/CenteredDiv';
import SunIcon from "./gifs/sun.png"

class App extends Component {
  constructor() {
    super()
    this.state = {
      city1: "",
      city2: "",
      city3: "",
      submitted: false,
      submittedCount: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value,
      submitted: false
    })
  }

  handleSubmit(event) {
    event.preventDefault()
      this.setState({ 
        submitted: !this.state.submitted,
        submittedCount: this.state.submittedCount + 1
      })
  }

  render() {
    return (
      <div>
        <CenteredDiv>
          <div id="left">
            <CenteredDiv><h1>Weather API UI</h1></CenteredDiv>
          </div>
          <div id="middle">
            <StyledForm>
              <ul>
                <li>
                  <label for="city1">City 1</label>
                  <input type="text"
                    name="city1"
                    value={this.setState.city1}
                    onChange={this.handleChange}>
                  </input>
                </li>

                <li>
                  <label for="city2">City 2</label>
                  <input type="text"
                    name="city2"
                    value={this.setState.city1}
                    onChange={this.handleChange}>
                  </input>
                </li>

                <li>
                  <label for="city3">City 3</label>
                  <input type="text"
                    name="city3"
                    value={this.setState.city1}
                    onChange={this.handleChange}>
                  </input>
                </li>

                <li>
                  <input type="button" onClick={(e) => this.handleSubmit(e)} value="Send" />
                </li>
              </ul>
            </StyledForm>

          </div>
          <div id="right">
            <CenteredDiv>
              <img id="sun" src={SunIcon} alt="sun" width="250" height="250" />
            </CenteredDiv>
          </div>
        </CenteredDiv>

        {this.state.submittedCount !== 0 && this.state.city1 === ""
          ? <CenteredDiv>You must provide the name of the City 1. </CenteredDiv>
          : null}

        {this.state.submittedCount !== 0 && this.state.city2 === ""
          ? <CenteredDiv>You must provide the name of the City 2. </CenteredDiv>
          : null}

        {this.state.submittedCount !== 0 && this.state.city3 === ""
          ? <CenteredDiv>You must provide the name of the City 3. </CenteredDiv>
          : null}

        {this.state.submitted && this.state.city1 !== "" && this.state.city2 !== "" && this.state.city3 !== ""
          ? <WeatherAPI city1={this.state.city1} city2={this.state.city2} city3={this.state.city3} />
          : null}
      </div>
    )
  }
}

export default App;
