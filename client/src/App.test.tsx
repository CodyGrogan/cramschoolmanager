import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import SchoolClass from './classes/SchoolClass';
import Student from './classes/Student';

test('renders homepagetext', () => {
  render(<App />);
  const linkElement = screen.getByText(/Homepage/i);
  expect(linkElement).toBeInTheDocument();
});



test('create student and schoolclass, expect classname to be myclass', () =>{

  let newclass = new SchoolClass('myclass');
  let newstudent = new Student('billy', 11, 'john', 'mary', '123456', 'hello@fake.com');
  newclass.addStudent(newstudent);
  let studentsclass = newstudent.classes[0];
  expect(studentsclass).toBe('myclass');
})

test('create student and schoolclass, expect student[0] to be billy', () =>{

  let newclass = new SchoolClass('myclass');
  let newstudent = new Student('billy', 11, 'john', 'mary', '123456', 'hello@fake.com');
  newclass.addStudent(newstudent);
  let classstudent = newclass.studentList[0];
  expect(classstudent).toBe('billy');
});

