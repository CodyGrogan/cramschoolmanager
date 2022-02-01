class Lesson{
    constructor(date: string, num: number, studentList: string[], name: string, lessonid: string){
        this.num = num;
        this.date = date;
        this.name = name;
        this.lessonplan = '';
        this.finished = false;
        this.attendance = new Map();
        this.lessonid = lessonid;
        for (let i = 0; i < studentList.length; i++){
            this.attendance.set(studentList[i], false);
        }

    }
    num;
    date;
    lessonplan: string;
    attendance: Map<string, boolean>;
    finished: boolean;
    name;
    lessonid: string;

}

export default Lesson;