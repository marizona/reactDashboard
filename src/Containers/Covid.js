import React, { Component } from "react";
import axios from "axios";
import CovidTracker from "../Components/CovidTracker/CovidTracker";
import Draggable from "react-draggable";

class Covid extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    axios
      .get('https://api.covidtracking.com/v1/us/daily.json')
      .then((res) => {
        const results = res.data.slice(0, 1);
        const updatedResults = results.map((result) => {
          return {
            ...result,
          };
        });
        this.setState({ results: updatedResults });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const results = this.state.results.map((result) => {
      return (
      
        <CovidTracker
          confirmed={result.positive}
          recovered={result.recovered}
          deaths={result.death}
          key={result.date}
          deathIncrease={result.deathIncrease}
        />
        
      );
    });

    return (
      <div>{ results }</div>
    );
  }
}

export default Covid;
