import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class PieChart extends Component {
    constructor(props){
      super(props);
      this.state = {
        labels: ['Housing', 'Utilities', 'Gas', 'Groceries', 'Dining Out', 'Drinks', 'Entertainment', 'Savings', 'Other'],
        datasets: [
          {
            label: 'Rainfall',
            backgroundColor: [
              '#646FA9', //Housing
              '#49A9B4', //Utilities
              '#6BCD69', //Gas
              '#DBDCB8', //Groceries
              '#CBA18C', //Dining Out
              '#C4737C', //Drinks
              '#AA8D90', //Entertainment
              '#735558', //Savings
              '#787D96', //Other
            ],
            hoverBackgroundColor: [
              '#454E7D', //Housing
              '#357A81', //Utilities
              '#39A738', //Gas
              '#B3B66A', //Groceries
              '#A86B4C', //Dining Out
              '#9D424C', //Drinks
              '#805E62', //Entertainment
              '#523C3F', //Savings
              '#54586D', //Other
            ],
            data: [11, 11, 11, 11, 11, 11, 11, 11, 11],
            
          }
        ]
      };
    }

    render(){
      //not sure why this works, copy pasta
      const plugins = [{
        beforeDraw: function(chart) {
         var width = chart.width,
             height = chart.height,
             ctx = chart.ctx;
             ctx.restore();
            //  var fontSize = (height / 160).toFixed(2);
            var fontSize = '50px';
             ctx.font = fontSize + "em sans-serif";
             ctx.textBaseline = "top";
             var text = "Remaining:",
             textX = Math.round((width - ctx.measureText(text).width) / 2),
             textY = height / 2;
             ctx.fillText(text, textX, textY);
             ctx.save();
        } 
      }];

      return (
        <div className = "pieChartContainer">
          <center>
          <h3>Total Spending</h3>
          <Doughnut
            data={this.state}
            options={{
              responsiveness: true,
              title:{
                display:true,
                text:'Total Spending',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              },
            }}
            plugins={plugins}
          />
          </center>
        </div>
      )
    }
}

export default PieChart;