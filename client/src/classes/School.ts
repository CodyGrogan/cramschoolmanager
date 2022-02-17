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

        this.createClass('My First Class');
        //this.addStudent('Example Student', 0, 'Example Parent1', 'Example Paren2', 'Example Phone', 'Example Email');
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

    addStudent(studentname:string, age:number, parent1: string, parent2: string, phone: string, email:string, gender: string ){
        let newdate = new Date();
        let datestring = newdate.toISOString();
        let newid:string = this.name + this.studentList.length+datestring;
        let newstudent = new Student(studentname, age, parent1, parent2, phone, email, newid, this.name, this.schoolID, gender);
        this.studentList.push(newstudent);
    }

    loadClasses(data: any[]){
        console.log('loading classes');
        this.classList= [];
        for (let i = 0; i < data.length; i++){
            console.log(data[i].studentExists);
            let thisname = data[i].name;
            this.createClass(thisname);
            let index = this.classList.length - 1;
            this.classList[index].archived = data[i].archived;
            this.classList[index].assignmentList = data[i].assignmentList;
            this.classList[index].endDate = data[i].endDate;
            this.classList[index].startDate = data[i].startDate;
            this.classList[index].studentList = data[i].studentList;
            this.classList[index].type = data[i].type;
            this.classList[index].existArr = data[i].existArr;
            this.classList[index].lessonList = data[i].lessonList;
            this.classList[index].schoolID = data[i].schoolID;
            this.classList[index].teacherList = data[i].teacherList;
            this.classList[index].schoolName = data[i].schoolName;
            this.classList[index].maleStudents = data[i].maleStudents;
            this.classList[index].femaleStudents = data[i].femaleStudents;
            this.classList[index].setMap();
            console.log('class at' + index + 'is named' + this.classList[index].name)
        }
    }

}

export default School;