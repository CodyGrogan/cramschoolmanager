import Teacher from "./Teacher";
import Student from "./Student";
import SchoolClass from "./SchoolClass";
class School {
    constructor(name: string, schoolID: string) {
        this.name = name;
        this.address ='';
        this.teacherList = [];        
        this.studentList = [];
        this.classList = [];
        this.schoolID = schoolID;
    }
    name;
    address: string;
    schoolID: string;
    teacherList: Teacher[];
    studentList: Student[];
    classList: SchoolClass[];

    createClass(name:string ){
        let newclass = new SchoolClass(name, this.name, this.schoolID);
        this.classList.push(newclass);
    }

    addStudent(studentname:string, age:number, parent1: string, parent2: string, phone: string, email:string ){
        let newdate = new Date();
        let datestring = newdate.toISOString();
        let newid:string = this.name + this.studentList.length+datestring;
        let newstudent = new Student(studentname, age, parent1, parent2, phone, email, newid, this.name, this.schoolID);
        this.studentList.push(newstudent);
    }

}

export default School;