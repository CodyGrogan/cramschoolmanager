class Lesson{
    constructor(date: string, num: number, studentList: string[], name: string, lessonid: string){
        this.num = num;
        this.date = date;
        this.name = name;
        this.lessonplan = '';
        this.finished = false;
        this.attendance = [];
        this.lessonid = lessonid;
        console.log('about to loop in Lesson Constructor');
        for (let i = 0; i < studentList.length; i++){
            let obj = {name: studentList[i], value: false}
            this.attendance.push(obj);
            console.log(this.attendance);
        }

    }
    num;
    date;
    lessonplan: string;
    attendance: any[];
    finished: boolean;
    name;
    lessonid: string;

}

export default Lesson;