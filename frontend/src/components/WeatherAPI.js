import React, { Component } from 'react'

import ColumnChart from '../components/ColumnChart';
import Graph from '../components/Graph';
import Loader from '../components/Loader';

class WeatherAPI extends Component {
    constructor(props) {
        super()
        this.state = {
            loading: false,
            results: {}
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch(`http://127.0.0.1:8000/weather/?weather1=${this.props.city1}&weather2=${this.props.city2}&weather3=${this.props.city3}`)
            //    fetch("http://127.0.0.1:8000/weather/?weather1=porto&weather2=aveiro&weather3=lisboa")
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                this.setState({
                    loading: false,
                    results: data
                })
            })
    }

    render() {
        //let myObject = JSON.parse(JSON.stringify(this.state.results))
        let resultObject = Object.keys(this.state.results)
        //const results_parsed = JSON.parse(this.state.results)
        const city1 = this.props.city1
        const city2 = this.props.city2
        const city3 = this.props.city3
        const xx = JSON.stringify(this.state.results)
        //console.log(JSON.stringify(this.state.results))
        console.log(resultObject.hasOwnProperty('error'))

        return (
            <div>
                {this.state.loading ? <Loader /> : null}
            

                {xx === `{}` || xx === `{"error":"BAD REQUEST"}`
                    ? <p>Try again!</p>
                    : <Graph results={this.state.results} city1={city1} city2={city2} city3={city3} />}
            </div>

        )
    }
}

export default WeatherAPI