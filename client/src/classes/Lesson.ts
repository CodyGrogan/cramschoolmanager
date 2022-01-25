import Student from "./Student";

class Lesson{
    constructor(date: string, num: number, studentList: String[]){
        this.num = num;
        this.date = date;
        this.lessonplan = '';
        this.finished = false;
        this.attendance =[];
        for (let i = 0; i < studentList.length; i++){
            let attendanceinfo = [studentList[i], false];
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