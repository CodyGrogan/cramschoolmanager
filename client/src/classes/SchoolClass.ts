import Teacher from "./Teacher";
import Student from "./Student";
import Lesson from "./Lesson";

class SchoolClass{
    constructor(name: string){
        this.name = name;
        this.teacherList = [];
        this.studentList = [];
        this.lessonList = [];

    }

    name;
    teacherList: string[];
    studentList: string[];
    startDate: string = '';
    endDate: string = '';
    type: string = '';
    lessonList: Lesson[];

    addStudent(student: Student){
        student.classes.push(this.name);
        this.studentList.push(student.name);

    }

    addTeacher(teacher: Teacher){
        teacher.classes.push(this.name);
        this.teacherList.push(teacher.name);
    }

    createLesson(dateString: string){

        let newLesson = new Lesson(dateString, this.lessonList.length+1, this.studentList);
        this.lessonList.push(newLesson);

    }

}

export default SchoolClass;