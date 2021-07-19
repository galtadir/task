import React from 'react'

import ReactApexChart from "react-apexcharts";

export const Q1 = (props) => {

          

    return (



        <div>
            <h1>Q1</h1>
            <HeatMapChart input={props.input}/>
            
        </div>
    )
}

class HeatMapChart extends React.Component {
    constructor(props) {
        super(props);

        // let data = props.input.map((obj)=>{
        //     if(obj!=null && obj.value!=undefined && obj.value>0){
        //         return obj.value
        //     }
        // })

        let data = []
        for(let i=0 ;i<10000;i++){
            if(props.input[i]!=null && props.input[i].value!=undefined && props.input[i].value>0){
                data.push(props.input[i].value)
            }
        }
        this.state = {
          
            series: [{
                name: '',
                data: data
              }
            ],

            options: {
                chart: {
                    height: 350,
                    type: 'heatmap',
                },
                plotOptions: {
                    heatmap: {
                        shadeIntensity: 0.5,
                        radius: 0,
                        useFillColorAsStroke: true,
                        colorScale: {
                            ranges: [{
                                from: 0,
                                to: 24,
                                name: 'low',
                                color: '#00ff00'
                            },
                            {
                                from: 25,
                                to: 75,
                                name: 'medium',
                                color: '#ffff00'
                            },
                            {
                                from: 75,
                                to: 100,
                                name: 'high',
                                color: '#ff0000'
                            }
                            ]
                        }
                    }
                },
                dataLabels: {
                    enabled: true
                },
              title: {
                text: 'HeatMap Chart'
              },
            },
          
          
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="heatmap" height={350} />
            </div>);
    }
}
