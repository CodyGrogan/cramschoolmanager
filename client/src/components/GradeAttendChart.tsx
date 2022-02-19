// this component will create a scatter plot chart with attendance on the x axis and grades on the y axis.

import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis, Label } from 'recharts';


 // format of data { name: 'Bill', attend: 100, grade: 100},


interface ScatterGrade {
  name: string;
 
  avgGrade: number;

}

interface ScatterAttendance{
    name: string,
    avgAttendance: number;
}
let defGrade: ScatterGrade = {
  name: 'unknown',
  avgGrade: 0,


}

type ScatterData = {
    grade: number,
    attend: number,
    name: string

}

type chartProps = {
  data: ScatterData[];
  
}

export default class GradeAttendChart extends PureComponent<chartProps> {


  render() {
    return (
      <ResponsiveContainer width={"100%"} height={400}>
        <ScatterChart
          
          height={400}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="attend" name="Attendance %"  domain={[0, 100]} >
             <Label value="Attendance" offset={5} position="bottom" />
          </XAxis>
          <YAxis type="number" dataKey="grade" name="Grade %"   domain={[0, 100]}>
          <Label value="Grade" offset={-26} position="left" />
            </YAxis>
          <ZAxis type="category" dataKey="name" name="Name"/>

          <Tooltip cursor={{ strokeDasharray: '3 3' }}  />
          <Scatter name="A school" data={this.props.data} fill='#0088FE' />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
