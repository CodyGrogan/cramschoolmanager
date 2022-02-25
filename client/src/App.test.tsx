import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import SchoolClass from './classes/SchoolClass';
import Student from './classes/Student';


test('renders homepagetext', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});



test('create student and schoolclass, expect classname to be myclass', () =>{

  let newclass = new SchoolClass('myclass', 'school', 'schoolid');
  let newstudent = new Student('billy', 11, 'john', 'mary', '123456', 'hello@fake.com', 'unknownid', 'unknownschoolname', 'unknownschoolid', 'Male');
  newclass.addStudent(newstudent);
  let studentsclass = newstudent.classes[0];
  expect(studentsclass).toBe('myclass');
})

test('create student and schoolclass, expect student[0] to be billy', () =>{

  let newclass = new SchoolClass('myclass', 'school', 'unknown');
  let newstudent = new Student('billy', 11, 'john', 'mary', '123456', 'hello@fake.com', 'unknownid', 'unknown', 'unknown', 'Male');
  newclass.addStudent(newstudent);
  let classstudent = newclass.studentList[0];
  expect(classstudent).toBe('billy');
});

test('if two students with same name added to class, dont add the student', () =>{

  let newclass = new SchoolClass('myclass', 'school', 'unknown');
  let newstudent = new Student('billy', 11, 'john', 'mary', '123456', 'hello@fake.com', 'unknownid', 'unknown', 'unknown', 'Male');
  let newstudent2 = new Student('billy', 11, 'john', 'mary', '123456', 'hello@fake.com', 'unknownid', 'unknown', 'unknown', 'Male');
  newclass.addStudent(newstudent);
  newclass.addStudent(newstudent2);
  let length = newclass.studentList.length;
  expect(length).toBe(1);
});


test('expect navbar to be on Student page', ()=>{

  render(<App />);
  const linkElement = screen.getByText(/Students/i);
  linkElement.click();
  const navbar = screen.getByText(/Cram School Manager/i);
  expect(navbar).toBeInTheDocument();

});



test('expect return home button to appear when not logged in, clicking it returns to homepage', ()=>{

  render(<App />);
  const linkElement = screen.getByText(/Students/i);
  linkElement.click();

  const returnBtn = screen.getByText(/Return/i);
  returnBtn.click();

  const welcome = screen.getByText(/Welcome/i);

  expect(welcome).toBeInTheDocument();

});