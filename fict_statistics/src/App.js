import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
  VerticalGridLines,
  HorizontalGridLines, 
  DiscreteColorLegend,
  LineSeries, 
  XYPlot, 
  XAxis, 
  YAxis,
  RadarChart
} from 'react-vis';


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}*/

export default class App extends React.Component {
  render() {
    const mydata = {
  data: [{
    neatExplosions: 7,
    wow: 10,
    dog: 8,
    sickMoves: 9,
    nice: 7
  }],
  domains: [
    {name: 'nice', domain: [0, 100]},
    {name: 'explosions', domain: [6.9, 7.1], getValue: d => d.neatExplosions},
    {name: 'wow', domain: [0, 11]},
    {name: 'sickMoves', domain: [0, 20]}
  ],
  height: 300,
  width: 400
};
    return (
      <div className="App">
        <header className="App-header">
          <ul class="navigation">
            <li class="item"><div>item1</div></li>
            <li class="item"><div>item2</div></li>
            <li class="item"><div>item3</div></li>
            <li class="item"><div>item4</div></li>
          </ul> 
        </header>
        <div>
          <XYPlot
            className="barSeries"
            xType="ordinal"
            stackBy="y"
            width={600}
            height={400}
          >
            <XAxis />
            <YAxis />
            <VerticalBarSeries
              barWidth="0.5"
              color="#a4b9aa"
              stroke="grey"
              data={[
                {x: 'Z', y: 10},
                {x: 'A', y: 5},
                {x: 'L', y: 15},
                {x: 'U', y: 20},
                {x: 'P', y: 15},
                {x: 'a', y: 20}
              ]}
            />
          </XYPlot> 
          <XYPlot
            className="barSeries"
            xType="ordinal"
            stackBy="y"
            width={600}
            height={400}
          >
          <HorizontalGridLines/>
          <VerticalGridLines/>
          <XAxis />
          <YAxis />
          <RadarChart data={mydata} style={{
            axes: {
              line: {},
              ticks: {},
              text: {}
            },
            labels: {
              fontSize: 10
            },
            polygons: {
              strokeWidth: 0.5,
              strokeOpacity: 1,
              fillOpacity: 0.1
            }
          }}/>     
          </XYPlot> 
        </div>
      </div>
    );
  }
}
