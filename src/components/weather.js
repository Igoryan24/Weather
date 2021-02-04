import React from "react";

class Weather extends React.Component {
  render(){
    return (
      <div>
        {this.props.city &&
        <div>
          <p>Location: {this.props.city}, {this.props.country}</p>
          <p>Temperature: {this.props.temp}°</p>
          <img src={this.props.icon}/>
          <p>Feels like: {this.props.feelsLike}°</p>
          <p>description: {this.props.description}</p>
          <p>Sunrise: {this.props.sunrise} PM</p>
          <p>Sunset: {this.props.sunset} AM</p>
          <p>Humidity: {this.props.humidity} %</p>
          <p>Pressure: {this.props.pressure}hPa</p>
          <p>Wind direction {this.props.windDeg}°</p>
          <p>Wind speed {this.props.windSpeed}km/h</p>
        </div>
        }
        <p>{this.props.error}</p>
      </div>
    );
  }
}

export default Weather;