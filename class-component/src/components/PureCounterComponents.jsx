import React, { PureComponent } from 'react'

export default class PureCounterComponents extends PureComponent {
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
            <h2>Pure Component</h2>
            <p>{this.state.count}</p>
            <button onClick={this.flagBtn}>Set Toggle</button>
            <button onClick={()=> {this.increment(); console.log("Pure Component")}}>
              Counter
            </button>
          </div>
        );
      }
    }
