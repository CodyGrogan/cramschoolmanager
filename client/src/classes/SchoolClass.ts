import Teacher from "./Teacher";
import Student from "./Student";
import Lesson from "./Lesson";
import Assignment from "./Assignment";

class SchoolClass{
    constructor(name: string, schoolname: string, schoolID: string){
        this.name = name;
        this.teacherList = [];
        this.studentList = [];
        this.lessonList = [];
        this.assignmentList = [];
        this.archived = false;
        this.schoolName = schoolname;
        this.schoolID = schoolID;
        this.existArr = [];
        this.setMap();
    }
    archived: boolean;
    name;
    teacherList: string[];
    studentList: string[];
    startDate: string = '';
    endDate: string = '';
    type: string = '';
    lessonList: Lesson[];
    assignmentList: Assignment[];
    studentExists: Map<string, boolean> = new Map(); 
    schoolName:string;
    schoolID: string;
    existArr: any[];

    addStudent(student: Student){

        if (this.studentExists.get(student.name) != true){
            this.studentExists.set(student.name, true);
            student.classes.push(this.name);
            this.studentList.push(student.name);
            this.existArr = Array.from(this.studentExists, ([name, value]) => ({ name, value }));
        }
    }

    addTeacher(teacher: Teacher){
        teacher.classes.push(this.name);
        this.teacherList.push(teacher.name);
    }

    createLesson(dateString: string, lessonName: string){

        let newid = this.schoolName + dateString + lessonName + this.name;
        let newLesson = new Lesson(dateString, this.lessonList.length+1, this.studentList, lessonName, newid);
        this.lessonList.push(newLesson);

    }
    
    createAssignment(dateString: string, name: string){

        let newAssignment = new Assignment(dateString, name, this.studentList);
        this.assignmentList.push(newAssignment);
    }

    setMap(){
        this.studentExists = new Map();
        if (this.existArr.length > 0){
            for (let i = 0; i < this.existArr.length; i++){
            console.log(this.existArr[i].name);
           this.studentExists.set(this.existArr[i].name, true);

        }
       
    }
    }

}

export default SchoolClass;