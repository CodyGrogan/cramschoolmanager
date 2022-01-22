import Teacher from "./Teacher";
import Student from "./Student";

class SchoolClass{
    constructor(name: string){
        this.name = name;
        this.teacherList = [];
        this.studentList = [];

    }

    name;
    teacherList: string[];
    studentList: string[];

    addStudent(student: Student){
        student.classes.push(this.name);
        this.studentList.push(student.name);

    }

    addTeacher(teacher: Teacher){
        teacher.classes.push(this.name);
        this.teacherList.push(teacher.name);
    }

}

export default SchoolClass;