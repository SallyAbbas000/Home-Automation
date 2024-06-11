 Highcharts.chart('container', {
            chart: {
                type: 'column',
                inverted:false
            },
            plotOptions: {
                column: {
                    pointPadding: 0,
                    borderWidth: 0,
                    groupPadding: 0,
                    shadow: false
                }
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
        });
//----------------------------------------------
Highcharts.chart('container1', {
    chart: {
        type: 'column',
        inverted:true
    },
    plotOptions: {
        column: {
            pointPadding: 0,
            borderWidth: 0,
            groupPadding: 0,
            shadow: false
        }
    },
    title: {
        text: 'Fruit Consumption'
    },
    xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
        title: {
            text: 'Fruit eaten'
        }
    },
    series: [{
        name: 'Jane',
        data: [1, 0, 4]
    }, {
        name: 'John',
        data: [5, 7, 3]
    }]
});
//-------------------------------------------------------------
new Highcharts.Chart('container2',{
    chart:{ type:'line'},
    title: { text: 'BME280 Temperature' },
    series: [{
      showInLegend: true,
      data: [1,3,15,41]
    }],
    plotOptions: {
      line: { animation: false,
        dataLabels: { enabled: true}
      },
      series: { color: '#059e8a' }
    },
    xAxis: { type: 'datetime',
      dateTimeLabelFormats: { second: '%H:%M:%S' }
    },
    yAxis: {
      title: { text: 'Temperature (Celsius)' }
      //title: { text: 'Temperature (Fahrenheit)' }
    },
    credits: { enabled: false }
  });
  //------------------------------------------------------
  var chartT = new Highcharts.Chart('container2',{
    chart:{ renderTo : 'chart-temperature' },
    title: { text: 'BME280 Temperature' },
    series: [{
      showInLegend: true,
      data: [1,3,15,41,18,8]
    }],
    plotOptions: {
      line: { animation: false,
        dataLabels: { enabled: true}
      },
      series: { color: '#059e8a' }
    },
    xAxis: {  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: { text: 'Temperature (Celsius)' }
      //title: { text: 'Temperature (Fahrenheit)' }
    },
    credits: { enabled: false }
  });
  
    const ChangeX=()=>{
      let select=document.querySelector("#time");
      if(select.value=='m')
          {
            var chartT = new Highcharts.Chart('container2',{
      chart:{ renderTo : 'chart-temperature' },
      title: { text: 'BME280 Temperature' },
      series: [{
        showInLegend: true,
        data: [1,3,15,41,18,8]
      }],
      plotOptions: {
        line: { animation: false,
          dataLabels: { enabled: true}
        },
        series: { color: '#059e8a' }
      },
      xAxis: {  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      yAxis: {
        title: { text: 'Temperature (Celsius)' }
        //title: { text: 'Temperature (Fahrenheit)' }
      },
      credits: { enabled: false }
    });
          console.log("month");
          
              var xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function()
               {
                if (this.readyState == 4 && this.status == 200) 
                  {
                  var x = (new Date()).getTime(),
                      y = parseFloat(this.responseText);
                      console.log("x="+ x);
                  //console.log(this.responseText);
                  if(chartT.series[0].data.length > 40) 
                    {
                    chartT.series[0].addPoint([x, y], true, true, true);
                  } else 
                  {
                    chartT.series[0].addPoint([x, y], true, false, true);
                  }
                }
              };
              xhttp.open("GET", "/temperature", true);
              xhttp.send();
            }
          else if(select.value=='w'){
            chartT = new Highcharts.Chart('container2',{
              chart:{ renderTo : 'chart-temperature' },
              title: { text: 'BME280 Temperature' },
              series: [{
                showInLegend: true,
                data: [1,3,15,41,18,8]
              }],
              plotOptions: {
                line: { animation: false,
                  dataLabels: { enabled: true}
                },
                series: { color: '#059e8a' }
              },
              xAxis: {  categories: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche']
              },
              yAxis: {
                title: { text: 'Temperature (Celsius)' }
                //title: { text: 'Temperature (Fahrenheit)' }
              },
              credits: { enabled: false }
            });
  
          }
          else if(select.value=='h'){
            chartT = new Highcharts.Chart('contain2',{
              chart:{ renderTo : 'chart-temperature' },
              title: { text: 'BME280 Temperature' },
              series: [{
                showInLegend: true,
                data: [1,3,15,41,18,8]
              }],
              plotOptions: {
                line: { animation: false,
                  dataLabels: { enabled: true}
                },
                series: { color: '#059e8a' }
              },
              xAxis: {  type: 'datetime',
                dateTimeLabelFormats: { hour:'%H:%M' }
              },
              yAxis: {
                title: { text: 'Temperature (Celsius)' }
                //title: { text: 'Temperature (Fahrenheit)' }
              },
              credits: { enabled: false }
            });
  
          }
          }

        //-----------------------------Switch 
s=0
function Switch(){
let value=document.getElementById('value');
if (s==0)
    {
        s=1;
        value.textContent="ON";
    }
    else{
        s=0;
        value.textContent="OFF";
    }

}
//---------------------------------Slide Bar
var value
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var input = document.getElementById("input")

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
const Change=()=>{
    slider.value=input.value;
    output.innerHTML = slider.value;
}

