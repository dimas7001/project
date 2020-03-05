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

export default class App extends React.Component {
  render() {
    const mydata = {
      contract: 83.5,
      hear: 62.7,
      amount: 13
      };

    /*const colors = {
      contractCol: "red",
      hearCol: "red"
      };

    function choseColors() {
      if (mydata.contract >= 50) colors.contractCol = "green";
      if (mydata.hear >= 50) colors.hearCol = "green";
    }
 
    choseColors();*/

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
              <h2 /*style={{color: colors.contractCol}}*/>{mydata.contract}%</h2>
              <p className="normal">опитаних вважають, що <br/>
                КПІ варто продовжити <br/>
                контракт з цим <br/>
                викладачем</p>
            </div>
            <div>
              <h2 /*style={{color: colors.hearCol}}*/>{mydata.hear}%</h2>
              <p className="normal">гарно чують викладача</p>
            </div>
            <div>
              <h2>{mydata.amount}</h2>
              <p className="normal">кількість опитаних</p>
            </div>
          </div>
        </div>
        <div className="graphics">
          <div className="radar">
            <RadarChart 
              data={[{
                wow: 10,
                dog: 8,
                sickMoves: 9,
                nice: 7
              }]}
              domains={[
                {name: '1', domain: [0, 100]},
                {name: '2', domain: [0, 7.1]},
                {name: '3', domain: [0, 11]},
                {name: '4', domain: [0, 200]}
              ]}
              style={{
                labels: {
                  fontSize: 20
                },
                polygons: {
                  strokeWidth: 0.5,
                  strokeOpacity: 1,
                  fillOpacity: 0.1              
                }
              }}
              height={400}
              widht={400}
              className="RadarChart"
            />
          </div>
          <div className="bar">
            <div>
              <XYPlot
                className="barSeries"
                xType="ordinal"
                stackBy="y"
                width={350}
                height={340}>
                <YAxis className="YA"/>
                <VerticalBarSeries
                  barWidth="0.85"
                  color="#ffffff"
                  className="verticalBarSeries"
                  data={[
                    {x: '1', y: 10},
                    {x: '2', y: 30},
                    {x: '3', y: 15},
                    {x: '4', y: 45},
                    {x: '5', y: 90}
                  ]}
                />
              </XYPlot>
              <p className="middleBold">Загальний рівень <br/> викладання <br/> дисципліни</p>
            </div>
            <div>
              <XYPlot
                className="barSeries"
                xType="ordinal"
                stackBy="y"
                width={350}
                height={340}>
                <YAxis  className="YA"/>
                <VerticalBarSeries
                  barWidth="0.85"
                  color="#ffffff"
                  className="verticalBarSeries"
                  data={[
                    {x: '1', y: 25},
                    {x: '2', y: 50},
                    {x: '3', y: 10},
                    {x: '4', y: 60},
                    {x: '5', y: 40}
                  ]}
                />
              </XYPlot>
              <p className="middleBold">Оцінка власних <br/> знань після <br/> проходження курсу</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
