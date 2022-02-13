// this component will take props of all grade data from a class and a student name
//one line will show class average grade and the other the selected students grade

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SchoolClass from '../classes/SchoolClass';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];




interface Grade {
    name: string;
    selectedStudentGrade: number;
    avgGrade: number;

}


type state = {
    gradeArr: Grade[];
}
let defGrade: Grade = {
    name: 'unknown',
    avgGrade: 0,
    selectedStudentGrade: 0

}
let defGradeArr: any = [defGrade];

type chartProps = {
    data: Grade[]

}


export default class StudentGradesChart extends PureComponent<chartProps, state> {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
  state = {gradeArr: defGradeArr};
  constructor(props: chartProps){
      super(props);
      console.log('in grade chart constructor');
     
      
  }
    


  render() {
    return (
      <ResponsiveContainer width={'100%'} height={300}>
        <LineChart
          width={500}
          height={300}
          data={this.props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="avgGrade" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="selectedStudentGrade" stroke="#82ca9d" />
         
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
