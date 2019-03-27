import React, { Component } from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';

class Table extends Component {
    constructor(props) {
        super()
    }

    render() {
        let cidade1 = this.props.city1
        let cidade2 = this.props.city2
        let cidade3 = this.props.city3
        let results = this.props.results

        const headerSortingStyle = { backgroundColor: '#b6bfbf' };

        const columns = [
            {
                dataField: 'city',
                text: 'City',
                sort: true,
                headerSortingStyle
            }, {
                dataField: 'temp',
                text: 'Temperature',
                sort: true,
                headerSortingStyle
            },
            {
                dataField: 'sunrise',
                text: 'Sunrise',
                sort: true,
                headerSortingStyle
            },
            {
                dataField: 'sunset',
                text: 'Sunset',
                sort: true,
                headerSortingStyle
            }
        ];

        const data = [
            {
                "city": cidade1,
                "temp": results[cidade1][0].weatherC,
                "sunrise": results[cidade1][0].sunrise,
                "sunset": results[cidade1][0].sunset
            },
            {
                "city": cidade2,
                "temp": results[cidade2][0].weatherC,
                "sunrise": results[cidade2][0].sunrise,
                "sunset": results[cidade2][0].sunset
            },
            {
                "city": cidade3,
                "temp": results[cidade3][0].weatherC,
                "sunrise": results[cidade3][0].sunrise,
                "sunset": results[cidade3][0].sunset
            }
        ]

        return (
            <BootstrapTable
                keyField='city'
                data={data}
                columns={columns}
                //striped
                hover
                condensed
                defaultSortDirection="asc" />
        )
    }
}

export default Table
