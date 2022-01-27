
class Assignment{
    constructor(date: string, name: string, studentList: string[]){
        this.name = name;
        this.duedate = date;
        for (let i = 0; i < studentList.length; i++){
            this.grades.set(studentList[i], 0);
        }
        
    }
    name: string;
    duedate: string;
    grades: Map<string, number> = new Map();
}

export default Assignment;