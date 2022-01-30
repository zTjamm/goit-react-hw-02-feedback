import React, { Component } from 'react';
import Buttons from './Buttons';
import Counter from './Counter'

export default class Statistics extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,        
      };

    increments =(e)=>{
        const {name} = e.currentTarget;        
        this.setState((prevState) => ({                               
            [name]: prevState[name] + 1,            
        }));        
    }

  render() { 
    return <div>
        <h1>Please leave feedback</h1>
        <Buttons 
        buttons={Object.keys(this.state)}
        increments={this.increments}
        />
        <Counter 
        good={this.state.good}
        neutral={this.state.neutral}
        bad={this.state.bad}
        />
        {/* <h2>Statistics</h2>
        <span>Good:{this.state.good}</span>
        <span>Neutral:{this.state.neutral}</span>
        <span>Bad:{this.state.bad}</span> */}
    </div>;
  }
}
