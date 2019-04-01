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
            results: {},
            tableClickLabel: ""
        }
        this.handlerLabel = this.handlerLabel.bind(this);
    }

    componentWillMount() {
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
    
    handlerLabel = cityLabel => {
        this.setState({
            tableClickIndex: cityLabel
        })
    }

    render() {
        const { city1, city2, city3 } = this.props
        const { loading, results, tableClickLabel } = this.state
        const json_string = JSON.stringify(results)
        //const {action} = this.props


        console.log(results)

        if (loading) {
            return (<CenteredDiv><Loader /></CenteredDiv>)
        }

        if (results) {
            if (results.error === "BAD REQUEST") {
                return (
                    <CenteredDiv>
                        {/*action */}
                        <p>Try again!</p>
                    </CenteredDiv>
                )
            }
            
            else {
                return (
                    <div>
                        <CenteredDiv>
                            <div id="chart"><Graph results={results} city1={city1} city2={city2} city3={city3} action={this.handlerLabel}/></div>
                            <div id="table"><Table results={results} city1={city1} city2={city2} city3={city3} cityLabel={tableClickLabel}/></div>
                        </CenteredDiv>
                    </div>
                )
            }
        }
    }
}

export default WeatherAPI