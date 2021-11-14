import React from 'react';
import WeatherCard from "./components/WeatherCard";
import { TextField } from '@material-ui/core';
import "./assets/css/App.css";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      city: 'Bandung',
      forecast: {
        main: ' ',
        description: ' ',
        temp_min: 0,
        temp_max: 0
      }

    }

    this.handleCity = this.handleCity.bind(this);

  }
  
  async componentDidMount(){
    this.handleChange();
  }

  async handleChange(){
    let city = this.state.city;
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=24646f5e7d8b274514ab867de6398f31&units=metric';
    fetch(url).then((response) => response.json()).then((responseJson) => {
      console.log(responseJson);
        this.setState({
            forecast: {
                name: responseJson.name,
                main: responseJson.weather[0].main,
                description: responseJson.weather[0].description,
                temp_min: responseJson.main.temp_min,
                temp_max: responseJson.main.temp_max,
                icon: responseJson.weather[0].icon
            }
        });
    });
  }

  handleCity(selectedCity){
    this.setState({
      city: selectedCity
    });
  }

  render(){
    return(
      <div className="App">
        <div>
          <TextField
            style={{backgroundColor: 'white', borderRadius: 4}}
            id="standard-basic"
            label="Masukkan kota..."
            variant="outlined"
            onChange={(event) => {this.handleCity(event.target.value)}}
            onKeyPress={(event) => {
              if(event.key === 'Enter'){
                this.handleChange()
              }
            }}
          />
        </div>

        <WeatherCard
          dt={1602104400 * 1000}
          temp_min={this.state.forecast.temp_min}
          temp_max={this.state.forecast.temp_max}
          main={this.state.forecast.main}
          icon={this.state.forecast.icon}
          name={this.state.forecast.name}
        />
      </div>
    );
  }
}

export default App;
