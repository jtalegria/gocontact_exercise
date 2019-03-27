import React from 'react'
import LoadSpinner from '../gifs/spinner200px.gif'

const Loader = props => {
    return (
        <div>
            <img alt="Loader Icon" src={LoadSpinner} />
        </div>
    )
}

export default Loader