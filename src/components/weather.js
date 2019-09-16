import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Weather = () => (
  <StaticQuery
    query={graphql`
      query weather {
        weatherData {
          main {
            temp
            humidity
            temp_max
            temp_min
          }
          weather {
            icon
            description
          }
        }
      }
    `}
    render={data => (
      <div style={{ display: `flex`, justifyContent: `center`, alignItems: `center`, fontFamily: `Helvetica`, height: `100px`, }}>
        <span style={{ fontSize: `30px`}}>{Math.round(data.weatherData.main.temp)}&deg;</span>
        <img src={`https://openweathermap.org/img/wn/${data.weatherData.weather[0].icon}@2x.png`} alt={`${data.weatherData.weather[0].description}`} style={{margin: 0}}></img>
        <span style={{ fontSize: `14px`}}>
          Hi: {Math.round(data.weatherData.main.temp_max)}&deg;<br/>
          Lo: {Math.round(data.weatherData.main.temp_min)}&deg;<br/>
        </span>
        {/* <span style={{ fontSize: `30px`}}>{Math.round(data.weatherData.main.humidity)}%</span> */}
      </div>
    )}
  />
)

export default Weather