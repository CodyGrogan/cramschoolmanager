
class Assignment{
    constructor(date: string, name: string, studentList: string[]){
        this.name = name;
        this.duedate = date;
        this.grades = [];
        
        for (let i = 0; i < studentList.length; i++){
         
            let obj = {name: studentList[i], value: 0}
            this.grades.push(obj);
        }
        
    }
    name: string;
    duedate: string;
    grades: any[];
}

export default Assignment;