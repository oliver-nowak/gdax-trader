import React, { Component } from 'react';
import './App.css';
import { VictoryChart, VictoryCandlestick, VictoryAxis, VictoryTheme } from 'victory';


var btcData = [{"high": 2324.98, "x": "2017-07-20T08:00:00", "open": 2315.02, "low": 2309.12, "close": 2315.55}, {"high": 2322.61, "x": "2017-07-20T07:30:00", "open": 2315, "low": 2302.05, "close": 2315.7}, {"high": 2323.39, "x": "2017-07-20T07:00:00", "open": 2318.55, "low": 2315, "close": 2315}, {"high": 2342.91, "x": "2017-07-20T06:30:00", "open": 2342.43, "low": 2316, "close": 2318.55}, {"high": 2349.22, "x": "2017-07-20T06:00:00", "open": 2341.17, "low": 2336.92, "close": 2342.42}, {"high": 2344.74, "x": "2017-07-20T05:30:00", "open": 2329.98, "low": 2329.56, "close": 2339.85}, {"high": 2329.99, "x": "2017-07-20T05:00:00", "open": 2319.51, "low": 2317.5, "close": 2329.99}, {"high": 2326.99, "x": "2017-07-20T04:30:00", "open": 2323.3, "low": 2316.5, "close": 2319.43}, {"high": 2326.98, "x": "2017-07-20T04:00:00", "open": 2320.73, "low": 2316.62, "close": 2323.79}, {"high": 2325.43, "x": "2017-07-20T03:30:00", "open": 2321.85, "low": 2316.5, "close": 2320.01}];

var Chart = React.createClass({
  render: function() {
    return  (
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 25 }}
        scale={{ x: "time" }}
        width={600}
      >
      <VictoryAxis tickFormat={(t) =>  `${new Date(t).getDate()}/${new Date(t).getMonth()}`}/>
      <VictoryAxis dependentAxis/>
      <VictoryCandlestick
        candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
        data={btcData}
      />
      </VictoryChart>
    )}
});

class App extends Component {
  render() {
    return (
      <Chart />
    );
  }
}

export default App;
