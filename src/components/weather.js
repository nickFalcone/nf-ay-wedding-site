import React, { Component } from "react"
import axios from "axios"

class Weather extends Component {
  state = {
    w: {
      temp: "",
      hi: "",
      lo: "",
      icon: "01d",
      desc: "",
      // humidity: "",
    },
  }

  componentDidMount() {
    this.fetchWeatherData()
  }

  render() {
    const { temp, hi, lo, icon, desc } = this.state.w
    return (
      <figure
        style={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          fontFamily: `Helvetica`,
          height: `100px`,
        }}
      >
        <span style={{ fontSize: `20px`, marginRight: `25px`, fontFamily: `Dancing Script`, lineHeight: `16px` }}>Current<br/> forecast</span>
        <span style={{ fontSize: `30px` }}>{`${Math.round(temp)}`}&deg;</span>
        <img
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={`${desc}`}
          style={{ margin: 0 }}
          height='100px'
          width='100px'
        ></img>
        <span style={{ fontSize: `14px` }}>
          Hi: {`${Math.round(hi)}`}&deg;
          <br />
          Lo: {`${Math.round(lo)}`}&deg;
          <br />
        </span>
      </figure>
    )
  }

  fetchWeatherData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?id=4460243&APPID=11e497791d0c99b5ce591bf0ad62a9fe&units=imperial`
      )
      .then(response => {
        const temp = response.data.main.temp
        const hi = response.data.main.temp_max
        const lo = response.data.main.temp_min
        const humidity = response.data.main.humidity
        const icon = response.data.weather[0].icon
        const desc = response.data.weather[0].description
        this.setState({
          w: {
            ...this.state.w,
            temp,
            hi,
            lo,
            icon,
            desc,
            humidity,
          },
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default Weather
