import Student from "./Student";

class Lesson{
    constructor(date: string, num: number, studentList: Student[]){
        this.num = num;
        this.date = date;
        this.lessonplan = '';
        this.finished = false;
        
        for (let i = 0; i < studentList.length; i++){
            let attendanceinfo = [studentList[i].name, false];
            this.attendance.push(attendanceinfo);
        }

    }
    num;
    date;
    lessonplan: string;
    attendance: any;
    finished: boolean;


}

export default Lesson;