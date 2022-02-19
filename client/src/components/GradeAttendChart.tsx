// this component will create a scatter plot chart with attendance on the x axis and grades on the y axis.

import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';

const data = [
  { name: 'Bill', x: 100, y: 100},
  {name: 'Sally',  x: 95, y: 90 },
  { name: 'Joe',  x: 80, y: 65},
  
];

export default class GradeAttendChart extends PureComponent {


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
          <XAxis type="number" dataKey="x" name="Attendance %"  domain={[0, 100]} />
          <YAxis type="number" dataKey="y" name="Grade %"   domain={[0, 100]}/>
          <ZAxis type="category" dataKey="name" name="Name"/>

          <Tooltip cursor={{ strokeDasharray: '3 3' }}  />
          <Scatter name="A school" data={data} fill='#0088FE' />
        </ScatterChart>
      </ResponsiveContainer>
    );
  }
}
