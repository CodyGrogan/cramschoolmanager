import Teacher from "./Teacher";
import Student from "./Student";
import Lesson from "./Lesson";
import Assignment from "./Assignment";
import School from "./School";

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
    maleStudents: number = 0;
    femaleStudents: number = 0;

    addStudent(student: Student){

        if (this.studentExists.get(student.name) != true){
            this.studentExists.set(student.name, true);
            student.classes.push(this.name);
            this.studentList.push(student.name);
            if (student.gender == 'Male'){
                this.maleStudents = this.maleStudents + 1;
            }
            else{
                this.femaleStudents = this.femaleStudents + 1;
            }

            this.existArr = Array.from(this.studentExists, ([name, value]) => ({ name, value }));

            for (let i = 0; i< this.lessonList.length; i++){
                this.addStudentToLesson(student, this.lessonList[i]);
            }

            for (let i = 0; i< this.assignmentList.length; i++){
                this.addStudentToAssignment(student, this.assignmentList[i]);
            }
        }
    }

    addTeacher(teacher: Teacher){
        teacher.classes.push(this.name);
        this.teacherList.push(teacher.name);
    }

    createLesson(dateString: string, lessonName: string, lessonPlan: string){

        let newid = this.schoolName + dateString + lessonName + this.name;
        let newLesson = new Lesson(dateString, this.lessonList.length+1, this.studentList, lessonName, newid, lessonPlan);
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

    addStudentToLesson(student: Student, lesson: Lesson){
        lesson.attendance.push({name: student.name, value: false});

    }

    addStudentToAssignment(student: Student, assignment: Assignment){
        assignment.grades.push({name: student.name, value: 0});

    }

    changeName(school: School, newName: string){
        //student objs need to be updated with the new class name.
        //so each student who is enrolled in this class must have their classlist updated with the new name.

        for (let i = 0; i < this.studentList.length; i++){
            let index = school.studentList.findIndex(obj => obj.name === this.studentList[i]);
                if (index >= 0){
                let classIndex = school.studentList[index].classes.indexOf(this.name);
                    if (classIndex >= 0){
                    school.studentList[index].classes[classIndex] = newName;
                    }
                }

        }

        this.name = newName;

    }

}

export default SchoolClass;