import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

export default class Graph extends Component {
    constructor(props) {
        super()
    }
    render() {
        const {city1, city2, city3, results} = this.props

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
}