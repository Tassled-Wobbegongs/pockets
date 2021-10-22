import React, { Component} from 'react';
import { Doughnut } from 'react-chartjs-2';

function PieChart(props){

  // this.state = {
  //   labels: ['Housing/Rent', 'Utilities', 'Gas', 'Groceries', 'Dining Out', 'Drinks', 'Entertainment', 'Savings', 'Other'],
  //   datasets: [
  //     {
  //       label: 'Rainfall',
  //       backgroundColor: [
  //         '#646FA9', //Housing
  //         '#49A9B4', //Utilities
  //         '#6BCD69', //Gas
  //         '#DBDCB8', //Groceries
  //         '#CBA18C', //Dining Out
  //         '#C4737C', //Drinks
  //         '#AA8D90', //Entertainment
  //         '#735558', //Savings
  //         '#787D96', //Other
  //       ],
  //       hoverBackgroundColor: [
  //         '#454E7D', //Housing
  //         '#357A81', //Utilities
  //         '#39A738', //Gas
  //         '#B3B66A', //Groceries
  //         '#A86B4C', //Dining Out
  //         '#9D424C', //Drinks
  //         '#805E62', //Entertainment
  //         '#523C3F', //Savings
  //         '#54586D', //Other
  //       ],
  //       data: [11, 11, 11, 11, 11, 11, 11, 11, 11],
  //     }
  //   ]
  // };


  const transactions = props.transactions;
  const cache = {};

  for (let i = 0; i < transactions.length; i++){
    if (!cache[transactions[i].category]) cache[transactions[i].category] = transactions[i].amount;
    else cache[transactions[i].category] += transactions[i].amount;
  }


  const obj ={'Housing/Rent': 0, 'Utilities': 0, 'Gas': 0, 'Groceries': 0, 'Dining Out': 0,'Drinks': 0,  'Entertainment': 0, 'Savings': 0, 'Other': 0, };
  const total = props.total;
  for (const property in cache) {
    obj[property] = (cache[property]/total)*100;
  };


  const pieData = {
    labels: ['Housing/Rent', 'Utilities', 'Gas', 'Groceries', 'Dining Out', 'Drinks', 'Entertainment', 'Savings', 'Other'],
    datasets: [{
      data: [obj['Housing/Rent'], obj['Utilities'], obj['Gas'], obj['Groceries'], obj['Dining Out'], obj['Drinks'], obj['Entertainment'], obj['Savings'], obj['Other']],
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
    }]
  };
          

  // componentDidMount() {
  //   this.getData();
  // }


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
          var text = "",
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
        data={pieData}
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

export default PieChart;