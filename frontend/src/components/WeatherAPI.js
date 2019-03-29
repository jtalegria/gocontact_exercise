import React, { Component } from 'react'

import Graph from '../components/Graph';
import Loader from '../components/Loader';
import Table from "../components/Table"
import CenteredDiv from '../styles/CenteredDiv';

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
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    results: data
                })
            })
    }
    

    render() {
        const {city1, city2, city3} = this.props
        const {loading, results} = this.state
        const json_string = JSON.stringify(results)

        if (loading){
            return(<CenteredDiv><Loader /></CenteredDiv>)
        }

        return (
            <div>
                {json_string === `{}` || json_string === `{"error":"BAD REQUEST"}`
                    ? <CenteredDiv><p>Try again!</p></CenteredDiv>
                    : <div>
                        <CenteredDiv><h3>Results</h3></CenteredDiv>
                        <div>
                            <CenteredDiv>
                                <div><Graph results={results} city1={city1} city2={city2} city3={city3} /></div>
                                <div><Table results={results} city1={city1} city2={city2} city3={city3} /></div>
                            </CenteredDiv>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default WeatherAPI