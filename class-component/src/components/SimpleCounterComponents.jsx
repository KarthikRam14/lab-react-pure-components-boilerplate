import React, { Component } from "react";

export default class SimpleCounterComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      flag: true,
    };
  }
  
  flagBtn = () => {
      this.setState((prevFlag) => ({
          flag: !prevFlag.flag,
        }));
    };

    increment = () => {
        if(this.state.flag) {
          this.setState((prevState) => ({
            count: prevState.count+1
          }))
        }
    };
    
  render() {
    return (
      <div>
        <h2>Simple Component</h2>
        <p>{this.state.count}</p>
        <button onClick={this.flagBtn}>Set Toggle</button>
        <button onClick={()=> {this.increment(); console.log("Simple Component")}}>
          Counter
        </button>
      </div>
    );
  }
}
