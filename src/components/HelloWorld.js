import React, { Component } from "react";
import HogContainer from './HogContainer'
import Filter from './Filter'

class HelloWorld extends Component {

  state ={
    hog: [],
    filter: {

    },
  }

  componentDidMount(){
    this.setState({
      hog: [...this.props.hogs]
    })
  }

  filterGreased = (boo) =>{
    const greasedHogs = this.state.hog.filter(hog => hog.greased)
    if(boo){
    this.setState({
      hog: greasedHogs
    })} else{
    this.setState({
      hog: [...this.props.hogs]
    })}
  }

  sortByName = (boo) =>{
    const sortedHogs = this.state.hog.sort((hogA, hogB) => hogA.name.localeCompare(hogB.name))
    if(boo){
      this.setState({
        hog: sortedHogs
      })} else{
      this.setState({
        hog: [...this.props.hogs]
      })}
  }

  sortByWeight = (boo) =>{
    const sortedHogs = this.state.hog.sort((hogA, hogB) => hogA.weight-hogB.weight)
    boo ? this.setState({hog: sortedHogs}) : this.setState({hog: [...this.props.hogs]})
  }


  render() {
    return (
      <div>
        <h1>Hello World Famous Hogs</h1>
        <Filter 
                hogs={this.state.hog} 
                filterGreased={this.filterGreased} 
                sortByName={this.sortByName} 
                sortByWeight={this.sortByWeight}
        />
        <HogContainer hogs={this.state.hog}/>
      </div>
    );
  }
}

export default HelloWorld;
