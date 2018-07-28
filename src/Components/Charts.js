import React, {Component} from 'react';
import {Bar, Pie} from 'react-chartjs-2';

class Charts extends Component { // Also referenced as "stats"  
  constructor(props) {
    super(props);
    this.state = {
        chartData: this.props.chartData 
    }
  } 

  static defaultProps = { 
      displayTitle: true, 
      displayLegend: true 
  }

  render() {
    return (
      <div className="chart"> 
        {/* Not sure if I want these charts next to eachother */}
        <div className="left"> 
            {/* Not sure why the titles are not being displayed */}
            <Bar  
                height={80}
                data={this.state.chartData} 
                options={{
                title:{
                    display: this.props.displayTitle,
                    position: "top", 
                    text:`Popular Hair Styles ${this.props.timespan}`,
                    fontSize: 26  
                } 
            }}
            /> 
        </div> 
        <div className="right"> 
            <Pie 
                    height={80}
                    data={this.state.chartData}
                    options={{
                        title:{
                            display: this.props.displayTitle,
                            text:`Popular Hair Styles ${this.props.timespan}`,
                            fontSize: 26, 
                            position: "top" 
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
            /> 
        </div> 
      </div>
    )
  }
}

export default Charts; 
