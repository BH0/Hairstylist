import React, { Component } from 'react'; 
import { hot } from 'react-hot-loader'; 

import Nav from "Components/Nav"; 

import Landing from "Components/Landing"; 

import ParaImg from "Components/ParaImg"; 
import Section from "Components/Section"; 

import ContactForm from "Components/ContactForm"; 

import Charts from "Components/Charts"; 

import './app.css'; 

class App extends Component { 
  constructor() { 
    super(); 
    
    // the chartData is here because using setState [inside getChartData method] did not work 
    this.state = { 
        chartData: {  
        labels: ["hairstyle1", "hairstyle2", "hairstyle3", "hairstyle4"], 
        datasets: [
          { 
            label: "Hair Styles", 
            data: [
              102, 
              325, 
              432, 
              43
            ], 
            backgroundColor: [
              "red", "green", "blue", "yellow" 
            ]
          }
        ] 
      } 
    }  
  } 
  
  getChartData() { // this.setState does not work 
    this.setState({ 
      chartData: {  
        labels: ["hairstyle1", "hairstyle2", "hairstyle3", "hairstyle4"], 
        datasets: [
          { 
            label: "Hair Styles", 
            data: [
              102, 
              325, 
              432, 
              43
            ], 
            backgroundColor: [
              "red", "green", "blue", "yellow" 
            ]
          }
        ] 
      } 
    })
  } 

  componentDidMount() {  
    this.getChartData(); 
  }
  render () { 
    return ( 
      <div className="App"> 
          <Nav /> 
          <scroll-container> {/* Not sure if I should had multiple scroll-containers */}
              <scroll-page id="top"> 
              <Landing /> 
            </scroll-page> 
          {/* </scroll-container> */}  
          <ParaImg className="pimg2" 
            trans={true} 
            text="image one" 
            url="https://images.pexels.com/photos/594365/pexels-photo-594365.jpeg?auto=compress&cs=tinysrgb" 
          /> 
          <Section 
            heading="Section One" 
            isLight={true}
            paragraph="hsadisainsdaoinsdaksknksndskonsdkdnskoomnmsdknsdksndksdnsdklandskmsaklnksankodsknsdindsksdnksdndskdnskldnkldsl" 
          /> 
          <ParaImg className="pimg2"
              isTrans={true} 
              text="image two" 
              url="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb" 
          /> 
          <Section 
            heading="Section Two" 
            isLight={false} 
            paragraph="hsadisainsdaoinsdaksknksndskonsdkdnskoomnmsdknsdksndksdnsdklandskmsaklnksankodsknsdindsksdnksdndskd" 
          /> 
          <ParaImg className="pimg2" 
              isTrans={false}
              text="image three" url="https://images.pexels.com/photos/973401/pexels-photo-973401.jpeg?auto=compress&cs=tinysrgb" 
          /> 
          <Section 
            heading="Section Three" 
            isLight={true}
            paragraph="hsadisainsdaoinsdaksknksndskonsdkdnskoomnmsdknsdksndksdnsdklandskmsaklnksankodsknsdindsksdnksdndskdnskldnkldsl" 
          /> 
          {/* <scroll-container> */} 
            <scroll-page id="stats-section"> 
              <Charts 
                  chartData={ this.state.chartData} 
                  timespan={" March - April "} 
                  legendPosition={"right"} 
                  displayLegend={true}
                /> 
            </scroll-page> 
          {/* </scroll-container> 
          <scroll-container> */} 
              <scroll-page id="contact-section"> 
                <ContactForm /> 
              </scroll-page> 
          </scroll-container> 
        </div> 
    )
  }
}

export default hot(module)(App)
