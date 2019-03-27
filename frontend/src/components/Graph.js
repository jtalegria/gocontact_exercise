import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

export default class Graph extends Component {
    constructor(props) {
        super()
    }
    render() {
        let cidade1 = this.props.city1
        let cidade2 = this.props.city2
        let cidade3 = this.props.city3
        let results = this.props.results

        let data = {
            labels: [cidade1, cidade2, cidade3],
            datasets:
                [
                    {
                        backgroundColor: 'rgba(178,178,178, 0.6)',
                        borderColor: '#6a6a6a',
                        borderWidth: 1,
                        hoverBackgroundColor: '#8e8e8e',
                        hoverBorderColor: '#6a6a6a',
                        data: [results[cidade1][0].weatherC, results[cidade2][0].weatherC, results[cidade3][0].weatherC]
                    }
                ]
        };


        return (
            <div>
                //<h2>Line Example</h2>
                <Bar ref="chart"
                    data={data}
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
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}

                />
            </div >
        );
    }

    componentDidMount() {
        const { datasets } = this.refs.chart.chartInstance.data
        console.log(datasets[0].data);
    }
}