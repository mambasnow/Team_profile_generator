const Employee = require('./Employee');


class manager extends Employee{
    constructor(name,id,email, officeNum){
        super(name,id,email);
        this.officeNum = officeNum;
        this.role = "Manager";
    }
    officeNumber(){
        return this.number
    }
 

}


module.exports = manager;