import React, { Component } from 'react'

export class HogCard extends Component {

    state = {
        display: 'none',
    }

    pigImage = () => {
        let piggy = require(`../hog-imgs/${this.props.hog.name.toLowerCase().split(' ').join('_')}.jpg`)
        return piggy
    }

    detailDisplay = () =>{
        if (this.state.display ==='none'){
            this.setState({
                display: 'block'
        })}
        else {
            this.setState({
                display: 'none'
            })
        }
    }

    render() {
        console.log(this.props.hog)
        const {name, specialty, weight, highestMedalAchieved, greased} = this.props.hog
        return (
            <div className='ui eight wide column' >
                <h3>{name}</h3>
                <p style={{display: this.state.display}}>
                    Specialty: {specialty}<br/>
                    weight: {weight}<br/>
                    Highest Medal Achieved: {highestMedalAchieved}<br/>
                    Greased: {greased ? 'Yes' : 'No'}<br/>
                </p>
                <img alt={this.props.hog.name} src={this.pigImage()} height='200px' width='300px'/>
                <button onClick={this.detailDisplay}>Display Detail</button>
            </div>
        )
    }
}

export default HogCard
