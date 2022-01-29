import Teacher from "./Teacher";
import Student from "./Student";
import SchoolClass from "./SchoolClass";
class School {
    constructor(name: string) {
        this.name = name;
        this.address ='';
        this.teacherList = [];        
        this.studentList = [];
        this.classList = [];
    }
    name;
    address: string;
    teacherList: Teacher[];
    studentList: Student[];
    classList: SchoolClass[];

    createClass(name:string ){
        let newclass = new SchoolClass(name);
        this.classList.push(newclass);
    }

}

export default School;