import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
    constructor(props) {
        super()
    }
    render() {
        let cidade1 = this.props.city1
        let cidade2 = this.props.city2
        let cidade3 = this.props.city3
        let results = JSON.parse(JSON.stringify(this.props.results))
        var results_string = JSON.stringify(this.props.results)
        
        console.log("AQUI",this.props)        

        if(results[cidade1] !== undefined){
            var options = {
                title: {
                    text: "Basic Column Chart"
                },
                theme: "light1",
    
                animationEnabled: true,
                data: [
                    {
                        // Change type to "doughnut", "line", "splineArea", etc.
                        type: "column",
                        dataPoints: [
                            { label: cidade1, y: results[cidade1][0].weatherC },
                            { label: cidade2, y: results[cidade2][0].weatherC },
                            { label: cidade3, y: results[cidade3][0].weatherC }
                        ]
                    }
                ],
            }
        }
        

        return (
            <div>
                {results[cidade1] !== undefined ? <CanvasJSChart options={options}/> : null}
                
            </div>
        );
    }
}

export default ColumnChart;