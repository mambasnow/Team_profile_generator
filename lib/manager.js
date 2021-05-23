const Employee = require('./Employee');


class manager extends Employee{
    constructor(name,id,email, officeNum){
        super(name,id,email);
        this.officeNum = officeNum;
    }
    officeNumber(){
        return this.number
    }
    getRole(){
        return `Mananger`
    }

}


module.exports = manager;