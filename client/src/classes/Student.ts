


class Student{
    constructor(name: string, age: number, parent1: string, parent2:string, phone:string, email:string, studentID: string){
        this.name = name;
        this.age= age;
        this.parent1 = parent1;
        this.parent2 = parent2;
        this.phone = phone;
        this.email = email;
        this.classes = [];
        this.studentID = studentID;
    }
   name;
   age;
   parent1;
   parent2;
   phone;
   email;
   classes: string[];
   studentID: string;
   
}

export default Student;