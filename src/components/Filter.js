import React, { Component } from 'react'

export class Filter extends Component {
    render() {
        return (
            <div>
                <header>Sorting</header>
                <input 
                        onChange={(e)=> this.props.filterGreased(e.target.checked)}
                        type='checkbox'
                        name='greased'
                />
                <label>greased</label>
                
                <input
                        onChange={(e)=> this.props.sortByName(e.target.checked)}
                        type='checkbox'
                        name='name'
                />

                    <label>name</label>
                <input
                        onChange={(e)=> this.props.sortByWeight(e.target.checked)}
                        type='checkbox'
                        name='weight'
                />
                    <label>weight</label>
            </div>
        )
    }
}

export default Filter
