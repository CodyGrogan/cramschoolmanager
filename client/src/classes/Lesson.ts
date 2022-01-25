import Student from "./Student";

class Lesson{
    constructor(date: string, num: number, studentList: string[]){
        this.num = num;
        this.date = date;
        this.lessonplan = '';
        this.finished = false;
        this.attendance = new Map();
        for (let i = 0; i < studentList.length; i++){
            let attendanceinfo = [studentList[i], false];
            this.attendance.set(studentList[i], false);
        }

    }
    num;
    date;
    lessonplan: string;
    attendance: Map<string, boolean>;
    finished: boolean;


}

export default Lesson;