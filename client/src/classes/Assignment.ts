
interface GradeObj{
    name: string,
    value: number
}

class Assignment{
    constructor(date: string, name: string, studentList: string[]){
        this.name = name;
        this.duedate = date;
        this.grades = [];
        let thisdate = new Date();
        let datestring = thisdate.toISOString();
        this.id= datestring + this.name + this.duedate;
        
        for (let i = 0; i < studentList.length; i++){
         
            let obj: GradeObj = {name: studentList[i], value: 0}
            this.grades.push(obj);
        }
        
    }
    name: string;
    duedate: string;
    grades: GradeObj[];
    id: string;
}

export default Assignment;