import React, { Component } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

class Table extends Component {
    constructor(props) {
        super()
    }

    render() {
        const { city1, city2, city3, results } = this.props

        const columns = [
            {
                dataField: 'city',
                text: 'City',
                sort: true,
                responsive: true

            },
            {
                dataField: 'temp',
                text: 'Temperature',
                sort: true,
                responsive: true
            },
            {
                dataField: 'sunrise',
                text: 'Sunrise',
                sort: true,
                responsive: true
            },
            {
                dataField: 'sunset',
                text: 'Sunset',
                sort: true,
                responsive: true
            }
        ];

        const data = [
            {
                "city": city1,
                "temp": results[city1][0].weatherC,
                "sunrise": results[city1][0].sunrise,
                "sunset": results[city1][0].sunset
            },
            {
                "city": city2,
                "temp": results[city2][0].weatherC,
                "sunrise": results[city2][0].sunrise,
                "sunset": results[city2][0].sunset
            },
            {
                "city": city3,
                "temp": results[city3][0].weatherC,
                "sunrise": results[city3][0].sunrise,
                "sunset": results[city3][0].sunset
            }
        ]

        const defaultSorted = [{
            dataField: 'city',
            order: 'asc'
        }];

        const selectRow = {
            mode: 'checkbox',
            selected: [this.props.cityLabel],
            style: {
                backgroundColor: '#c8e6c9'
            }
        };

        console.log("TABLE " + this.props.cityLabel)

        return (
            <BootstrapTable
                bootstrap4
                keyField='city'
                data={data}
                columns={columns}
                //striped
                hover
                //condensed
                selectRow={selectRow}
                defaultSorted={defaultSorted} />
        )
    }
}

export default Table
