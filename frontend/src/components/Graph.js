import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

export default class Graph extends Component {
    constructor(props) {
        super()
    }

    // clickFunction(e) {
    //     return (
    //         alert(
    //             JSON.stringify(e)
    //         )
    //     )
    // }

    update = (index) => {
        this.props.action(index);
      };

    render() {
        const { city1, city2, city3, results } = this.props

        let data = {
            labels: [city1, city2, city3],
            datasets:
                [
                    {
                        backgroundColor: 'rgba(178,178,178, 0.6)',
                        borderColor: '#6a6a6a',
                        borderWidth: 1,
                        hoverBackgroundColor: '#8e8e8e',
                        hoverBorderColor: '#6a6a6a',
                        data: [results[city1][0].weatherC, results[city2][0].weatherC, results[city3][0].weatherC]
                    }
                ]
        };

        return (
            <div>
                <Bar ref="chart"
                    data={data}
                    width={500}
                    height={250}
                    redraw={true}
                    options={{
                        plugins: {
                            datalabels: {
                                display: true,
                                color: 'black'
                            }
                        },
                        responsive: false, maintainAspectRatio: true,
                        tooltips: { enabled: false },
                        hover: { label: null },
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Temperature (ºC)'
                                },
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                        onClick: function (evt) {
                            var activePoints = this.getElementsAtEvent(evt);
                            if (activePoints[0]) {
                                var idx = activePoints[0]['_index'];
                                var chartData = activePoints[0]['_chart'].config.data;
                                var label = chartData.labels[idx];
                                console.log("GRAPH " + label)
                                this.update(idx)
                            }
                        }
                    }}

                />
            </div >
        );
    }
}