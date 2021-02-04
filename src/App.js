import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

/*const API = "5d066958a60d315387d9492393935c19"*/

class App extends React.Component {

  state ={
    city: undefined,
    country: undefined,
    icon: undefined,
    temp: undefined,
    feelsLike: undefined,
    description: undefined,
    sunrise: undefined,
    sunset: undefined,
    humidity: undefined,
    preasure: undefined,
    windDeg: undefined,
    windSpeed: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    

    if(city) {

      const apiUrl = await
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`);
      const data = await apiUrl.json();
      console.log(data);

      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunsetDate = date.getHours() + ":" + date.getMinutes();

      let sunrise = data.sys.sunrise;
      let dateRice = new Date();
      dateRice.setTime(sunrise);
      let sunriseDate = (dateRice.getHours() - 12) + ":" + dateRice.getMinutes();

      this.setState ({
        city: data.name,
        temp: Math.round(data.main.temp),
        country: data.sys.country,
        icon: "http://openweathermap.org/img/w/" + data.weather[0]['icon'] + ".png",
        feelsLike: Math.round(data.main.feels_like),
        description: data.weather[0]['description'],
        sunset: sunsetDate,
        sunrise: sunriseDate,
        humidity: data.main['humidity'],
        pressure: data.main.pressure,
        windDeg: data.wind.deg,
        windSpeed: data.wind.speed,
        error: undefined,
      });
    } else {
      this.setState ({
        city: undefined,
        country: undefined,
        icon: undefined,
        temp: undefined,
        feelsLike: undefined,
        description: undefined,
        sunrise: undefined,
        sunset: undefined,
        humidity: undefined,
        preasure: undefined,
        windDeg: undefined,
        windSpeed: undefined,
        error: "Enter Your City",
      })
    }
  }

  render(){
    return (
      <div>
        <Info/>
        <Form weatherMethod = {this.getWeather}/>
        <Weather
          city={this.state.city}
          temp= {this.state.temp}
          country= {this.state.country}
          icon= {this.state.icon}
          feelsLike= {this.state.feelsLike}
          description= {this.state.description}
          sunrise= {this.state.sunrise}
          sunset= {this.state.sunset}
          humidity= {this.state.humidity}
          pressure= {this.state.pressure}
          windDeg= {this.state.windDeg}
          windSpeed= {this.state.windSpeed}
          error= {this.state.error}
        />
      </div>
    );
  }
}

export default App;