import Teacher from "./Teacher";
import Student from "./Student";

class SchoolClass{
    constructor(name: string){
        this.name = name;
        this.teacherList = [];
        this.studentList = [];

    }

    name;
    teacherList: Teacher[];
    studentList: Student[];


}

export default SchoolClass;