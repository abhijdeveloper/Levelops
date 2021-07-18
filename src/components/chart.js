import React, {Components} from 'react';
import {Bar, Line , Pie} from 'react-chartjs-2';
import SampleData from '../sample.json'

class Chart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chartData: {},
        }
    }

    componentDidMount() {

        var arr = [SampleData.records].map(k => k.map(d => d.assignee));
        var counts = {};
        for (var i = 0; i < arr[0].length; i++) {
        counts[arr[0][i]] = 1 + (counts[arr[0][i]] || 0);
        }
        var keys = [];
        var cos = [];
        for (var key in counts) {
        keys.push(key);
        cos.push(counts[key]);
        }
        const chartData = {
            labels: keys,
            datasets: [
                {
                    label: 'noOfTickets',
                    data: cos,
                    backgroundColor: 'blue',
                    borderWidth:1,
                    borderColor: '#777',
                    hoverBorderWidth: 3,
                    hoverBorderColor:'#000'
                }
            ]
        }
        this.setState({ chartData });
    }
    
    render(){
        return (
        <div className="chart">
        <Bar 
        data={this.state.chartData}
        />
        </div>
        )
    }
        
}

export default Chart;