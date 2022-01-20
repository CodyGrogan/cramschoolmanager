
class Teacher{
    constructor(name: string, phone:string, email:string){
        this.name = name;
       
        this.phone = phone;
        this.email = email;
        this.classes = [];
    }
   name;
 
   phone;
   email;
   classes: string[];
   
}

export default Teacher;