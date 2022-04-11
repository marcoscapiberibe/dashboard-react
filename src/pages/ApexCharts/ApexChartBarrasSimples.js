import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        data: [200, 330, 408, 450, 540, 580, 690, 1100, 1200, 1380]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Coréia do Sul', 'Canadá', 'Reino Unido', 'Holanda', 'Itália', 'França', 'Japão',
            'Estados Unidos', 'China', 'Alemanha'
          ],
        }
      },
    
    
    };
  }


  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart options={this.state.options} series={this.state.series} type="bar" width={580} height={290} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
