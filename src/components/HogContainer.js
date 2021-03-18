import React, { Component } from 'react'
import HogCard from './HogCard'

export class HogContainer extends Component {

    renderHogCard = (hogs) =>{
        return hogs.map( hog => <HogCard hog={hog} />)
    }

    render() {
        return (
            <div>
                <ul className = 'ui grid container'>
                    {this.renderHogCard(this.props.hogs)}
                </ul>
            </div>
        )
    }
}

export default HogContainer
