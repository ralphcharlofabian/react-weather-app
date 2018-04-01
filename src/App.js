import React from 'react';
import Titles from './components/title';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "4d18c5b3b93c9c62ad3a17a5f8d86a5b";


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      temperature: null,
      cityName: null,
      humidity: null,
      description: null,
      error: null,
      visibility: null,
      windSpeed:null,
      pressure:null
    }
  }
  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    // const country = e.trget.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`); 
  
    const data = await api_call.json();
    if(city){
      this.setState({
        temperature: data.main.temp,
        cityName: data.name,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        visibility: data.visibility,
        windSpeed:data.wind.speed,
        pressure:data.main.pressure,
        error:null
      })
    } else {
      this.setState({
        temperature: '',
        cityName: '',
        humidity: '',
        description: '',
        visibility: '',
        windSpeed: '',
        pressure: '',
        error:'Please Enter Correct City Name'
      })
    }
    

  }
  render() {
    return(
    <div>
      <div className ='wrapper'>
        <div className ='main'>
          <div className ='container'>
            <div className='row'>
              <div className='col-xs-5 title-container'>
                  <Titles/>
              </div>
              <div  className='col-xs-7 form-container'>
              <Form getWeather={this.getWeather}/>
                <Weather 
                  temperature ={this.state.temperature}
                  cityName = {this.state.cityName}
                  humidity ={this.state.humidity}
                  description = {this.state.description}
                  visibility = {this.state.visibility}
                  pressure = {this.state.pressure}
                  windSpeed = {this.state.windSpeed}
                  error = {this.state.error}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>



      
      
    </div>
      
    );
  }
}

export default App;