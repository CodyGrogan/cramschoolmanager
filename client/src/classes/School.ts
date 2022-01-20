import Teacher from "./Teacher";
import Student from "./Student";
class School {
    constructor(name: string) {
        this.name = name;
        this.address ='';
        this.teacherList = [];        
        this.studentList = [];
    }
    name;
    address: string;
    teacherList: Teacher[];
    studentList: Student[];

}

export default School;