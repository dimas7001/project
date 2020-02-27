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
        <div className="info">
          <div className="photo">
            <div>
              <img src="photos/default.png" alt="photo"/>
            </div>
            <p className="middleBold">зав. каф. Павлов О. А.</p>
          </div>
          <div className="statistics">
            <div>
              <h2>83.3%</h2>
              <p className="normal">опитаних вважають, що <br/>
                КПІ варто продовжити <br/>
                контракт з цим <br/>
                викладачем</p>
            </div>
            <div>
              <h2>62.7%</h2>
              <p className="normal">гарно чують викладача</p>
            </div>
            <div>
              <h2>13</h2>
              <p className="normal">кількість опитаних</p>
            </div>
          </div>
        </div>
        <div className="graphics">
          <div className="radar">

          </div>
          <div className="bar">
            <div>
              <XYPlot
                className="barSeries"
                xType="ordinal"
                stackBy="y"
                width={415}
                height={415}>
                <YAxis/>
                <VerticalBarSeries
                  barWidth="0.85"
                  color="#ffffff"
                  data={[
                    {x: '1', y: 10},
                    {x: '2', y: 30},
                    {x: '3', y: 15},
                    {x: '4', y: 45},
                    {x: '5', y: 90}
                  ]}
                />
              </XYPlot>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
