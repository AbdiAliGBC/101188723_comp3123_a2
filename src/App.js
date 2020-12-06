import './App.css';
import React, {Component} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from "react-bootstrap";
export default class App extends Component{

  constructor(props){
    super(props)
    this.state={
      weather:{
        weather: [
          {
            main:undefined,
            description:undefined,
            icon:undefined
        
          }
        ],
        main:{
          temp:undefined,
          feels_like:undefined,
          temp_min:undefined,
          temp_max:undefined
        },
       name:undefined,
       sys:{
          country:undefined
       }
      }
    }
  }

  async getWeather(){
    const result= await axios.get("http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&appid=866bc132bd573ac84a53775933ab745f");
    console.log(result.data)
    this.setState({weather:result.data})
  }

  componentDidMount(){
    this.getWeather()
  }
    
  render(){
    return(
    
      <div className="card">
      <Card>
      <Card.Body className="card2" style={{backgroundColor: "lightblue"}}>
      <Card.Title style={{fontSize:"50px"}}>{this.state.weather.name}</Card.Title>
      <Card.Title className="App">{this.state.weather.sys.country}</Card.Title>
      <Card.Img className="App" src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}/>
        <Card.Text className="App">
        <p style={{fontSize:"20px"}}>{this.state.weather.weather[0].description}</p>
        <p style={{fontSize:"40px"}}>{this.state.weather.main.temp+"°c"}</p>
        <p style={{fontSize:"20px"}}>Feels Like: {this.state.weather.main.feels_like+"°c"}</p>
        <p style={{fontSize:"20px"}}> High: {this.state.weather.main.temp_max+"°c"}</p>
        <p style={{fontSize:"20px"}}> Low: {this.state.weather.main.temp_min+"°c"}</p>
        <p style={{fontSize:"15px"}}>Abdirahman Ali</p>
        <p style={{fontSize:"15px"}}>101188723</p>



        </Card.Text>
      </Card.Body>
      </Card>
      </div>
    );
  }
}